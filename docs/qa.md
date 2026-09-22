# InstaCard — Final QA and delivery evidence

## Final submission status — 23 September 2026
**PASS for the final static design handoff.**

This QA record describes the current landing implementation after the final hero/product-image changes. It does **not** claim production readiness, WCAG conformance, real-device coverage, cross-browser certification, usability validation, or live backend functionality.

Final UI source baseline:
`1e97af859fd1c8842cbee30a5666a78e5ba8b917`

Final evidence blobs:
- desktop: `673ddc24e3d493a518ed5de0fe0cecb8014bc494`
- mobile: `60b4a58303ad63663185af7bfe344f0be7601108`

## What changed in the final pass
Documentation was synchronized with the current code:
- hero uses the original client-provided `Screen View Card.png`;
- Your Card uses the original `Screen My Card.png`;
- Early Access fields are static visual UI, not HTML forms;
- FAQ is a static presentation section, not `details/summary`;
- JavaScript is limited to the mobile navigation behavior;
- original product screenshots remain image layers by design for Figma conversion.

## Final rendered evidence
Fresh full-page screenshots were generated from the final-submission branch through GitHub Actions using Playwright Chromium against a local static HTTP server.

Workflow run:
`35772882361` — **success**

Current evidence:
- `evidence/desktop-1440.png` — full landing at **1440 × 1000 viewport**, full-page capture.
- `evidence/mobile-390.png` — full landing at **390 × 844 viewport**, full-page capture.

The screenshots were regenerated after the original View Card screenshot replaced the earlier rebuilt hero mockup.

## Source consistency checks
Current final branch scan confirms:

| Check | Result |
|---|---|
| Required benefit labels | Simple, Accurate, Multilingual, Integrated, Green, Customized — all present |
| Hero original product image | `Screen View Card.png` present |
| Your Card original product image | `Screen My Card.png` present |
| HTML `form` elements | 0 |
| HTML `input` elements | 0 |
| HTML `details` elements | 0 |
| CSS `position:absolute` | 0 |
| CSS `position:fixed` | 0 |
| CSS `position:sticky` | 0 |
| CSS transforms | 0 |
| CSS linear/radial gradients | 0 |
| Signup validation JavaScript | none |
| Mobile navigation JavaScript | present |

Original supplied assets remain in `assets/`:
- `logo.svg`
- `Screen New Card.png`
- `Screen Design Card.png`
- `Screen My Card.png`
- `Screen View Card.png`
- `Screen Premium.png`
- `ScreenPrinting.png`

## Visual review targets
The final evidence is intended to verify:
- hero hierarchy and CTA visibility;
- original supplied product UI shown without rebuilding the screenshot contents;
- all six benefit cards;
- responsive reading order;
- Your Card screenshot section;
- FAQ and final CTA presence;
- footer completion;
- no obvious horizontal-layout break at the two required submission widths.

## Figma-conversion expectations
The surrounding landing copy and layout are HTML/CSS and should import as editable structure where supported by the conversion tool.

Expected exceptions:
- original PNG screenshots remain image layers;
- the original SVG logo remains a vector layer;
- text inside original PNG screenshots is intentionally not editable because the source asset must remain unchanged.

## Interaction scope
This is a design test, not a functional product prototype.

Implemented:
- anchor links;
- mobile menu open/close;
- standard link/button hover/focus behavior.

Not implemented:
- email submission;
- form validation;
- FAQ accordion behavior;
- authentication;
- payment;
- contact saving/sync;
- printing checkout;
- analytics.

## Deferred validation
Not performed in this final pass:
- Safari / Firefox comparison;
- physical iOS / Android device testing;
- screen-reader session;
- formal accessibility-conformance audit;
- Lighthouse performance audit;
- real user interviews or usability sessions;
- production API/integration testing.

These are intentionally outside the BCA design-test scope and must not be inferred from the static submission.
