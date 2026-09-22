# InstaCard — Final QA and delivery evidence

## Final submission status — 23 September 2026
**PASS for the polished static design handoff.**

This record describes the current screenshot-free marketing direction. It does **not** claim production readiness, WCAG conformance, cross-browser certification, usability validation, or live backend functionality.

UI source used for final visual evidence:
`bf963ca0e17801fa54ef0614b7efbaf11bf5aacd`

Evidence commit:
`f164aedd236e0bae9f726ff24134e0b321a34ce4`

## Final visual direction verified
- Original `logo.svg` remains the brand asset.
- Hero uses a new HTML/CSS/SVG digital identity + recipient preview + QR/share composition.
- “Your card” uses a new HTML/CSS Card Builder + live preview concept.
- The six supplied app screenshots remain reference evidence only and are **not embedded in the landing page**.
- Early Access fields and FAQ remain static presentation UI.
- JavaScript is limited to mobile navigation.

## Rendered evidence
Final full-page screenshots were generated using Playwright 1.55 / Chromium against a local static HTTP server.

Successful workflow run:
`35775059850`

Evidence:
- `evidence/desktop-1440.png` — 1440 × 1000 viewport, full-page capture.
- `evidence/mobile-390.png` — 390 × 844 viewport, full-page capture.

Evidence blobs:
- desktop: `13b891ebc525b98a3024ad9547ee45d7cfc31cec`
- mobile: `5df7b91a5738d73663549b022b2b4ea9c90d5103`

## Layout smoke-check result

| Viewport | scrollWidth | clientWidth | Page errors | Image loading |
|---|---:|---:|---:|---|
| Desktop 1440 | 1440 | 1440 | 0 | PASS |
| Mobile 390 | 390 | 390 | 0 | PASS |

Both rendered states confirmed:
- `.hero-visual` exists;
- `.builder-visual` exists;
- all six required benefit labels are present;
- only the original InstaCard SVG logo is loaded as an external image (header + footer);
- no horizontal page overflow was detected.

## Source consistency checks

| Check | Result |
|---|---|
| Required benefits | Simple, Accurate, Multilingual, Integrated, Green, Customized — all present |
| Original logo used | YES |
| Client screenshot PNG references in `index.html` | **0** |
| Landing PNG `img` tags | **0** |
| New hero concept | present |
| New Card Builder concept | present |
| HTML `form` | 0 |
| HTML `input` | 0 |
| HTML `details` | 0 |
| HTML `canvas` | 0 |
| HTML `iframe` | 0 |
| CSS `position:absolute` | 0 |
| CSS `position:fixed` | 0 |
| CSS `position:sticky` | 0 |
| CSS transforms | 0 |
| CSS linear/radial gradients | 0 |
| Signup-validation JavaScript | none |
| Mobile-navigation JavaScript | present |

## Figma-conversion expectations
The main landing is now strongly conversion-oriented:
- marketing copy is DOM text;
- profile/card content is DOM text;
- buttons, chips, contact rows and builder controls are HTML/CSS;
- QR artwork is inline SVG/vector;
- original logo remains SVG/vector;
- no legacy product screenshot flattens hero or personalization into one bitmap.

The six original screenshots remain in `assets/` and in the optional **Supplied Product Evidence** section of `design-notes.html`. They should stay out of the primary Desktop/Mobile Figma landing frames unless BCA explicitly requests them.

## Interaction scope
Implemented:
- anchor navigation;
- mobile menu open/close;
- standard link/button hover/focus presentation.

Not implemented:
- email submission;
- form validation;
- FAQ accordion;
- authentication;
- payment;
- real contact saving/sync;
- print checkout;
- analytics.

## Deferred validation
Not performed:
- Safari / Firefox comparison;
- physical iOS / Android device test;
- screen-reader session;
- formal accessibility-conformance audit;
- Lighthouse audit;
- real user interviews/usability sessions;
- production API/integration testing.

These remain outside the BCA static design-test scope.
