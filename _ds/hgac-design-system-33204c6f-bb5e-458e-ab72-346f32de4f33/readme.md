# HGAC Design System

Design system for the **Houston-Galveston Area Council (H-GAC)** — the regional council of governments coordinating transportation, environmental, and community-development planning for the 13-county Houston-Galveston Gulf Coast region of Texas. This system was built to support the **Transportation Modeling** program in particular (regional travel demand model outputs, model runs, scenarios) while remaining usable across other H-GAC communications and tools.

## Sources
Only three brand assets were provided directly by the user — no codebase, Figma file, or existing product screenshots were attached:
- `uploads/logo.png` — primary H-GAC roundel mark (red background, white "HGAC" wordmark under an interlocking-circle glyph).
- `uploads/logo-TDM.png` — H-GAC **Transportation Modeling** program mark (a stylized "TM" line-graph glyph on red).
- `uploads/25675.png` — a 10-swatch brand color reference (7-step blue ramp + 3-step red ramp).
- A one-line brief: *"HGAC style. Use blue and red. Technical and vibrant, like Apple."*

Because no UI source of truth existed, everything beyond the literal logo/color assets — type pairing, spacing scale, component styling, and the Transportation Modeling UI kit screens — is an **original interpretation** built to the brief, not a recreation of an existing product. If a real H-GAC codebase, Figma file, or style guide exists, attach it and this system should be reconciled against it.

## What's here
- `tokens/` — color, typography, and spacing/radius/shadow/motion CSS custom properties → `styles.css`.
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius/shadow, logos, interaction states) shown in the Design System tab.
- `assets/logos/` — the two provided logo files.
- `components/` — 13 reusable React UI primitives, grouped by concern.
- `ui_kits/transportation-modeling/` — click-through dashboard recreation for the Transportation Modeling program.
- `SKILL.md` — portable skill file for use in Claude Code or other agent environments.

## Components (`components/`)
- `core/` — Button, Card, Badge, Tag
- `forms/` — Input, Select, Checkbox, Radio, Switch
- `navigation/` — Tabs
- `feedback/` — Toast, Tooltip
- `overlay/` — Dialog

No source defined a component inventory, so this is the standard set (per design-system-authoring guidance) sized to a planning-agency dashboard: enough for forms, tables, and status communication; no component families were invented beyond this common baseline.

## Content fundamentals
H-GAC is a government planning body, not a consumer brand — copy should read as **calm, precise, and civic-minded**, closer to a technical agency report than marketing copy.
- **Voice**: third person / institutional ("H-GAC coordinates...") for public-facing copy; direct and instructional ("Select a study area") inside tools. Avoid first-person "we" outside of official statements.
- **Casing**: Sentence case for body copy and UI labels ("Model runs", not "Model Runs" or "MODEL RUNS"). Acronyms are always full caps (H-GAC, VMT, V/C, TDM).
- **Tone**: factual, specific, numbers-forward ("214.4M VMT", "V/C 0.87") rather than promotional adjectives. No hype language ("revolutionary", "seamless").
- **Emoji**: none. This is a civic/technical context — emoji would undercut credibility.
- **Vibe**: "technical and vibrant" — precise data-forward language (real units, real IDs, coordinates) delivered with a confident, saturated color system rather than a dry gray government-site look.

## Visual foundations
- **Color**: dual-ramp system — blue (`--blue-50…800`) as the primary/interactive color, red (`--red-50…800`) as the brand accent used sparingly for high-emphasis actions (destructive/primary CTA) and the brand mark itself. Semantic aliases (`--color-primary`, `--color-accent`, `--status-*`) sit on top so components never reference raw ramp steps. Neutrals are a cool blue-gray scale (`--neutral-0…900`), not pure gray — ties surfaces back to the blue family.
- **Type**: two-family pairing. Display/headings in **Montserrat** (extrabold/bold, tight tracking) — matches the geometric, squared-off weight of the wordmark in both logos. Body/UI text in **Inter** for clean technical legibility at small sizes. **JetBrains Mono** for data — run IDs, coordinates, VMT figures — reinforcing the "technical" half of the brief. *Font files were not provided; these are Google Fonts substitutes chosen to match the logo's geometric sans letterforms — flag for the user to confirm or supply real brand fonts.*
- **Spacing**: 4px base unit scale (4→96px), used consistently for padding/gaps; no arbitrary values in components.
- **Backgrounds**: flat color surfaces only — no gradients, no photographic or illustrated backgrounds, no textures/patterns. Nothing in the source assets suggested imagery or illustration; keep surfaces flat until real photography/illustration is supplied.
- **Animation**: minimal and functional only — fast (120–200ms), standard-ease transitions on hover/press/focus (background color, scale, slide). No bounce, no decorative motion. Motion should feel instant and mechanical, not playful.
- **Hover states**: background steps one shade darker (e.g. blue-600 → blue-700) for filled buttons; ghost/secondary elements gain a subtle tinted fill (`--color-primary-subtle`). No opacity fades.
- **Press states**: subtle `scale(0.97)` on buttons, no color change beyond the hover state.
- **Focus states**: explicit 3px blue focus ring (`--shadow-focus`), never color-only — required for civic/government accessibility standards.
- **Borders & shadows**: 1px hairline borders (`--border-default`) on cards/inputs by default; shadows are used sparingly and only to indicate elevation (modals, dropdowns, floating toasts) — resting cards use a border, not a shadow.
- **Corner radii**: modest rounding throughout (6/10/16px) — rounded enough to feel modern/approachable, never pill-shaped except badges, tags, and the switch control.
- **Cards**: white surface, 1px neutral border, `--radius-lg` (16px), no shadow at rest; `elevated` variant adds `--shadow-md` for floating/dragged states.
- **Transparency/blur**: none used — no frosted-glass or backdrop-blur effects appear anywhere in this system.
- **Imagery color vibe**: no photography was supplied; if/when added, lean cool and documentary (aerial/infrastructure photography) rather than warm lifestyle imagery, consistent with a civil-engineering/planning context.

## Iconography
No icon set, icon font, or SVG sprite was provided in source materials. No icons have been added to components or the UI kit as a placeholder measure — text labels and badges carry status/meaning instead. **Recommendation**: if icons are needed, Lucide (stroke-based, geometric, matches the "technical" brief) is the suggested CDN substitute — flag this choice to the user for confirmation before adopting broadly. No emoji or unicode glyphs are used as icons anywhere in this system.

## Intentional additions
None beyond the standard baseline component set (no source defined an inventory to diverge from).

## Caveats — please read
- **No codebase, Figma, or existing screenshots were provided** — the Transportation Modeling UI kit and all component visual styling are original work built from the logos, palette, and one-line brief, not a recreation of an existing H-GAC product. If real product designs exist, please attach them so this system can be corrected against ground truth.
- **Fonts are substitutes** (Montserrat/Inter/JetBrains Mono via Google Fonts) chosen to visually match the logo's letterforms — not confirmed H-GAC brand fonts. Please supply official font files/names if they exist.
- **No icon set was provided** — components ship without icons; Lucide is suggested but not adopted.
- Only 2 logo variants were supplied (primary mark, Transportation Modeling program mark) — no logo lockups, favicon, or reversed/monochrome versions exist yet.

**Ask**: please review the Design System tab and tell me what to fix — confirm or correct the color read from the palette swatch, confirm/replace the font substitution, attach any real H-GAC product designs (site, other program dashboards) to replace the original Transportation Modeling UI kit, and flag any components you don't recognize or need added.
