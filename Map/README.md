# Sip & Sample — the Yakima Valley Tasting Map

Companion site to [zillahcasita.com](https://www.zillahcasita.com): an interactive map of
every winery, brewery, and cidery in Yakima County, WA, showing who's open at any day/time
and what events (live music, food trucks, trivia, release weekends) are happening.

## What's in the data

- **55 venues** — 41 wineries, 13 breweries, 1 cidery — compiled July 2026 from each
  venue's own website, the Rattlesnake Hills Wine Trail, Wine Yakima Valley, Visit Yakima,
  and current listings. Permanently closed venues (Severino, Wineglass, Hop Capital,
  Berchman's, etc.) were verified and excluded.
- Per venue: address, coordinates, phone, website, day-by-day hours (24h pairs),
  appointment-only flag, notes, and events. Recurring events carry a `days` array so the
  map can badge them on the matching weekday.

## Files

- `index.html` — page shell and filter controls
- `css/styles.css` — styling (matches La Casita de Zillah branding)
- `js/data.js` — all venue data (`HOME` + `VENUES`); this is the only file to edit when
  hours or events change
- `js/app.js` — map, open/closed logic (America/Los_Angeles), filters, detail panel

No build step — it's a static site using Leaflet + OpenStreetMap tiles from CDN.

## Run locally

```sh
python3 -m http.server 8734 --directory .
# open http://localhost:8734
```

## Deploy

Upload the folder anywhere static (Netlify, GitHub Pages, Cloudflare Pages, or a
`map.zillahcasita.com` subdomain), then link it from the site's Wineries/Breweries nav.

## Maintenance

Hours and events drift — venues change seasonally. Edit `js/data.js` directly, or re-run
the research/merge process. The footer already tells visitors to confirm before driving.
