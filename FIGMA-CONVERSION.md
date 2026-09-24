# Figma Conversion Matrix

Use the six named URLs below as the **canonical HTML → Figma export links**. They all include the editable-text fixes and deterministic viewport classes.

## Final landing page

| Device | Artboard | Canonical URL |
| --- | ---: | --- |
| Desktop | 1440px | https://ngh1aa.github.io/BCA_Test/?figma=landing-desktop |
| Tablet | 768px | https://ngh1aa.github.io/BCA_Test/?figma=landing-tablet |
| Mobile | 375px | https://ngh1aa.github.io/BCA_Test/?figma=landing-mobile |

## Wireframe

| Device | Artboard | Canonical URL |
| --- | ---: | --- |
| Desktop | 1440px | https://ngh1aa.github.io/BCA_Test/?figma=wireframe-desktop |
| Tablet | 768px | https://ngh1aa.github.io/BCA_Test/?figma=wireframe-tablet |
| Mobile | 375px | https://ngh1aa.github.io/BCA_Test/?figma=wireframe-mobile |

## Compatibility aliases

Old numeric/short links still work, but the page normalizes them to the canonical named URL without reloading:

- `?figma=1` or `?figma=desktop` → `?figma=landing-desktop`
- `?figma=4` or `?figma=tablet` → `?figma=landing-tablet`
- `?figma=3` or `?figma=mobile` → `?figma=landing-mobile`
- `?figma=2` → `?figma=wireframe-desktop`
- `?figma=5` → `?figma=wireframe-tablet`
- `?figma=6` → `?figma=wireframe-mobile`

## Responsive behavior

The export mode is applied before the stylesheet loads, so the importer receives the correct layout on first paint rather than a desktop layout that reflows afterward.

- **Desktop 1440:** full navigation, 4-column proof, 3-column benefits, 3-step journey, 2-column product preview and FAQ.
- **Tablet 768:** hamburger navigation, 2×2 proof, 2-column benefits, horizontal journey rows, stacked product preview and FAQ.
- **Mobile 375:** single-column content order, stacked forms, 1-column proof/benefits/journey/product/FAQ, touch-friendly controls.
- **Wireframes:** use the exact same responsive information architecture as their matching final UI breakpoint; only fidelity and visual styling change.

## Figma conversion safety

All six canonical modes inherit `.figma-static`:

- animations and transitions are disabled;
- duplicated marquee content is removed;
- reveal content is forced visible;
- masks/backdrop filters likely to rasterize groups are disabled;
- mixed inline text has been split into explicit text elements;
- visible page copy remains semantic HTML text;
- no canvas or SVG `<text>` is used for page copy.

The only non-editable text is text physically baked into bitmap assets such as product/hand imagery.
