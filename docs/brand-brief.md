# Cuniculus — Brand & Site Brief

Exported from a working session on 2026-10-24. This captures the decisions made so far. Drop it into the new project (e.g. as `docs/brand-brief.md` or alongside `CLAUDE.md`) as the source of truth for brand, design, and site structure.

Status key: **Decided** = agreed in session · **Recommended** = proposed, not yet confirmed · **Open** = still to decide

---

## 1. Name & story — Decided

**Cuniculus** (pronounced *koo-NIK-yoo-lus*): the umbrella brand for Skylar Coelho's consulting work and projects.

Why this name has layers:
- **Rabbit.** *Oryctolagus cuniculus* is the European rabbit. *Coelho* is Portuguese for rabbit.
- **Tunnel.** In Latin, *cuniculus* also means an underground channel. Roman and Etruscan *cuniculi* were drainage and water tunnels, so it's ancient infrastructure engineering.
- **Copper.** It abbreviates to **Cu**, the conductor of the grid.
- **Bronze.** The flagship project, Stannum, is **Sn** (tin). **Cu + Sn = bronze**, so the studio and its first project form an alloy. That's the founding story.
- **Register.** The Latin name matches Stannum's, so the family reads as one system.

Known risks:
- Spelling and pronunciation. People need to see it before they can type it, so secure common misspellings if they're cheap.
- The "cunni-" prefix can be misread at a glance. Lead visually with **Cu** and let the full word be the reveal.

Usage:
- "Cuniculus" appears in full in the wordmark, the About page, and the story.
- "Cu" is the everyday shorthand and the mark.
- skylarcoelho.com redirects to the main site or hosts the bio.

Options explored and set aside: Per Unit, Slack Bus, Substation, Periodic/Alloy/Foundry, Coelho Works, Rabbit Hole (might come back as the Notes section name), Warren, Kit, Burrow, Two Phase, Phasor.

Domains to check (**Open**): cuniculus.dev, cuniculus.engineering, plus a short cu-something form.

---

## 2. Design philosophy — Decided

**Core idea:** Cuniculus is built like infrastructure. It should feel calm on the surface and rigorous underneath, and reward people who dig.

**The filter for every design decision:** *Would this belong on an engineering drawing or a Roman inscription? If neither, cut it.*

### 2.0 Chosen direction: "Instrument" (v2 B) — Decided 2026-10-24
v1 (Cinzel, Roman numerals, a headline Cu + Sn = Bronze equation, copper on warm brown) felt tacky and steampunk. It was replaced by a restrained, technical direction:
- A neutral graphite background, not warm brown.
- IBM Plex only. Headlines in Plex Sans Light, sentence case.
- Copper is the **only** accent, used sparingly. Verdigris is for data and converged states only.
- The bronze story lives in the About page and the element list, **not** in the hero.
- The hero is a statement plus one small instrument figure, such as a solver convergence plot.
- The grid motif is welcome but must not overwhelm. Use it **once per page**: a single one-line bus rule (tick, breaker box, copper node) as a section divider, plus the bottom sheet strip.

### 2.1 Materials, not colors
Every color still traces to a metal or a drawing material. Don't use gradients or decorative color. If a color shows up, it means something.

| Token | Hex | Role |
|---|---|---|
| Graphite | `#111213` | Ground |
| Paper | `#E8E7E3` | Primary text |
| Text-muted | `#A4A5A1` | Body / descriptions |
| Label | `#8E8F8C` | Nav, labels, mono metadata |
| Hairline | `#2A2B2D` | Rules, borders |
| Hairline-strong | `#4A4B4E` | Bus rule, outlined swatches |
| Copper | `#C27A3E` | The single accent: "cu" in wordmark, element symbols, plotted data, hover (`#D08A4A`) |
| Verdigris | `#6FA69D` | Data only: converged/OK states |

```css
:root {
  --graphite:        #111213;
  --paper:           #E8E7E3;
  --text-muted:      #A4A5A1;
  --label:           #8E8F8C;
  --hairline:        #2A2B2D;
  --hairline-strong: #4A4B4E;
  --copper:          #C27A3E;
  --copper-hover:    #D08A4A;
  --verdigris:       #6FA69D;
}
```

v1 values (retired, kept for reference): Copper `#B87333`, Verdigris `#4F8F86`, Tin `#A3A9AF`, Bronze `#8C6A3F`, Tunnel `#15140F`, Vellum `#F1EDE4`.

### 2.2 Every page is a drawing sheet
- Each page gets a **title block** with the drawing title, the Cu mark, sheet number ("03 OF 07"), revision letter, date, and "DRAWN: S. COELHO".
- Revision letters and dates reflect real changes, so the site reads as a living drawing set.
- Dividers and navigation use one-line-diagram linework: hairline rules with bus and breaker glyphs.

### 2.3 Depth on demand (the tunnel)
Every project page has three strata:
1. **Surface**: what it does, in one paragraph. For decision-makers.
2. **Method**: approach, one-line diagrams, results. For engineers.
3. **Bedrock**: math, code, benchmarks. For the curious.

