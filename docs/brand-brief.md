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

### 2.1 Materials, not colors
Every color is a real metal or one of its states. Don't use gradients or decorative color. If a color shows up, it means something.

| Token | Hex | Role |
|---|---|---|
| Copper | `#B87333` | Primary accent: links, the Cu mark |
| Verdigris | `#4F8F86` | Secondary data, success/converged states |
| Tin | `#A3A9AF` | Rules, borders, muted text |
| Bronze | `#8C6A3F` | Rare emphasis, Stannum pages (Cu + Sn) |
| Tunnel | `#15140F` | Dark ground (current default) |
| Vellum | `#F1EDE4` | Light ground, drawing-sheet pages, text on dark |

Supporting values used in the mood sheet: body text on dark `#D9D4CA`, hairline on dark `#4A4D50`, bright tin for the Sn glyph `#C9CED3`, bronze glyph `#C9A06A`, surface layers `#2A2620`, `#1F1C17`, `#0D0C09`.

```css
:root {
  --copper:    #B87333;
  --verdigris: #4F8F86;
  --tin:       #A3A9AF;
  --bronze:    #8C6A3F;
  --tunnel:    #15140F;
  --vellum:    #F1EDE4;
  --text-body: #D9D4CA;
  --hairline:  #4A4D50;
}
```

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

### 2.5 Type with two voices
- **Inscription voice:** a Roman-cut serif in caps or small caps for headings and the wordmark. **Cinzel** is the current stand-in (**Open**: it may read too classical; alternatives include a sharper serif or Cormorant small caps).
- **Instrument voice:** **IBM Plex Sans** (body, weights 300–500) and **IBM Plex Mono** (data, labels, title blocks).
- The wordmark is CUNICULUS in the inscription face with wide tracking (~0.14em).

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

- **Mood sheet** (design canvas): https://claude.ai/artifact/MsCvfYRbjecgZMByU21Fkp. It shows the Cu + Sn = Bronze equation, the six materials, the two type voices, a sample title block, the depth strata, and the footer rabbit glyph. Skylar approved the direction.

## 7. Open items

1. Final inscription typeface (Cinzel vs. alternatives).
2. Default ground: dark Tunnel or light Vellum drawing-sheet.
3. Domain availability and misspelling coverage.
4. Primary mark refinement (Cu tile plus hidden rabbit detail).
5. Confirm Astro, then scaffold the project.
6. First page mockup: home or Stannum project page.
