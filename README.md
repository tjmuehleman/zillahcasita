# zillahcasita

Static site for [La Casita de Zillah](https://www.zillahcasita.com) — a vacation rental
in Zillah, WA — plus companion tools. Deployable as-is to GitHub Pages.

## Structure

- `index.html` — home page (hero, highlights, tasting-map promo, contact footer)
- `about-the-house.html` — house details and photo gallery
- `breweries.html`, `breweries/*.html` — brewery guide (list + detail pages)
- `wineries.html`, `wineries/*.html` — winery guide (list + detail pages)
- `404.html` — GitHub Pages serves this automatically for missing URLs
- `assets/css/site.css` — single shared stylesheet (matches the map's branding)
- `assets/img/` — all images, mirrored from the original Squarespace site
- **[map/](map/)** — Sip & Sample, an interactive map of every winery, brewery, and
  cidery in Yakima County with open-now status, day/time filters, and event listings.

The site is plain HTML/CSS with no build step and no JavaScript except the optional
analytics loader. All links are relative, so it works at the repo subpath
(`tjmuehleman.github.io/zillahcasita/`) or on a custom domain.

## Google Analytics

The original Squarespace site had **no Google Analytics tag** (only Squarespace's
built-in analytics, which doesn't transfer). Every page includes a GA4 snippet that
stays dormant until you replace the `G-XXXXXXXXXX` placeholder with a real Measurement
ID (Google Analytics → Admin → Data streams). Search-and-replace it across all
`.html` files:

```sh
grep -rl 'G-XXXXXXXXXX' --include='*.html' . | xargs sed -i '' 's/G-XXXXXXXXXX/G-YOURID/'
```

## Deploying

Push to `main`, then in the GitHub repo: Settings → Pages → deploy from branch
`main`, folder `/ (root)`. To use the zillahcasita.com domain, add it under
Settings → Pages → Custom domain and point the domain's DNS at GitHub Pages.
