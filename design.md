---
version: v2
name: Modal.com Taste Analysis
source: https://modal.com/
analyzedAt: 2026-06-14
purpose: Alternate Hermes Dash visual mode named v2-dash, translated from Modal.com homepage design evidence.
---

# Modal.com Taste Analysis → Hermes Dash v2

## Design Map

### Evidence gathered

- URL loaded: `https://modal.com/`
- Page title: `Modal: High-performance AI infrastructure`
- Viewport sampled: `1280 × 633`
- Browser screenshot was captured at `/Users/koni/.hermes/cache/screenshots/browser_screenshot_a31e2fc3abdf4cc6bcf884025d74de5a.png` and resized to `/Users/koni/.hermes/cache/screenshots/resized/modal-homepage-4000.png` for Bedrock image limits.
- Opus vision analysis succeeded on the resized screenshot. Its observations are incorporated below alongside live DOM/computed CSS extraction and the accessibility snapshot.
- Opus visual read: dark hero → light product chapters → dark social-proof/CTA chapters; centered hero; grayscale customer logo strip; product UI/code panels instead of photography; rounded bento/customer cards; isometric green cube in the final CTA; and a single neon-green action/signal color.

### Color system

- Page background: `rgb(0, 0, 0)` / `#000000`.
- Dark nav surface: `rgb(33, 37, 37)` / `#212525`.
- Repeated dark component surface: `rgb(24, 24, 24)` / `#181818`.
- Primary light text: `rgb(221, 255, 220)` / `#ddffdc`.
- Muted green text: `rgb(140, 171, 135)` / `#8cab87`.
- Secondary muted green: `rgb(103, 125, 100)` / `#677d64`.
- High-energy accent: `rgb(127, 238, 100)` / `#7fee64`.
- Pale panel background for light sections: `rgb(222, 240, 221)` / `#def0dd`.
- Light-section dark heading text: `rgb(34, 34, 34)` / `#222222`.
- Frequent border colors: `rgb(91, 109, 92)` / `#5b6d5c`, `rgb(221, 255, 220)` / `#ddffdc`, and `oklab(... / 0.3-0.6)` translucent pale green.

### Typography

- Main UI/body family: `Inter Variable, ui-sans-serif, system-ui, sans-serif`.
- Display heading family: `Goga, ui-sans-serif, system-ui, sans-serif`.
- H1: `64px`, `500`, `64px` line-height, color `#ddffdc`, width about `603px`.
- H2: `54px`, `400`, `59.4px` line-height, color `#ddffdc`.
- H3: `30px`, `400`, `36px` line-height, letter spacing `-0.36px`.
- Body paragraph sample: `20px`, `400`, `30px` line-height, color `#8cab87`, letter spacing `-0.36px`.
- Nav/link/button text: mostly `14px`, weight `500`, line-height around `20px`, letter spacing `-0.36px`.

### Layout and rhythm

- Primary container width at sampled viewport: `1184px`, created from a `1280px` viewport with `48px` horizontal page gutters.
- Top nav: rounded-pill container, `1184px × 48px`, grid template `320.562px 522.875px 320.562px`, `10px` padding.
- Hero stack: centered flex column with `20px` row gap, `292px` content height.
- Main CTA pair: flex row with `16px` gap.
- Logo strip: horizontal auto-scroll row, `64px` gap, muted green logos/text.
- Large sections use vertical margins such as `160px`, `128px`, `112px`, and `96px` inner padding for the pale workload panel.
- Opus visual analysis confirmed the page-level rhythm as dark hero, white product education, and dark social-proof/final CTA chapters rather than a uniform dashboard surface.
- Feature articles: two-column rhythm below the fold, article cards around `576px` wide and `560-590px` tall.

### Components

