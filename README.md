# spezado – website

One static page for **[spezado](https://github.com/spezado/spezado)**: no build step, no framework, no external
resources, no cookies, no tracking. Light and dark follow the visitor's system setting; a switch in the header
(`theme.js`) picks light or dark instead and keeps that choice in `localStorage` – nothing else is stored, and
without JavaScript the page simply follows the system. A [falkOSS](https://falkoss.org) project.

| Path | What |
|---|---|
| `index.html`, `style.css`, `theme.js`, `404.html` | the page (English) |
| `favicon.*`, `apple-touch-icon.png`, `icon-*.png`, `site.webmanifest`, `social.png` | head icons – **generated** by `brand/generate.py` in `spezado/spezado` (`brand/web/`), copied here |
| `assets/` | lockups and marks (from `brand/svg/`), `assets/fonts/` – Domitian as WOFF2 (from `brand/web/fonts/`, SIL Open Font License 1.1, `assets/fonts/OFL.txt`) |

Imprint and privacy policy are falkoss.org's – same operator, one place to keep them current.

Preview locally:

```sh
python3 -m http.server 8080
```

## Publishing

GitHub Pages via `.github/workflows/pages.yml` on every push to `main`. One-time setup: Repo → Settings → Pages →
Source: **GitHub Actions**.

The domain is **spezado.app**: Repo → Settings → Pages → Custom domain: `spezado.app`; then **Enforce HTTPS**. DNS:
`A` and `AAAA @` to the GitHub Pages addresses, `CNAME www` → `spezado.github.io`; the Pages domain verification TXT
is in place. `spezado.org`, `.com` and `.eu` redirect with **301** to `https://spezado.app`; `spezado.dev` is kept for
the documentation. `404.html` uses root paths, which resolve under the custom domain.

## Licence

The site's code is **AGPL-3.0-or-later** (`LICENSE`); the fonts in `assets/fonts/` are under the SIL Open Font
License 1.1; the brand (name, logo, marks) is not covered by either.
