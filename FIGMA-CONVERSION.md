# Figma Conversion Matrix

This project exposes six deterministic, conversion-safe views for HTML → Figma workflows.

## Artboards

| Output | Width | URL |
| --- | ---: | --- |
| Landing — Desktop | 1440px | `/?figma=landing-desktop` |
| Landing — Tablet | 768px | `/?figma=landing-tablet` |
| Landing — Mobile | 375px | `/?figma=landing-mobile` |
| Wireframe — Desktop | 1440px | `/?figma=wireframe-desktop` |
| Wireframe — Tablet | 768px | `/?figma=wireframe-tablet` |
| Wireframe — Mobile | 375px | `/?figma=wireframe-mobile` |

Numeric compatibility routes remain available:

- `?figma=1` → landing desktop
- `?figma=2` → wireframe desktop
- `?figma=3` → landing mobile
- `?figma=4` → landing tablet
- `?figma=5` → wireframe tablet
- `?figma=6` → wireframe mobile

## Responsive rules

The export routes lock the page width in CSS instead of relying on the importer browser viewport. This makes repeated HTML → Figma imports deterministic.

- Desktop keeps full navigation, 3-column feature grids, 4-column proof, 3-step journey, two-column product preview and FAQ.
- Tablet reflows navigation to hamburger, benefits to 2 columns, proof to 2×2, journey to horizontal step rows, and long two-column sections to a single column.
- Mobile uses a single-column reading order, stacked form controls, one-column proof/features/journey/product/FAQ, and touch-friendly controls.
- Wireframe views inherit the same responsive information architecture as the corresponding final landing view. Wireframe mode changes fidelity and styling, not content order.

## Conversion-safety rules

All six routes inherit `.figma-static`:

- animations and transitions are disabled;
- marquee cloning is disabled;
- reveal content is forced visible;
- masks/backdrop filters likely to rasterize text groups are removed;
- visible copy remains semantic HTML text;
- no canvas or SVG text is used for page copy.

The only text that cannot become editable Figma text is text already baked into bitmap product imagery.

## Research basis

- `uiux-ai-workspace/checklist-prototype-ui-ux.md`: validate responsive layouts at roughly 375 / 768 / 1440, keep mobile touch targets ≥44px, preserve content priority.
- Figma responsive guidance: model desktop/tablet/mobile as explicit breakpoints and use reflow/Auto Layout principles rather than simple scaling.
- 21st.dev landing/bento guidance: desktop grids should recompose on narrow screens; do not shrink a desktop multi-column layout until it becomes unreadable.