### 2.4 Precision over decoration
- Don't use stock photos or illustrations of "the grid." Show real outputs: power flow results, contingency heatmaps, convergence plots.
- Use 1px hairlines, a strict grid, and numbers in tabular monospace.
- Use motion only where it explains something, like a solver iterating or flow animating along a line.

### 2.5 Type — Decided
- **IBM Plex Sans:** headlines at weight 300, ~60px, tracking −0.02em, sentence case. Body at 300–400, 16–18px, line-height 1.6.
- **IBM Plex Mono:** wordmark, navigation (lowercase), labels, data readouts, rev and sheet metadata.
- **Wordmark:** lowercase `cuniculus` in Plex Mono 500, with the **cu** in copper and the rest in paper. The Cu reveal is built into the name.
- The inscription serif (Cinzel) was dropped.

### 2.6 The rabbit is found, not shown
The rabbit never appears in the primary identity. It lives in:
- The 404 page ("wrong tunnel")
- A favicon variant
- A tiny footer glyph (two upright ears drawn as parallel busbars)

Clients see a serious studio, and curious people find the wink.

Mark ideas to explore (**Open**): ears drawn as parallel busbars (‖), ears as transformer coils, a silhouette built from one-line diagram nodes, an ear as a sine wave or phasor arrow. The primary mark is a **Cu element tile** (atomic number 29, mass 63.546) in copper.

---

## 3. Element system — Decided

Projects are elements. Each one gets a symbol, an atomic number, and its own metal color.
- **Cu**, Cuniculus (the studio). 29, 63.546.
- **Sn**, Stannum (Rust power systems solver). 50, 118.71. It already has an SVG logo with a tin/Sn motif and rust-orange palette, which now becomes one accent within the larger system.
- **CuSn / Bronze**, used where studio and Stannum meet.
- Future tools get their own element tiles. Empty tiles on the home page hint at what's coming.

---

## 4. Site structure & UX — Recommended

Site map, numbered like a drawing set:
- **00 · Index**: wordmark, one-line statement ("Power systems engineering, built like infrastructure."), and a live element table of the work.
- **01 · Services**: transmission planning studies, automation, tooling. Written as Surface-layer outcomes, with Method on demand.
- **02 · Works**: projects and case studies. Each is an element tile that opens into Surface → Method → Bedrock.
- **03 · Notes**: writing and technical deep dives ("Rabbit Hole" is a candidate section name).
- **04 · About / Contact**: bio, the bronze story, how to engage.

Key UX patterns:
- **The periodic table is the navigation.** The home grid is the menu. Hovering a tile shows its Surface one-liner, and clicking it descends into the project.
- **Descending, not scrolling.** Project pages have a vertical strata indicator (Surface, Method, Bedrock) that shows depth and lets readers jump between layers.
- **Real instruments as heroes.** For example, Stannum's page leads with a live IEEE 3-bus power flow converging, not a screenshot.
- **Title block footer** on every page, pulled from real update metadata.
- **Two audiences, one path.** Clients get everything they need from Surface plus Services. Engineers go straight to Bedrock and the code.

Next design step (**Open**): mock up either the periodic-table home page or the Stannum project page with its three strata.

---

## 5. Tech stack — Recommended: Astro

Compared Astro and Zola:
- **Zola:** a single Rust binary with fast builds and Tera templates, great for content. It has no JS pipeline, so React components and interactive demos need a separate Vite/esbuild build wired in by hand, and its shortcodes are limited.
- **Astro (recommended):** content-first with zero JS by default, plus **islands**. Existing React components (such as the N-1 contingency heatmaps) drop straight into MDX. Content collections give typed frontmatter for elements and projects. The cost is a Node toolchain.
- **Deciding factor:** the site's pitch is real instruments instead of screenshots, including an eventual **Stannum → WebAssembly** build (`wasm-pack`) running live in the page. Astro and Vite handle this natively.

Sketch of the planned shape (to be fleshed out):
```
src/
  content/
    elements/      # one entry per project: symbol, number, mass, color, surface blurb, rev
    notes/         # MDX writing
    services/
  components/
    ElementTile.astro
    PeriodicTable.astro
    TitleBlock.astro
    StrataNav.astro
    islands/       # React: PowerFlowDemo, ContingencyHeatmap
  layouts/
    Sheet.astro    # page = drawing sheet, title block footer
  styles/
    tokens.css     # section 2.1 tokens
packages/
  stannum-wasm/    # wasm-pack output imported by islands
```

---

## 6. Artifacts from this session

- **Design canvas:** https://claude.ai/artifact/MsCvfYRbjecgZMByU21Fkp. It holds three boards:
  - v1 mood sheet (retired)
  - v2 A "Drawing Set" (light, editorial; not chosen)
  - **v2 B "Instrument" (chosen)**: home page with nav, hero statement, convergence figure, one-line bus rule, work index, and sheet strip

## 7. Open items

1. ~~Inscription typeface~~ → Plex only (decided).
2. ~~Default ground~~ → dark graphite (decided). A light theme is optional later.
3. Domain availability and misspelling coverage.
4. Primary mark refinement (Cu tile plus hidden rabbit detail).
5. Confirm Astro, then scaffold the project.
6. First page mockup: home or Stannum project page.
