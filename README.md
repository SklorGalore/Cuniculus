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
docs/brand-brief.md        brand, design, and site-structure decisions
src/
  content/elements/        one entry per project (symbol, number, mass, metal, surface one-liner)
  content.config.ts        schema for the elements collection
  data/sheets.ts           the drawing set: sheet numbers, titles, revision letters, dates
  styles/tokens.css        metal color tokens (brief section 2.1) and type voices
  layouts/Sheet.astro      every page is a drawing sheet: nav on top, title block at the foot
  components/
    ElementTile.astro      element tile, also the Cu mark
    PeriodicTable.astro    the home page table and navigation (CSS-only hover readout)
    TitleBlock.astro       drawing-sheet title block
    SheetNav.astro         navigation drawn as a one-line diagram
    Divider.astro          one-line-diagram section divider
    RabbitGlyph.astro      the hidden rabbit (two busbar ears)
  pages/                   00 Index, 01–04 stubs, 404 ("wrong tunnel")
```

### Adding a project

Add a Markdown file to `src/content/elements/` with the frontmatter fields from `content.config.ts`. It appears on the home table at its `order` position and takes one of the empty tiles.

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
