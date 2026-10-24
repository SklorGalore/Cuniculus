# Cuniculus

Power systems engineering, built like infrastructure.

The site for Cuniculus, Skylar Coelho's power-systems consulting studio. Built with [Astro](https://astro.build) as a static site. The brand and design source of truth is [`docs/brand-brief.md`](docs/brand-brief.md).

## Develop

Requires Node 22.23.4 or newer (`.node-version` pins 24).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check, then build to dist/
npm run preview   # serve dist/ locally
```

## Layout

```
docs/brand-brief.md        brand, design, and site-structure decisions ("Instrument" direction)
src/
  content/elements/        one entry per element (symbol, number, mass, surface one-liner, rev)
  content.config.ts        schema for the elements collection
  data/sheets.ts           the drawing set: sheet numbers, nav labels, revision letters, dates
  styles/tokens.css        color tokens (brief section 2.1) and the two Plex faces
  layouts/Sheet.astro      every page is a drawing sheet: nav on top, sheet strip at the foot
  components/
    Wordmark.astro         lowercase mono `cuniculus`, the "cu" in copper
    SheetNav.astro         wordmark and lowercase mono links
    ConvergencePlot.astro  the hero instrument: solver mismatch per iteration (sample data for now)
    WorkIndex.astro        the home work index, built from the elements collection
    BusRule.astro          the one-line bus rule; use it once per page
    SheetStrip.astro       compact title block at the foot of every page
    ElementTile.astro      element tile (Cu is the primary mark), used for the bronze story on About
    RabbitGlyph.astro      the hidden rabbit (two busbar ears)
  pages/                   00 Index, 04 About, stubs for 01–03, 404 ("wrong tunnel")
```

### Adding a project

Add a Markdown file to `src/content/elements/` with the frontmatter fields from `content.config.ts`. It appears in the home work index at its `order` position.

### Revisions

Each sheet's revision letter and date live in `src/data/sheets.ts`. Bump them when a page really changes, so the title blocks stay honest.

## Deploy (Cloudflare)

The build is fully static, so no adapter is needed. In Cloudflare, connect this repository (Workers & Pages) with:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | from `.node-version` (24), or set `NODE_VERSION=24` |

`public/_headers` sets long-lived caching for Astro's hashed assets, and Cloudflare serves `dist/404.html` for unknown paths. Update `site` in `astro.config.mjs` once the domain is settled.
