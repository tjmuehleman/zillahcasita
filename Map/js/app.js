/* Yakima County tasting map — filtering, open/closed logic, markers, detail panel. */
(function () {
  "use strict";

  const DAY_KEYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const DAY_LABELS = { mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun" };
  const TYPE_COLORS = { winery: "#8e3b46", brewery: "#c98a2c", cidery: "#7a9a3d" };
  const TYPE_LABELS = { winery: "Winery", brewery: "Brewery", cidery: "Cidery" };
  const TZ = "America/Los_Angeles";

  const state = {
    day: "now",          // "now" or mon..sun
    time: "any",         // "any" or minutes since midnight (number)
    types: new Set(["winery", "brewery", "cidery"]),
    openOnly: false,
    eventsOnly: false,
    search: "",
    selected: null,
  };

  // ---------- Time helpers ----------
  function nowInPacific() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: TZ, weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false,
    }).formatToParts(new Date());
    const get = (t) => parts.find((p) => p.type === t).value;
    const dayKey = get("weekday").toLowerCase().slice(0, 3);
    const minutes = (parseInt(get("hour"), 10) % 24) * 60 + parseInt(get("minute"), 10);
    return { dayKey, minutes };
  }

  function hmToMinutes(hm) {
    const [h, m] = hm.split(":").map(Number);
    return h * 60 + m;
  }

  function fmtMinutes(min) {
    let h = Math.floor(min / 60);
    const m = min % 60;
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return m === 0 ? `${h} ${ampm}` : `${h}:${String(m).padStart(2, "0")} ${ampm}`;
  }

  function fmtRange(range) {
    return `${fmtMinutes(hmToMinutes(range[0]))}–${fmtMinutes(hmToMinutes(range[1]))}`;
  }

  // Resolve the filter to a concrete { dayKey, minutes|null }
  function resolveFilter() {
    if (state.day === "now") {
      const now = nowInPacific();
      return { dayKey: now.dayKey, minutes: now.minutes, isNow: true };
    }
    return {
      dayKey: state.day,
      minutes: state.time === "any" ? null : state.time,
      isNow: false,
    };
  }

  // Open status of a venue for the resolved filter.
  // Returns { open: bool, label: string, cls: "open"|"closed"|"appt" }
  function venueStatus(venue, filter) {
    const ranges = venue.hours ? venue.hours[filter.dayKey] : null;
    if (venue.byAppointment && (!ranges || ranges.length === 0)) {
      return { open: false, label: "By appointment", cls: "appt" };
    }
    if (!ranges || ranges.length === 0) {
      return { open: false, label: `Closed ${filter.isNow ? "today" : DAY_LABELS[filter.dayKey]}`, cls: "closed" };
    }
    const rangeText = ranges.map(fmtRange).join(", ");
    if (filter.minutes === null) {
      return { open: true, label: `Open ${DAY_LABELS[filter.dayKey]} ${rangeText}`, cls: "open" };
    }
    const openNow = ranges.some(
      (r) => filter.minutes >= hmToMinutes(r[0]) && filter.minutes < hmToMinutes(r[1])
    );
    if (openNow) {
      const closing = ranges.find((r) => filter.minutes < hmToMinutes(r[1]));
      return { open: true, label: `Open — until ${fmtMinutes(hmToMinutes(closing[1]))}`, cls: "open" };
    }
    const upcoming = ranges.find((r) => hmToMinutes(r[0]) > filter.minutes);
    if (upcoming) {
      return { open: false, label: `Closed — opens ${fmtMinutes(hmToMinutes(upcoming[0]))}`, cls: "closed" };
    }
    return { open: false, label: `Closed — was open ${rangeText}`, cls: "closed" };
  }

  function eventsOnDay(venue, dayKey) {
    return (venue.events || []).filter((e) => Array.isArray(e.days) && e.days.includes(dayKey));
  }

  // ---------- Map ----------
  const map = L.map("map", { scrollWheelZoom: true });
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([HOME.lat, HOME.lng], {
    icon: L.divIcon({ className: "", html: '<div class="marker-home" title="La Casita de Zillah">🏠</div>', iconSize: [26, 26], iconAnchor: [13, 24] }),
    zIndexOffset: 1000,
  })
    .addTo(map)
    .bindPopup(`<div class="popup-name">${HOME.name}</div><div>Your home base</div><a class="popup-link" href="${HOME.website}">zillahcasita.com</a>`);

  const markerLayer = L.layerGroup().addTo(map);

  function makeIcon(venue, status, hasEventToday) {
    const color = status.open ? TYPE_COLORS[venue.type] : "#a8a49a";
    const size = status.open ? 26 : 20;
    const badge = hasEventToday ? '<span class="marker-badge">🎶</span>' : "";
    return L.divIcon({
      className: "",
      html: `<div class="marker-wrap" style="width:${size}px;height:${size}px"><span class="marker-pin" style="background:${color}"></span>${badge}</div>`,
      iconSize: [size, size],
      iconAnchor: [size / 2, size],
      popupAnchor: [0, -size],
    });
  }

  // ---------- Filtering + rendering ----------
  let markers = new Map(); // venue -> L.Marker

  function passesFilters(venue, filter, status) {
    if (!state.types.has(venue.type)) return false;
    if (state.openOnly && !status.open) return false;
    if (state.eventsOnly && (venue.events || []).length === 0) return false;
    if (state.search) {
      const q = state.search.toLowerCase();
      if (!venue.name.toLowerCase().includes(q) && !(venue.city || "").toLowerCase().includes(q)) return false;
    }
    return true;
  }

  function render() {
    const filter = resolveFilter();
    markerLayer.clearLayers();
    markers = new Map();

    const listEl = document.getElementById("venue-list");
    listEl.innerHTML = "";

    const visible = [];
    for (const venue of VENUES) {
      const status = venueStatus(venue, filter);
      if (!passesFilters(venue, filter, status)) continue;
      visible.push({ venue, status });
    }

    // Open first, then alphabetical
    visible.sort((a, b) => (b.status.open - a.status.open) || a.venue.name.localeCompare(b.venue.name));

    for (const { venue, status } of visible) {
      const todaysEvents = eventsOnDay(venue, filter.dayKey);

      const marker = L.marker([venue.lat, venue.lng], {
        icon: makeIcon(venue, status, todaysEvents.length > 0),
        zIndexOffset: status.open ? 500 : 0,
      });
      marker.bindPopup(
        `<div class="popup-name">${venue.name}</div>` +
          `<div class="status ${status.cls}">${status.label}</div>` +
          (todaysEvents.length ? `<div>🎶 ${todaysEvents.map((e) => e.name).join(" · ")}</div>` : "") +
          `<a class="popup-link" href="#" data-detail="${venue.name}">Details</a>`
      );
      marker.on("click", () => selectVenue(venue, { fromMap: true }));
      marker.addTo(markerLayer);
      markers.set(venue, marker);

      const li = document.createElement("li");
      li.className = "venue-card" + (state.selected === venue ? " selected" : "");
      li.innerHTML =
        `<h3><span class="dot dot-${venue.type}"></span>${venue.name}</h3>` +
        `<div class="meta">${TYPE_LABELS[venue.type]} · ${venue.city}</div>` +
        `<div class="status ${status.cls}">${status.label}</div>` +
        todaysEvents.map((e) => `<span class="event-flag">🎶 ${e.name}${e.schedule ? " · " + e.schedule : ""}</span>`).join(" ");
      li.addEventListener("click", () => selectVenue(venue, { fromList: true }));
      listEl.appendChild(li);
    }

    const openCount = visible.filter((v) => v.status.open).length;
    const when = filter.isNow
      ? "right now"
      : `${DAY_LABELS[filter.dayKey]}${filter.minutes !== null ? " at " + fmtMinutes(filter.minutes) : ""}`;
    document.getElementById("summary").textContent =
      `${visible.length} place${visible.length === 1 ? "" : "s"} shown · ${openCount} open ${when}`;

    if (state.selected && !visible.some((v) => v.venue === state.selected)) {
      closeDetail();
    } else if (state.selected) {
      renderDetail(state.selected);
    }
  }

  // ---------- Selection + detail panel ----------
  function selectVenue(venue, opts = {}) {
    state.selected = venue;
    document.querySelectorAll(".venue-card").forEach((el) => el.classList.remove("selected"));
    renderDetail(venue);
    const marker = markers.get(venue);
    if (marker) {
      if (!opts.fromMap) map.panTo([venue.lat, venue.lng]);
      marker.openPopup();
    }
    render();
  }

  function closeDetail() {
    state.selected = null;
    document.getElementById("detail-panel").classList.add("hidden");
  }

  function renderDetail(venue) {
    const filter = resolveFilter();
    const panel = document.getElementById("detail-panel");
    const status = venueStatus(venue, filter);

    const hoursRows = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
      .map((d) => {
        const ranges = venue.hours ? venue.hours[d] : null;
        const val = ranges && ranges.length ? ranges.map(fmtRange).join(", ") : venue.byAppointment ? "By appt" : "Closed";
        return `<tr class="${d === filter.dayKey ? "today" : ""}"><td>${DAY_LABELS[d]}</td><td>${val}</td></tr>`;
      })
      .join("");

    const eventsHtml = (venue.events || []).length
      ? `<div class="detail-section-title">Events &amp; happenings</div>` +
        venue.events
          .map(
            (e) =>
              `<div class="event-item"><span class="event-name">${e.name}</span>` +
              (e.schedule ? `<div class="event-sched">${e.schedule}</div>` : "") +
              (e.description ? `<div class="event-desc">${e.description}</div>` : "") +
              `</div>`
          )
          .join("")
      : "";

    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venue.address)}`;

    panel.innerHTML =
      `<button class="close-btn" aria-label="Close">✕</button>` +
      `<div class="detail-type ${venue.type}">${TYPE_LABELS[venue.type]}</div>` +
      `<h2>${venue.name}</h2>` +
      `<div class="status ${status.cls}">${status.label}</div>` +
      `<p class="addr">${venue.address}</p>` +
      `<div class="links">` +
      (venue.website ? `<a href="${venue.website}" target="_blank" rel="noopener">Website</a>` : "") +
      `<a href="${mapsUrl}" target="_blank" rel="noopener">Directions</a>` +
      (venue.phone ? `<a href="tel:${venue.phone.replace(/[^0-9+]/g, "")}">${venue.phone}</a>` : "") +
      `</div>` +
      `<div class="detail-section-title">Hours</div>` +
      `<table class="hours-table">${hoursRows}</table>` +
      eventsHtml +
      (venue.notes ? `<p class="detail-notes">${venue.notes}</p>` : "");

    panel.classList.remove("hidden");
    panel.querySelector(".close-btn").addEventListener("click", closeDetail);
  }

  // ---------- Controls ----------
  function buildTimeOptions() {
    const sel = document.getElementById("time-select");
    for (let min = 9 * 60; min <= 21 * 60; min += 30) {
      const opt = document.createElement("option");
      opt.value = String(min);
      opt.textContent = fmtMinutes(min);
      sel.appendChild(opt);
    }
  }

  document.getElementById("day-pills").addEventListener("click", (e) => {
    const btn = e.target.closest(".pill");
    if (!btn) return;
    document.querySelectorAll("#day-pills .pill").forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    state.day = btn.dataset.day;
    const timeSel = document.getElementById("time-select");
    timeSel.disabled = state.day === "now";
    render();
  });

  document.getElementById("time-select").addEventListener("change", (e) => {
    state.time = e.target.value === "any" ? "any" : parseInt(e.target.value, 10);
    render();
  });

  document.getElementById("type-chips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    chip.classList.toggle("active");
    const t = chip.dataset.type;
    if (chip.classList.contains("active")) state.types.add(t);
    else state.types.delete(t);
    render();
  });

  document.getElementById("open-only").addEventListener("change", (e) => {
    state.openOnly = e.target.checked;
    render();
  });

  document.getElementById("events-only").addEventListener("change", (e) => {
    state.eventsOnly = e.target.checked;
    render();
  });

  document.getElementById("search").addEventListener("input", (e) => {
    state.search = e.target.value.trim();
    render();
  });

  // ---------- Upcoming events overlay ----------
  const TYPE_PLURALS = { winery: "Wineries", brewery: "Breweries", cidery: "Cideries" };

  function renderEventsPanel() {
    const content = document.getElementById("events-content");
    content.innerHTML = "";
    for (const type of ["winery", "brewery", "cidery"]) {
      const withEvents = VENUES
        .filter((v) => v.type === type && (v.events || []).length > 0)
        .sort((a, b) => a.name.localeCompare(b.name));
      if (!withEvents.length) continue;

      const title = document.createElement("div");
      title.className = `events-group-title ${type}`;
      title.innerHTML = `<span class="dot dot-${type}"></span>${TYPE_PLURALS[type]}`;
      content.appendChild(title);

      for (const venue of withEvents) {
        const block = document.createElement("div");
        block.className = "events-venue";
        const nameBtn = document.createElement("button");
        nameBtn.className = "events-venue-name";
        nameBtn.textContent = venue.name;
        nameBtn.addEventListener("click", () => {
          closeEventsPanel();
          selectVenue(venue);
        });
        block.appendChild(nameBtn);
        block.insertAdjacentHTML(
          "beforeend",
          ` <span class="events-venue-city">· ${venue.city}</span>` +
            venue.events
              .map(
                (e) =>
                  `<div class="event-item"><span class="event-name">${e.name}</span>` +
                  (e.schedule ? `<div class="event-sched">${e.schedule}</div>` : "") +
                  (e.description ? `<div class="event-desc">${e.description}</div>` : "") +
                  `</div>`
              )
              .join("")
        );
        content.appendChild(block);
      }
    }
  }

  function openEventsPanel() {
    renderEventsPanel();
    document.getElementById("events-overlay").classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
  function closeEventsPanel() {
    document.getElementById("events-overlay").classList.add("hidden");
    document.body.style.overflow = "";
  }

  document.getElementById("events-btn").addEventListener("click", openEventsPanel);
  document.getElementById("events-close").addEventListener("click", closeEventsPanel);
  document.getElementById("events-overlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeEventsPanel();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeEventsPanel();
  });

  // ---------- Init ----------
  buildTimeOptions();

  // Reset controls to defaults — some browsers restore form state across reloads,
  // which would silently desync the UI from `state`.
  document.getElementById("open-only").checked = false;
  document.getElementById("events-only").checked = false;
  document.getElementById("search").value = "";
  document.getElementById("time-select").value = "any";

  function fitAll() {
    const bounds = L.latLngBounds([[HOME.lat, HOME.lng]]);
    VENUES.forEach((v) => bounds.extend([v.lat, v.lng]));
    map.fitBounds(bounds.pad(0.12), { maxZoom: 13 });
  }
  fitAll();
  // Re-fit once everything is laid out (avoids a zero-height init race)
  window.addEventListener("load", () => {
    map.invalidateSize();
    fitAll();
  });

  render();
  // Refresh "open now" status each minute
  setInterval(() => { if (state.day === "now") render(); }, 60 * 1000);
})();
