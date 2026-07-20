// Venue data for the Yakima County tasting map.
// hours: mon-sun, each null (closed) or a list of [open, close] pairs in 24h "HH:MM".
// events[]: {name, schedule, description, days, url?, date?, endDate?} — days lists
// weekdays for weekly-recurring events; date/endDate (YYYY-MM-DD) for dated ones.
// Past-dated events are hidden at runtime and should be pruned from this file.

const DATA_UPDATED = "2026-07-20";

const HOME = {
  name: "La Casita de Zillah",
  lat: 46.4021,
  lng: -120.2626,
  website: "https://www.zillahcasita.com",
};

const VENUES = [
  {
    "name": "5th Line Brewing Co.",
    "type": "brewery",
    "address": "1015 E Lincoln Ave Ste 106, Yakima, WA 98901",
    "lat": 46.6089,
    "lng": -120.494,
    "phone": "(509) 367-6300",
    "website": "https://5thlinebrewing.com/",
    "hours": {
      "mon": [
        [
          "16:00",
          "21:00"
        ]
      ],
      "tue": null,
      "wed": [
        [
          "16:00",
          "21:00"
        ]
      ],
      "thu": [
        [
          "16:00",
          "21:00"
        ]
      ],
      "fri": [
        [
          "14:00",
          "21:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "21:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "19:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Hockey-themed brewery opened 2023; snack kitchen with house-made pizzas and small eats; family and dog friendly.",
    "events": [],
    "city": "Yakima"
  },
  {
    "name": "Bale Breaker Brewing Company",
    "type": "brewery",
    "address": "1801 Birchfield Rd, Yakima, WA 98901",
    "lat": 46.577,
    "lng": -120.4353,
    "phone": "(509) 424-4000",
    "website": "https://balebreaker.com/taproom/yakima/",
    "hours": {
      "mon": [
        [
          "15:00",
          "21:00"
        ]
      ],
      "tue": [
        [
          "15:00",
          "21:00"
        ]
      ],
      "wed": [
        [
          "15:00",
          "21:00"
        ]
      ],
      "thu": [
        [
          "15:00",
          "21:00"
        ]
      ],
      "fri": [
        [
          "12:00",
          "21:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "21:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "20:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Taproom in the middle of a 4th-generation family hop farm (Moxee area, east of Yakima); 16 taps, large patio and lawn games; dog and family friendly; rotating food trucks daily.",
    "events": [
      {
        "name": "Rotating food trucks",
        "schedule": "Daily (approx. 3-8 PM weekdays, 12-8 PM weekends)",
        "description": "Rotating vendors such as Buen Taco, Lab-Dogz, and Tacos Don Chayo.",
        "days": [
          "mon",
          "tue",
          "wed",
          "thu",
          "fri",
          "sat",
          "sun"
        ],
        "url": "https://balebreaker.com/taproom/yakima/"
      },
      {
        "name": "Trivia Night",
        "schedule": "Monthly",
        "description": "Taproom trivia night.",
        "days": [],
        "url": "https://balebreaker.com/taproom/yakima/"
      }
    ],
    "city": "Yakima"
  },
  {
    "name": "Bron Yr Aur Brewing Co.",
    "type": "brewery",
    "address": "12160 US Hwy 12, Naches, WA 98937",
    "lat": 46.7388,
    "lng": -120.7391,
    "phone": "(509) 653-1109",
    "website": "https://bronyraurbrewing.com/",
    "hours": {
      "mon": [
        [
          "12:00",
          "20:00"
        ]
      ],
      "tue": [
        [
          "12:00",
          "20:00"
        ]
      ],
      "wed": [
        [
          "12:00",
          "20:00"
        ]
      ],
      "thu": [
        [
          "12:00",
          "20:00"
        ]
      ],
      "fri": [
        [
          "12:00",
          "21:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "21:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "20:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Brewpub on Highway 12 at the gateway to White Pass with a large outdoor area; full food menu (pizza, online ordering via Toast); on-site distillery.",
    "events": [],
    "city": "Naches"
  },
  {
    "name": "Cowiche Creek Brewing Company",
    "type": "brewery",
    "address": "514 Thompson Rd, Cowiche, WA 98923",
    "lat": 46.6583,
    "lng": -120.6834,
    "phone": "(509) 678-0324",
    "website": "https://www.cowichecreekbrewing.com/",
    "hours": {
      "mon": null,
      "tue": [
        [
          "15:00",
          "20:00"
        ]
      ],
      "wed": [
        [
          "15:00",
          "20:00"
        ]
      ],
      "thu": [
        [
          "15:00",
          "20:00"
        ]
      ],
      "fri": [
        [
          "15:00",
          "21:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "21:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "18:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Farm brewery surrounded by hop fields (opened 2017); owners grow their own barley; on-site kitchen at The Home 40 Taproom (kitchen closes 30-60 min before taproom).",
    "events": [
      {
        "name": "Seasonal special events / live music",
        "schedule": "Periodic (e.g., summer luau with live music)",
        "description": "Occasional themed events and live music throughout the year.",
        "days": [],
        "url": "https://www.cowichecreekbrewing.com/"
      }
    ],
    "city": "Cowiche"
  },
  {
    "name": "Oak Creek Brewstillery",
    "type": "brewery",
    "address": "10160 S Naches Rd, Naches, WA 98937",
    "lat": 46.7277,
    "lng": -120.7003,
    "phone": "(509) 653-8006",
    "website": "https://oakcreekbrewstillery.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": [
        [
          "15:00",
          "20:00"
        ]
      ],
      "thu": [
        [
          "15:00",
          "20:00"
        ]
      ],
      "fri": [
        [
          "12:00",
          "21:00"
        ]
      ],
      "sat": [
        [
          "10:00",
          "21:00"
        ]
      ],
      "sun": [
        [
          "10:00",
          "18:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Combined brewery/distillery ('brewstillery') listed on the Yakima Valley Craft Beer Trail; small-batch whiskey, gin and vodka, craft cocktails, and elevated pub food; 21+ venue.",
    "events": [
      {
        "name": "Trivia Night",
        "schedule": "Thursdays",
        "description": "Weekly trivia.",
        "days": [
          "thu"
        ],
        "url": "https://oakcreekbrewstillery.com/"
      },
      {
        "name": "Weekend Brunch",
        "schedule": "Saturdays and Sundays 10 AM-2 PM",
        "description": "Brunch service.",
        "days": [
          "sat",
          "sun"
        ],
        "url": "https://oakcreekbrewstillery.com/"
      }
    ],
    "city": "Naches"
  },
  {
    "name": "Selah Springs Brewing Co.",
    "type": "brewery",
    "address": "310 S 1st St, Selah, WA 98942",
    "lat": 46.6502,
    "lng": -120.5305,
    "phone": "(509) 698-2212",
    "website": "https://www.selahspringsbrewingcompany.com/",
    "hours": {
      "mon": null,
      "tue": [
        [
          "15:00",
          "21:00"
        ]
      ],
      "wed": [
        [
          "15:00",
          "21:00"
        ]
      ],
      "thu": [
        [
          "15:00",
          "21:00"
        ]
      ],
      "fri": [
        [
          "15:00",
          "21:00"
        ]
      ],
      "sat": [
        [
          "15:00",
          "21:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "18:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Cozy downtown Selah brewery (founded 2019) pouring its own beer plus cider and wine; outdoor patio; dog and kid friendly.",
    "events": [],
    "city": "Selah"
  },
  {
    "name": "Shorthead Brewing",
    "type": "brewery",
    "address": "100 N Tieton Rd, Tieton, WA 98947",
    "lat": 46.7046,
    "lng": -120.7525,
    "phone": "(509) 833-4776",
    "website": "https://shortheadbrewing.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": [
        [
          "15:00",
          "20:00"
        ]
      ],
      "thu": [
        [
          "14:00",
          "20:00"
        ]
      ],
      "fri": [
        [
          "14:00",
          "22:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "22:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "20:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Opened June 2024 in a renovated fruit-packing engine room just off Tieton's central square; kids and leashed dogs welcome; rotating food vendors (schedule on Instagram @shortheadbrewing).",
    "events": [
      {
        "name": "Rotating food vendors",
        "schedule": "Varies; posted weekly on social media",
        "description": "Rotating food trucks/vendors at the taproom.",
        "days": [],
        "url": "https://shortheadbrewing.com/"
      }
    ],
    "city": "Tieton"
  },
  {
    "name": "Single Hill Brewing Company",
    "type": "brewery",
    "address": "102 N Naches Ave, Yakima, WA 98901",
    "lat": 46.6051,
    "lng": -120.5004,
    "phone": "(509) 367-6756",
    "website": "https://singlehillbrewing.com/",
    "hours": {
      "mon": null,
      "tue": [
        [
          "06:30",
          "22:00"
        ]
      ],
      "wed": [
        [
          "06:30",
          "22:00"
        ]
      ],
      "thu": [
        [
          "06:30",
          "22:00"
        ]
      ],
      "fri": [
        [
          "06:30",
          "23:00"
        ]
      ],
      "sat": [
        [
          "08:30",
          "23:00"
        ]
      ],
      "sun": [
        [
          "08:30",
          "19:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Downtown Yakima brewery + coffee shop (Catalyst Coffee joined in 2024, so doors open early); breakfast menu and Javi's food truck from 11 AM; outside food welcome; kids corner; leashed dogs welcome; indoor and outdoor taproom.",
    "events": [
      {
        "name": "Trivia Night",
        "schedule": "Wednesdays 7:00-8:30 PM",
        "description": "Team trivia, up to 6 per team.",
        "days": [
          "wed"
        ],
        "url": "https://singlehillbrewing.com/taproom/"
      },
      {
        "name": "Bingo",
        "schedule": "Tuesdays 7:00-8:30 PM",
        "description": "Family-friendly bingo night.",
        "days": [
          "tue"
        ],
        "url": "https://singlehillbrewing.com/taproom/"
      },
      {
        "name": "Live music / DJ sets",
        "schedule": "Various Fridays and Saturdays",
        "description": "Bands and DJ sets, plus a free monthly Single Hill Lounge DJ event.",
        "days": [
          "fri",
          "sat"
        ],
        "url": "https://singlehillbrewing.com/taproom/"
      }
    ],
    "city": "Yakima"
  },
  {
    "name": "The Outskirts Brewing Co.",
    "type": "brewery",
    "address": "707 Test Drive Ln, Selah, WA 98942",
    "lat": 46.6434,
    "lng": -120.5301,
    "phone": "(509) 698-2275",
    "website": "https://outskirtsbrewingco.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": [
        [
          "11:00",
          "21:00"
        ]
      ],
      "thu": [
        [
          "11:00",
          "21:00"
        ]
      ],
      "fri": [
        [
          "11:00",
          "23:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "23:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "20:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Family-owned brewpub opened 2023 in a renovated 100-year-old barn; full restaurant (signature bison burger, steaks); outdoor patio, lawn, and concert venue; family friendly.",
    "events": [
      {
        "name": "Karaoke Night",
        "schedule": "Fridays",
        "description": "Weekly karaoke.",
        "days": [
          "fri"
        ],
        "url": "https://outskirtsbrewingco.com/"
      },
      {
        "name": "Concert series",
        "schedule": "Monthly, Thursday-Saturday evenings",
        "description": "Live bands (e.g., Too Slim & The Taildraggers, Cody Beebe & The Crooks) on the outdoor stage.",
        "days": [
          "thu",
          "fri",
          "sat"
        ],
        "url": "https://outskirtsbrewingco.com/"
      }
    ],
    "city": "Selah"
  },
  {
    "name": "Valley Brewing Co.",
    "type": "brewery",
    "address": "3215 River Rd, Yakima, WA 98902",
    "lat": 46.6185,
    "lng": -120.5531,
    "phone": "(509) 949-5944",
    "website": "http://www.valleybrewingco.com/",
    "hours": {
      "mon": [
        [
          "15:00",
          "21:00"
        ]
      ],
      "tue": [
        [
          "15:00",
          "21:00"
        ]
      ],
      "wed": [
        [
          "15:00",
          "21:00"
        ]
      ],
      "thu": [
        [
          "15:00",
          "21:00"
        ]
      ],
      "fri": [
        [
          "15:00",
          "22:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "22:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "20:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Brewpub/taproom on River Road in the Fruitvale area; food available on site (El Rey food).",
    "events": [],
    "city": "Yakima"
  },
  {
    "name": "Varietal Beer Co.",
    "type": "brewery",
    "address": "416 E Edison Ave, Sunnyside, WA 98944",
    "lat": 46.324,
    "lng": -120.0146,
    "phone": "(509) 515-2222",
    "website": "https://www.varietalbeer.com/",
    "hours": {
      "mon": null,
      "tue": [
        [
          "12:00",
          "21:00"
        ]
      ],
      "wed": [
        [
          "12:00",
          "21:00"
        ]
      ],
      "thu": [
        [
          "12:00",
          "21:00"
        ]
      ],
      "fri": [
        [
          "12:00",
          "21:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "21:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "18:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Lower Valley microbrewery and taproom with indoor seating and outdoor beer garden; guest taps and ciders; rotating food trucks most days (Triple C's smashburgers is the regular).",
    "events": [
      {
        "name": "Rotating food trucks",
        "schedule": "Most open days; Triple C's near-daily, Big Boss Daugs Thu-Fri, Garza's Real BBQ Saturdays",
        "description": "Rotating food truck lineup posted weekly on the taproom page.",
        "days": [
          "mon",
          "tue",
          "wed",
          "thu",
          "fri",
          "sat",
          "sun"
        ],
        "url": "https://www.varietalbeer.com/taproom"
      }
    ],
    "city": "Sunnyside"
  },
  {
    "name": "Wandering Hop Brewery",
    "type": "brewery",
    "address": "508 N 20th Ave, Yakima, WA 98902",
    "lat": 46.6057,
    "lng": -120.5359,
    "phone": "(509) 426-2739",
    "website": "https://wanderinghop.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": [
        [
          "16:00",
          "20:00"
        ]
      ],
      "fri": [
        [
          "12:00",
          "20:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "20:00"
        ]
      ],
      "sun": null
    },
    "byAppointment": false,
    "notes": "Small production brewery and taproom known for hazy IPAs; limited weekend-oriented hours; also brews beers served at Snipes Mountain Restaurant & Tap House; second location (WAnderland) in Zillah.",
    "events": [],
    "city": "Yakima"
  },
  {
    "name": "Wandering Hop: WAnderland",
    "type": "brewery",
    "address": "260 N Bonair Rd, Zillah, WA 98953",
    "lat": 46.4365,
    "lng": -120.2932,
    "phone": "(509) 305-0129",
    "website": "https://wanderinghop.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": [
        [
          "16:00",
          "20:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "19:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "18:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Wandering Hop's countryside taproom in Zillah hop/wine country; serves beer, wine, cider and a food menu; family and pet friendly.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "Tieton Cider Works Cider Bar",
    "type": "cidery",
    "address": "619 W J St Suite 102, Yakima, WA 98902",
    "lat": 46.615273,
    "lng": -120.520054,
    "phone": "509-571-1430",
    "website": "https://tietonciderworks.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": [
        [
          "11:00",
          "20:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "20:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Cider bar for Tieton Cider Works (orchards in Tieton). Indoor/outdoor seating, bocce court, flights, new food menu. Recently relaunched after a 2026 revamp - confirm hours on Facebook before visiting.",
    "events": [
      {
        "name": "Apple Bin Stage concerts",
        "schedule": "Occasional summer weekends",
        "days": [
          "sat",
          "sun"
        ],
        "description": "Outdoor concerts on the cidery's apple-bin stage.",
        "url": "https://tietonciderworks.com/tasting-room-hours-and-events/"
      },
      {
        "name": "Release parties & bocce tournaments",
        "schedule": "Periodic; see Facebook",
        "days": [],
        "description": "Specialty cider release tastings, painting-and-cider nights, apple pie baking contest, bocce tournaments.",
        "url": "https://tietonciderworks.com/tasting-room-hours-and-events/"
      }
    ],
    "city": "Yakima"
  },
  {
    "name": "AntoLin Cellars",
    "type": "winery",
    "address": "14 N Front St, Yakima, WA 98901",
    "lat": 46.603204,
    "lng": -120.508292,
    "phone": "509-961-8370",
    "website": "https://antolincellars.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": [
        [
          "15:00",
          "20:00"
        ]
      ],
      "thu": [
        [
          "15:00",
          "20:00"
        ]
      ],
      "fri": [
        [
          "13:00",
          "21:00"
        ]
      ],
      "sat": [
        [
          "13:00",
          "21:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "16:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Downtown tasting room on historic North Front Street; estate-vineyard wines plus wine smoothies, craft beer, and cider; patio and event space.",
    "events": [
      {
        "name": "Friday night live music",
        "schedule": "Fridays evenings",
        "days": [
          "fri"
        ],
        "description": "Local musicians in the tasting room every Friday night.",
        "url": "https://antolincellars.com/"
      },
      {
        "name": "Paint Nite",
        "schedule": "Periodic Thursday evenings and Saturday afternoons",
        "days": [
          "thu",
          "sat"
        ],
        "description": "Guided painting sessions with wine.",
        "url": "https://antolincellars.com/"
      }
    ],
    "city": "Yakima"
  },
  {
    "name": "Barragan Vinos",
    "type": "winery",
    "address": "4130 Main St, Union Gap, WA 98903",
    "lat": 46.546286,
    "lng": -120.475825,
    "phone": "860-502-9202",
    "website": "https://barraganvinos.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": null,
      "sun": null
    },
    "byAppointment": true,
    "notes": "Small Union Gap winery from brothers Jesus and Jose Barragan; low-alcohol, all-natural sweet wines crafted for Mexican food. Text/call to arrange a tasting.",
    "events": [],
    "city": "Union Gap"
  },
  {
    "name": "Bonair Winery",
    "type": "winery",
    "address": "500 S Bonair Rd, Zillah, WA 98953",
    "lat": 46.425348,
    "lng": -120.294102,
    "phone": "(509) 829-6027",
    "website": "https://www.facebook.com/BonairWinery/",
    "hours": {
      "mon": [
        [
          "11:00",
          "16:00"
        ]
      ],
      "tue": null,
      "wed": null,
      "thu": [
        [
          "11:00",
          "16:00"
        ]
      ],
      "fri": [
        [
          "11:00",
          "16:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "16:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "16:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "French chateau-style tasting room and pond. Official website is currently offline; check Facebook. Some listings show closed Tue-Wed - call ahead midweek.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "Bosma Estate Winery",
    "type": "winery",
    "address": "1000 E Houghton Rd, Outlook, WA 98938",
    "lat": 46.417947,
    "lng": -120.146773,
    "phone": "(509) 829-3332",
    "website": "https://www.bosmawine.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": [
        [
          "11:00",
          "19:00"
        ]
      ],
      "thu": [
        [
          "11:00",
          "19:00"
        ]
      ],
      "fri": [
        [
          "11:00",
          "19:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "19:00"
        ]
      ],
      "sun": [
        [
          "13:00",
          "19:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Summer hours (May-Oct) shown; winter Wed-Sat 11-5, Sun 1-5. Walk-ins welcome; tasting fee waived with 2-bottle purchase. Patio and grounds overlooking the vineyard.",
    "events": [
      {
        "name": "Vino and Vinyl",
        "schedule": "Every third Sunday",
        "days": [
          "sun"
        ],
        "description": "Vinyl records spun in the tasting room with happy hour specials; bring your own record.",
        "url": "https://www.bosmawine.com/events"
      },
      {
        "name": "Live music on the estate lawn",
        "schedule": "Occasional summer evenings",
        "description": "Acoustic concerts at sunset.",
        "days": [],
        "url": "https://www.bosmawine.com/events"
      },
      {
        "name": "Catch the Crush Weekend",
        "schedule": "Oct 9-11, 2026",
        "description": "Harvest-season activities with estate-grown wines.",
        "days": [],
        "url": "https://www.bosmawine.com/events",
        "date": "2026-10-09",
        "endDate": "2026-10-11"
      },
      {
        "name": "Hallowine",
        "schedule": "Late October 2026",
        "description": "Adult trick-or-treating week with costume perks.",
        "days": [],
        "url": "https://www.bosmawine.com/events",
        "date": "2026-10-24",
        "endDate": "2026-10-31"
      }
    ],
    "city": "Outlook"
  },
  {
    "name": "Co Dinn Cellars",
    "type": "winery",
    "address": "501 Grant Ave, Sunnyside, WA 98944",
    "lat": 46.321269,
    "lng": -120.014331,
    "phone": "509-840-2314",
    "website": "https://codinncellars.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Downtown Sunnyside winery from Co Dinn, longtime former Hogue Cellars head winemaker; single-vineyard Yakima Valley wines. Tasting fee waived per two bottles purchased. Other times by appointment.",
    "events": [],
    "city": "Sunnyside"
  },
  {
    "name": "Cultura Wine",
    "type": "winery",
    "address": "3601 Highland Dr, Zillah, WA 98953",
    "lat": 46.43325,
    "lng": -120.243176,
    "phone": "(509) 829-0204",
    "website": "https://culturawine.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Seasonal: tasting room open March-November, Sat-Sun 11-5. Monday-Friday by reservation only. Micro-boutique producer of small-lot reds.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "Côte Bonneville",
    "type": "winery",
    "address": "1413 E Edison Ave, Sunnyside, WA 98944",
    "lat": 46.323702,
    "lng": -120.001458,
    "phone": "509-837-2794",
    "website": "https://www.cotebonneville.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "fri": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Acclaimed DuBrul Vineyard estate winery; tasting room in Sunnyside's restored historic train station. Mon-Wed by appointment (call/text 509-840-4596).",
    "events": [],
    "city": "Sunnyside"
  },
  {
    "name": "Dichotomy Vineyards",
    "type": "winery",
    "address": "1320 Independence Rd, Outlook, WA 98938",
    "lat": 46.371106,
    "lng": -120.096692,
    "phone": "(509) 643-6450",
    "website": "https://dichotomy-vineyards.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Monday-Thursday by appointment. On-site guest house stay available. Call ahead to confirm hours.",
    "events": [],
    "city": "Outlook"
  },
  {
    "name": "Dineen Vineyards",
    "type": "winery",
    "address": "2980 Gilbert Rd, Zillah, WA 98953",
    "lat": 46.447226,
    "lng": -120.265552,
    "phone": "(509) 829-6897",
    "website": "https://dineenvineyards.com/",
    "hours": {
      "mon": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "tue": null,
      "wed": null,
      "thu": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "fri": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Open Thursday-Monday; Tuesday-Wednesday by appointment. Food service, patio and lawn seating with vineyard views.",
    "events": [
      {
        "name": "Wines in the Vines",
        "schedule": "Seasonal (tickets on sale April)",
        "description": "Guided vineyard tour with tastings.",
        "days": [],
        "url": "https://dineenvineyards.com/pages/our-events"
      },
      {
        "name": "Harvest Experience",
        "schedule": "Fall 2026 (tickets on sale March)",
        "description": "Full-day picking and fermentation experience; also vineyard dinners and Adopt-a-Vine program.",
        "days": [],
        "url": "https://dineenvineyards.com/pages/our-events"
      }
    ],
    "city": "Zillah"
  },
  {
    "name": "DoodleVines Winery + Event Center",
    "type": "winery",
    "address": "2410 Naches Heights Rd, Yakima, WA 98908",
    "lat": 46.62918,
    "lng": -120.624262,
    "phone": "419-356-1073",
    "website": "https://www.doodlevineswinery.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": [
        [
          "15:00",
          "19:00"
        ]
      ],
      "fri": [
        [
          "14:00",
          "19:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "18:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "16:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Newer (2024) winery and indoor/outdoor event venue on Naches Heights; dog-friendly grounds with pond; also pours Sin Banderas wines. Sunday also available by appointment.",
    "events": [
      {
        "name": "Vino & Vinyl",
        "schedule": "Periodic evenings; see calendar",
        "days": [],
        "description": "Record-spinning wine nights at the event center.",
        "url": "https://www.doodlevineswinery.com/"
      },
      {
        "name": "Live music & private events",
        "schedule": "Seasonal; see website/Facebook",
        "days": [],
        "description": "Weddings, live music, and community events at the event center.",
        "url": "https://www.doodlevineswinery.com/"
      }
    ],
    "city": "Yakima"
  },
  {
    "name": "Fontaine Estates Winery",
    "type": "winery",
    "address": "151 Rowe Hill Dr, Naches, WA 98937",
    "lat": 46.693155,
    "lng": -120.644015,
    "phone": "509-972-8123",
    "website": "https://www.fontaineestates.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": null,
      "sun": null
    },
    "byAppointment": true,
    "notes": "Hilltop estate winery above Naches, now primarily a wedding/event venue; tastings arranged by inquiry.",
    "events": [],
    "city": "Naches"
  },
  {
    "name": "Fortuity Cellars",
    "type": "winery",
    "address": "160 Lombard Loop Rd, Wapato, WA 98951",
    "lat": 46.458749,
    "lng": -120.359237,
    "phone": "(509) 779-6000",
    "website": "https://www.fortuitycellars.com/yakima-valley",
    "hours": {
      "mon": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "tue": null,
      "wed": null,
      "thu": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "fri": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Open Thu-Mon 11-5; Tue-Wed by appointment. Walk-ins welcome; prepaid reservations required for groups of 8+. Kids and dogs welcome; outside food allowed on patio/lawn.",
    "events": [
      {
        "name": "Signature wine weekends",
        "schedule": "Several times per year (Spring Barrel, Rose Revolution, Red Wine & Chocolate, Fete en Blanc)",
        "description": "Release parties and themed weekends, often with food trucks such as Mill Burn Smashburgers and Tacos Don Chayo.",
        "days": [],
        "url": "https://www.fortuitycellars.com/our-events"
      }
    ],
    "city": "Wapato"
  },
  {
    "name": "Freehand Cellars",
    "type": "winery",
    "address": "451 Windy Point Dr, Wapato, WA 98951",
    "lat": 46.49516,
    "lng": -120.420188,
    "phone": "(509) 866-4664",
    "website": "https://www.freehandcellars.com/",
    "hours": {
      "mon": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "tue": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "wed": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "thu": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "fri": [
        [
          "11:00",
          "19:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "19:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "18:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Hilltop tasting room at the former Windy Point Vineyards site. On-site kitchen during tasting hours; hours vary seasonally. On-site Airbnb and event space.",
    "events": [
      {
        "name": "Food truck days",
        "schedule": "Sat, Aug 1 (Lab Dogs Food Truck) + other summer dates",
        "description": "Visiting food trucks on the patio.",
        "days": [],
        "url": "https://www.freehandcellars.com/",
        "date": "2026-08-01"
      },
      {
        "name": "Moonlight Party",
        "schedule": "Fri, Jul 24, 2026",
        "description": "Evening party at the winery.",
        "days": [],
        "url": "https://www.freehandcellars.com/",
        "date": "2026-07-24"
      },
      {
        "name": "Goat Snuggles Day",
        "schedule": "Sat, Aug 8, 2026",
        "description": "Family-friendly animal event.",
        "days": [],
        "url": "https://www.freehandcellars.com/",
        "date": "2026-08-08"
      },
      {
        "name": "Club Share Weekend",
        "schedule": "Aug 7-9, 2026",
        "description": "Multi-winery wine club weekend.",
        "days": [],
        "url": "https://www.freehandcellars.com/",
        "date": "2026-08-07",
        "endDate": "2026-08-09"
      }
    ],
    "city": "Wapato"
  },
  {
    "name": "French Canyon Cellars",
    "type": "winery",
    "address": "120 Noye Rd, Tieton, WA 98947",
    "lat": 46.711489,
    "lng": -120.777858,
    "phone": "206-618-6296",
    "website": "https://www.frenchcanyoncellars.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": null,
      "sun": null
    },
    "byAppointment": true,
    "notes": "Family farm winery west of Tieton producing wine, cider, and kombucha. A public tasting room in Tieton was announced for summer 2026 - contact before visiting.",
    "events": [],
    "city": "Tieton"
  },
  {
    "name": "Gilbert Cellars (Hackett Ranch)",
    "type": "winery",
    "address": "2620 Draper Rd, Yakima, WA 98903",
    "lat": 46.55795,
    "lng": -120.661,
    "phone": "509-249-9049",
    "website": "https://gilbertcellars.com/",
    "hours": {
      "mon": [
        [
          "11:00",
          "16:00"
        ]
      ],
      "tue": [
        [
          "11:00",
          "16:00"
        ]
      ],
      "wed": [
        [
          "11:00",
          "16:00"
        ]
      ],
      "thu": [
        [
          "11:00",
          "16:00"
        ]
      ],
      "fri": [
        [
          "11:00",
          "20:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "20:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "16:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Family- and dog-friendly estate winery in West Valley. Fri-Sat close at 7 PM outside summer. Reservations encouraged.",
    "events": [
      {
        "name": "Music in the Vines concert series",
        "schedule": "Friday evenings: Jul 24 & Aug 7, 2026",
        "days": [
          "fri"
        ],
        "description": "Ticketed outdoor concerts at the winery amphitheater: indie rock, funk, blues rock, and Americana acts.",
        "url": "https://gilbertcellars.com/",
        "date": "2026-07-24",
        "endDate": "2026-08-07"
      },
      {
        "name": "Food vendors",
        "schedule": "Friday-Sunday in season",
        "days": [
          "fri",
          "sat",
          "sun"
        ],
        "description": "Rotating food vendors (tacos, burgers, etc.) on the winery grounds.",
        "url": "https://gilbertcellars.com/"
      }
    ],
    "city": "Yakima"
  },
  {
    "name": "Horizon's Edge Winery",
    "type": "winery",
    "address": "4530 E Zillah Dr, Zillah, WA 98953",
    "lat": 46.403391,
    "lng": -120.177446,
    "phone": "(509) 969-3061",
    "website": "https://www.horizonsedgewinery.org/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Seasonal: open Sat-Sun 12-5 mid-April through fall; closed in winter. Weekday visits by phone arrangement. Also pours the Maison de Padgett label; vintage gift shop on site.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "Hyatt Vineyards",
    "type": "winery",
    "address": "2020 Gilbert Rd, Zillah, WA 98953",
    "lat": 46.444373,
    "lng": -120.28301,
    "phone": "(509) 829-6333",
    "website": "https://www.hyattvineyards.com/",
    "hours": {
      "mon": [
        [
          "11:00",
          "16:00"
        ]
      ],
      "tue": null,
      "wed": null,
      "thu": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "fri": [
        [
          "11:00",
          "18:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "18:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Tuesday-Wednesday by appointment only. Large lawn and gazebo with Mt. Adams views; guided tastings indoors or on the lawn.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "J. Bell Cellars & Lavender",
    "type": "winery",
    "address": "124 Purple Ln, Zillah, WA 98953",
    "lat": 46.436882,
    "lng": -120.32467,
    "phone": "(509) 388-8813",
    "website": "https://www.jbellwine.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Winery with lavender fields and courtyard. Private tastings available after hours by request. Charr restaurant operates on site.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "Kana Winery",
    "type": "winery",
    "address": "10 S 2nd St, Yakima, WA 98901",
    "lat": 46.60214,
    "lng": -120.50471,
    "phone": "509-453-6611",
    "website": "https://kanawinery.com/",
    "hours": {
      "mon": [
        [
          "12:00",
          "18:30"
        ]
      ],
      "tue": [
        [
          "12:00",
          "18:30"
        ]
      ],
      "wed": [
        [
          "12:00",
          "18:30"
        ]
      ],
      "thu": [
        [
          "12:00",
          "18:30"
        ]
      ],
      "fri": [
        [
          "12:00",
          "22:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "22:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Downtown tasting room in the historic Larson Building block; open late Friday and Saturday for live music nights.",
    "events": [
      {
        "name": "First Friday live music",
        "schedule": "First Friday of each month, 7-10 PM",
        "days": [
          "fri"
        ],
        "description": "Featured artists perform in the tasting room.",
        "url": "https://kanawinery.com/live-music"
      },
      {
        "name": "Open mic night",
        "schedule": "Fridays (except First Friday), 5-10 PM",
        "days": [
          "fri"
        ],
        "description": "Open mic for local musicians.",
        "url": "https://kanawinery.com/live-music"
      },
      {
        "name": "Saturday live bands",
        "schedule": "Every Saturday, 7-10 PM",
        "days": [
          "sat"
        ],
        "description": "Rotating local and touring bands; voted best nightlife/music venue in Yakima Valley reader polls.",
        "url": "https://kanawinery.com/live-music"
      }
    ],
    "city": "Yakima"
  },
  {
    "name": "Knight Hill Winery",
    "type": "winery",
    "address": "5330 Lombard Loop Rd, Zillah, WA 98953",
    "lat": 46.46194,
    "lng": -120.307304,
    "phone": "(509) 865-5654",
    "website": "https://knighthillwine.com/",
    "hours": {
      "mon": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "tue": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "wed": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "thu": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "fri": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Open 11-5 daily mid-February through November; December to mid-February by appointment only. Hilltop wedding/event venue.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "LaPierre Farms and Winery",
    "type": "winery",
    "address": "4440 Highland Dr, Zillah, WA 98953",
    "lat": 46.430977,
    "lng": -120.22603,
    "phone": "(509) 728-1179",
    "website": "https://www.lapierrefarmsandwinery.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": [
        [
          "13:00",
          "19:00"
        ]
      ],
      "sat": [
        [
          "13:00",
          "19:00"
        ]
      ],
      "sun": [
        [
          "13:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Working farm and winery; tasting room opened 2023. Check Facebook for event updates.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "Lookout Point Winery",
    "type": "winery",
    "address": "31 Katie Ln, Selah, WA 98942",
    "lat": 46.675879,
    "lng": -120.561088,
    "phone": "509-949-8804",
    "website": "http://www.lookoutpointwinery.net/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": null,
      "sun": null
    },
    "byAppointment": true,
    "notes": "Handmade artisan wines; tastings by appointment for groups and on announced special occasions.",
    "events": [],
    "city": "Selah"
  },
  {
    "name": "Masset Winery",
    "type": "winery",
    "address": "620 E Parker Heights Rd, Wapato, WA 98951",
    "lat": 46.483812,
    "lng": -120.39048,
    "phone": "(509) 877-6675",
    "website": "https://www.massetwinery.com/",
    "hours": {
      "mon": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "tue": null,
      "wed": null,
      "thu": [
        [
          "14:00",
          "17:00"
        ]
      ],
      "fri": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Seasonal: open Valentine's weekend through Thanksgiving, Thu-Mon; complimentary tastings. Historic 1905 Angel Farmstead at Parker Heights. Contact by phone/email (its Facebook page was compromised).",
    "events": [],
    "city": "Wapato"
  },
  {
    "name": "Naches Heights Vineyard (NHV)",
    "type": "winery",
    "address": "1853 Weikel Rd, Yakima, WA 98908",
    "lat": 46.651381,
    "lng": -120.664697,
    "phone": "509-945-4062",
    "website": "https://www.nhvwines.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": null,
      "sun": null
    },
    "byAppointment": true,
    "notes": "Organic estate winery on Naches Heights. Visits by appointment only (Phil@nhvwines.com).",
    "events": [],
    "city": "Yakima"
  },
  {
    "name": "Owen Roe",
    "type": "winery",
    "address": "309 Gangl Rd, Wapato, WA 98951",
    "lat": 46.516921,
    "lng": -120.451007,
    "phone": "971-412-0094",
    "website": "https://www.owenroe.com/",
    "hours": {
      "mon": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "tue": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "wed": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "thu": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "fri": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Estate winery south of Union Gap; website posts open daily 11-5, walk-ins welcome, but some listings show fewer midweek days - call ahead Tue-Thu. Groups of 8+ should reserve.",
    "events": [],
    "city": "Wapato"
  },
  {
    "name": "Paradisos del Sol Winery",
    "type": "winery",
    "address": "3230 Highland Dr, Zillah, WA 98953",
    "lat": 46.432614,
    "lng": -120.251427,
    "phone": "(509) 829-9000",
    "website": "https://www.paradisosdelsol.com/",
    "hours": {
      "mon": [
        [
          "11:00",
          "18:00"
        ]
      ],
      "tue": [
        [
          "11:00",
          "18:00"
        ]
      ],
      "wed": [
        [
          "11:00",
          "18:00"
        ]
      ],
      "thu": [
        [
          "11:00",
          "18:00"
        ]
      ],
      "fri": [
        [
          "11:00",
          "18:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "18:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "18:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Open daily 11-6; no tasting fees. Organic, zero-pesticide vineyard; quirky, family-friendly tasting with food pairings.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "Portteus Winery",
    "type": "winery",
    "address": "5201 Highland Dr, Zillah, WA 98953",
    "lat": 46.440213,
    "lng": -120.20493,
    "phone": "(509) 829-6970",
    "website": "https://www.portteus.com/",
    "hours": {
      "mon": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "tue": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "wed": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "thu": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "fri": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "One of the AVA's pioneer wineries (est. 1981). Open 12-5 daily; winter hours may be shorter.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "Rider Cellars",
    "type": "winery",
    "address": "3 N 1st St, Selah, WA 98942",
    "lat": 46.654124,
    "lng": -120.530418,
    "phone": null,
    "website": "https://ridercellars.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": [
        [
          "16:00",
          "20:00"
        ]
      ],
      "sat": [
        [
          "14:30",
          "19:00"
        ]
      ],
      "sun": [
        [
          "14:30",
          "19:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Boutique family winery with tasting room in downtown Selah; fruit from their Equus Vineyard in Moxee.",
    "events": [],
    "city": "Selah"
  },
  {
    "name": "Ruby Magdalena Vineyards",
    "type": "winery",
    "address": "781 Gilbert Rd, Zillah, WA 98953",
    "lat": 46.447842,
    "lng": -120.306989,
    "phone": "(509) 930-6799",
    "website": "https://rubymagdalenavineyards.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": [
        [
          "12:30",
          "17:00"
        ]
      ],
      "sat": [
        [
          "12:30",
          "17:00"
        ]
      ],
      "sun": [
        [
          "12:30",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Spanish-variety specialist. Tastings at 'The Cork & Pullet' tasting pub (a converted 1965 garage) with indoor seating and picnic tables. Vineyard tours by appointment Thu-Mon.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "Sheridan Vineyard (The Garden)",
    "type": "winery",
    "address": "2231 Roza Dr, Zillah, WA 98953",
    "lat": 46.432009,
    "lng": -120.260943,
    "phone": "(509) 584-6907",
    "website": "https://www.sheridanvineyard.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": [
        [
          "12:00",
          "15:00"
        ]
      ],
      "fri": [
        [
          "12:00",
          "15:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "15:00"
        ]
      ],
      "sun": null
    },
    "byAppointment": false,
    "notes": "Open Thu-Sat 12-3 or by appointment; groups 8+ need 24h notice. Tastings in a 2.2-acre garden; fresh pizzas and salads available. Children welcome; leashed pets OK outdoors.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "Silver Lake Winery at Roza Hills",
    "type": "winery",
    "address": "1500 Vintage Rd, Zillah, WA 98953",
    "lat": 46.453759,
    "lng": -120.243469,
    "phone": "(509) 829-6235",
    "website": "https://www.drinksilverlake.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": null,
      "sun": null
    },
    "byAppointment": false,
    "notes": "TEMPORARILY CLOSED for renovations (as of July 2026) - check the website for reopening. Hilltop estate with valley views.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "Southard Winery",
    "type": "winery",
    "address": "670 Tibbling Rd, Selah, WA 98942",
    "lat": 46.700229,
    "lng": -120.544773,
    "phone": "509-697-3003",
    "website": "http://www.southardwinery.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Family-owned winery on a Selah hilltop. Call ahead to confirm weekend hours; appointments available other days.",
    "events": [],
    "city": "Selah"
  },
  {
    "name": "Tanjuli Winery",
    "type": "winery",
    "address": "209 N Bonair Rd, Zillah, WA 98953",
    "lat": 46.43628,
    "lng": -120.292137,
    "phone": "(509) 654-9753",
    "website": "http://tanjuli.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": null,
      "sat": null,
      "sun": null
    },
    "byAppointment": false,
    "notes": "Open only during posted 2026 windows (10:30am-5pm daily): Jul 11-19, Aug 7-16, and Aug 29-Sep 13; closed otherwise. Check Facebook before visiting.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "Treveri Cellars",
    "type": "winery",
    "address": "71 Gangl Rd, Wapato, WA 98951",
    "lat": 46.512634,
    "lng": -120.449309,
    "phone": "(509) 877-0925",
    "website": "https://www.trevericellars.com/",
    "hours": {
      "mon": [
        [
          "12:00",
          "19:00"
        ]
      ],
      "tue": [
        [
          "12:00",
          "19:00"
        ]
      ],
      "wed": [
        [
          "12:00",
          "19:00"
        ]
      ],
      "thu": [
        [
          "12:00",
          "19:00"
        ]
      ],
      "fri": [
        [
          "12:00",
          "21:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "21:00"
        ]
      ],
      "sun": [
        [
          "10:00",
          "18:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Sparkling-wine house with on-site seasonal dining. No reservation required; groups of 10+ must reserve. No outside food.",
    "events": [
      {
        "name": "Sunday Bubbly Brunch",
        "schedule": "Every Sunday, 10am-1pm",
        "days": [
          "sun"
        ],
        "description": "House-made brunch buffet with sparkling wine.",
        "url": "https://www.trevericellars.com/events/"
      },
      {
        "name": "Live music and trivia nights",
        "schedule": "Periodic; see events calendar",
        "description": "Evening entertainment at the tasting room.",
        "days": [],
        "url": "https://www.trevericellars.com/events/"
      }
    ],
    "city": "Wapato"
  },
  {
    "name": "Two Mountain Winery",
    "type": "winery",
    "address": "2151 Cheyne Rd, Zillah, WA 98953",
    "lat": 46.436861,
    "lng": -120.270808,
    "phone": "(509) 829-3900",
    "website": "https://www.twomountainwinery.com/",
    "hours": {
      "mon": [
        [
          "10:00",
          "17:00"
        ]
      ],
      "tue": [
        [
          "10:00",
          "17:00"
        ]
      ],
      "wed": [
        [
          "10:00",
          "17:00"
        ]
      ],
      "thu": [
        [
          "10:00",
          "17:00"
        ]
      ],
      "fri": [
        [
          "10:00",
          "18:00"
        ]
      ],
      "sat": [
        [
          "10:00",
          "18:00"
        ]
      ],
      "sun": [
        [
          "10:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Second-generation family winery, open daily year-round; casual patio and lawn.",
    "events": [
      {
        "name": "Harvest Games + Crush Pad Party",
        "schedule": "October 2026",
        "description": "Winemaker competitions, grape stomping, and a dance party on the crush pad.",
        "days": [],
        "url": "https://www.twomountainwinery.com/events",
        "date": "2026-10-01",
        "endDate": "2026-10-31"
      }
    ],
    "city": "Zillah"
  },
  {
    "name": "VanArnam Vineyards",
    "type": "winery",
    "address": "1305 Gilbert Rd, Zillah, WA 98953",
    "lat": 46.45083,
    "lng": -120.296256,
    "phone": "(509) 829-1540",
    "website": "https://vanarnamvineyards.com/",
    "hours": {
      "mon": [
        [
          "12:00",
          "18:00"
        ]
      ],
      "tue": [
        [
          "12:00",
          "18:00"
        ]
      ],
      "wed": [
        [
          "12:00",
          "18:00"
        ]
      ],
      "thu": [
        [
          "12:00",
          "18:00"
        ]
      ],
      "fri": [
        [
          "11:00",
          "19:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "19:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "18:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Summer hours shown; shorter off-season. On-site Tin Roof Grill food service; large event lawn.",
    "events": [
      {
        "name": "Sounds of Summer Concert Series",
        "schedule": "Roughly every other Friday evening, July-early September",
        "days": [
          "fri"
        ],
        "description": "Live bands on the lawn with food and wine; season passes available.",
        "url": "https://vanarnamvineyards.com/events",
        "endDate": "2026-09-11"
      },
      {
        "name": "Catch the Crush",
        "schedule": "Oct 9-11, 2026",
        "description": "Grape stomps, vineyard tours, harvest parties, live music, and food trucks.",
        "days": [],
        "url": "https://vanarnamvineyards.com/events",
        "date": "2026-10-09",
        "endDate": "2026-10-11"
      }
    ],
    "city": "Zillah"
  },
  {
    "name": "Velen Winery",
    "type": "winery",
    "address": "1381 Orchardvale Rd, Zillah, WA 98953",
    "lat": 46.383354,
    "lng": -120.196602,
    "phone": "(509) 854-1120",
    "website": "https://www.velenwinery.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": [
        [
          "11:30",
          "17:30"
        ]
      ],
      "fri": [
        [
          "11:30",
          "17:30"
        ]
      ],
      "sat": [
        [
          "11:30",
          "17:30"
        ]
      ],
      "sun": [
        [
          "11:30",
          "17:30"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Monday-Wednesday: call first before visiting.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "Whitman Hill Winery",
    "type": "winery",
    "address": "2911 Roza Dr, Zillah, WA 98953",
    "lat": 46.442357,
    "lng": -120.259346,
    "phone": "(509) 829-3370",
    "website": "https://whitmanhillwine.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "thu": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "fri": [
        [
          "11:00",
          "18:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "18:00"
        ]
      ],
      "sun": [
        [
          "11:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Closed Monday-Tuesday.",
    "events": [],
    "city": "Zillah"
  },
  {
    "name": "Wilridge Vineyard, Winery & Distillery",
    "type": "winery",
    "address": "102 Wilridge Way, Yakima, WA 98908",
    "lat": 46.624182,
    "lng": -120.626899,
    "phone": "509-966-0686",
    "website": "https://www.wilridgewinery.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": [
        [
          "12:00",
          "19:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "19:00"
        ]
      ],
      "sun": [
        [
          "12:00",
          "17:00"
        ]
      ]
    },
    "byAppointment": false,
    "notes": "Naches Heights AVA estate; Washington's first certified organic, biodynamic and Salmon Safe vineyard/winery; also distills brandy and grappa. Weekdays by appointment.",
    "events": [],
    "city": "Yakima"
  },
  {
    "name": "Yakima Valley Vintners (Grandview Campus)",
    "type": "winery",
    "address": "110 Grandridge Rd, Grandview, WA 98930",
    "lat": 46.255904,
    "lng": -119.904947,
    "phone": "509-882-7069",
    "website": "https://www.yakimavalleyvintners.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": [
        [
          "14:00",
          "17:00"
        ]
      ],
      "sat": [
        [
          "11:00",
          "17:00"
        ]
      ],
      "sun": null
    },
    "byAppointment": false,
    "notes": "YVC teaching winery's original tasting room, adjacent to the wine production facility on the Grandview campus; behind-the-scenes winemaking tours. Weekday group tours by reservation.",
    "events": [],
    "city": "Grandview"
  },
  {
    "name": "Yakima Valley Vintners (Yakima Campus)",
    "type": "winery",
    "address": "1606 W Nob Hill Blvd, Yakima, WA 98902",
    "lat": 46.585181,
    "lng": -120.530492,
    "phone": "509-574-4794",
    "website": "https://www.yakimavalleyvintners.com/",
    "hours": {
      "mon": null,
      "tue": null,
      "wed": null,
      "thu": null,
      "fri": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "sat": [
        [
          "12:00",
          "17:00"
        ]
      ],
      "sun": null
    },
    "byAppointment": false,
    "notes": "Award-winning teaching winery of Yakima Valley College's Vineyard & Winery Technology Program; tasting room on the Yakima campus. Reservations encouraged.",
    "events": [],
    "city": "Yakima"
  }
];