- Primary CTA: pill, `#7fee64` background, black text, `14px/500`, `38px` height, padding `9px 21px`, huge radius computed as `33554400px`.
- Secondary CTA: transparent pill, pale-green text, `1px` translucent pale-green border, `38px` height, padding `8px 20px`.
- Sign-up nav item: text+icon pill, accent green text, `28px` height, `12px` left padding.
- Cards/panels: mostly flat, dark or pale-green surfaces; little elevation. Only one sampled shadow appears: `0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)`.
- Radius scale: extreme `9999px` pills, plus `12px`, `11px`, `8px`, `4px` for panels/media.
- Product visual treatment: code/product animation surfaces are represented by canvas/video regions rather than static illustration; the brand reads as infrastructure through terminal-like dark fields and green signal color.
- Opus visual analysis called out bento-style case-study cards, dark UI/code screenshots, technical line illustrations, grayscale logos, and the green isometric final-CTA object as the site's repeated visual proof devices.

## Taste DNA

### 1. Dark field, green signal

- Trigger: The interface needs to feel technical without showing many decorative controls.
- Decision: Use black or near-black as the field, pale green as the readable foreground, and bright green only for the active action or selected signal.
- Reason: The product promise is compute infrastructure; the palette behaves like a terminal/scheduler surface instead of a SaaS analytics template.
- Evidence: Body background `#000000`, nav `#212525`, primary text `#ddffdc`, muted text `#8cab87`, primary CTA `#7fee64`.
- Trade-off / restraint: Do not add a wide multicolor palette. One bright green is enough.

### 2. Soft geometry over hard chrome

- Trigger: A control is clickable or globally important.
- Decision: Use pill geometry for navigation, CTAs, and mode controls; keep cards mostly flat with thin translucent green borders.
- Reason: The huge pill radius makes developer infrastructure feel approachable while the dark palette keeps it technical.
- Evidence: CTA and nav pills use computed radius around `33554400px`; secondary CTA uses a `1px` pale-green translucent border.
- Trade-off / restraint: Avoid square catalog borders and bevels in this mode.

### 3. Large type, few words, long air gaps

- Trigger: A section introduces a concept or report category.
- Decision: Let headings dominate with `54-64px` display scale on desktop; keep secondary copy quiet and spaced.
- Reason: Modal does not compress information into dense cards at the top level; it stages claims one at a time.
- Evidence: H1 `64px/64px`, H2 `54px/59.4px`, hero stack gap `20px`, major section margins `112-160px`.
- Trade-off / restraint: Do not fill every row with badges, stickers, or color blocks.

### 4. Runtime surfaces, not paper surfaces

- Trigger: Showing reports, logs, code, outcomes, or detail panes.
- Decision: Treat containers as dark runtime panels with faint green borders and pale-green text, with a single accent for the active row.
- Reason: The source site makes infrastructure legible through dark product areas, canvas/video motion, and green operational status cues.
- Evidence: Dark component surfaces `#181818`, borders around `#5b6d5c`, active/CTA green `#7fee64`, muted operational copy `#8cab87`.
- Trade-off / restraint: Do not rely on skeuomorphic paper, retro web bevels, or heavy drop shadows.

## Anti-patterns

- No rainbow tint family in v2. The Modal translation should use black, near-black, pale green, muted green, and one neon green.
- No Times New Roman body copy in v2. Use Inter/system sans for UI and body.
- No bevel stickers in v2. Buttons should be pills or flat ghost controls.
- No heavy dashboard chrome. Prefer one focused list and one detail panel over decorative metric clutter.
- No exact Modal brand cloning. Translate the taste into Hermes Dash; do not copy logos, animations, wording, or proprietary assets.

## Implementation Notes for Hermes

- v2 theme name in the app: `modal-v2` / label `v2-dash / Modal taste`.
- Add a theme selector in the header so the existing Dell 1996 styling remains available.
- Scope the alternate style under `.modal-taste` so the original dashboard can still render unchanged.
- Apply the Opus observations in UI structure, not just colors: centered hero, italic wordmark accent on `Dash`, runtime-panel metric cards, pill project tabs, and dark code/log-style report surfaces.
- Use CSS custom properties for Modal-derived colors:
  - `--modal-black: #000000`
  - `--modal-ink: #181818`
  - `--modal-nav: #212525`
  - `--modal-cream: #ddffdc`
  - `--modal-muted: #8cab87`
  - `--modal-border: #5b6d5c`
  - `--modal-accent: #7fee64`
  - `--modal-panel: #def0dd`
- When mapping existing components, first change global surfaces and borders, then remove retro-specific effects: black page frame, `Arial Black`, Times body, bevel shadows, and hard square cards.
