# InstaCard — Final QA and motion evidence

## Status — 23 September 2026
**PASS for the BCA static landing + motion enhancement scope.**

The motion pass was implemented after comparing relevant patterns from CamCard, BOVAcard, CloudCard and 21st.dev. Motion behavior was recreated from scratch in the existing HTML/CSS/JS codebase.

No claim is made for production readiness, formal WCAG conformance, Safari/Firefox parity, real-device validation or backend functionality.

## Motion system verified

| Surface | Final behavior |
|---|---|
| Hero identity card | slow vertical float |
| Recipient preview | inverse slow float |
| Ready state | soft pulse |
| Sharing strip | infinite horizontal marquee |
| How it works | sequential scroll reveal |
| Benefits | scroll reveal + hover lift |
| Card Builder preview | low-amplitude float |
| FAQ / final CTA | simple reveal |

No GSAP, Motion, Framer Motion or other animation runtime was added.

## Automated browser evidence

Successful Playwright workflow:
`35778391086`

Renderer:
**Playwright 1.55.0 / Chromium**

### Default motion mode

Desktop **1440 × 1000**:
- runtime errors: **0**
- horizontal overflow: **0**
- root mode: `motion-enhanced`
- sharing rail animation: `instacard-marquee`
- hero animation: `instacard-float-a`
- all 3 How It Works steps reveal successfully after entering the viewport
- all 6 benefit cards reveal successfully after entering the viewport
- legacy screenshot PNGs rendered in landing: **0**

Mobile **390 × 844**:
- runtime errors: **0**
- horizontal overflow: **0**
- root mode: `motion-enhanced`
- sharing rail animation: `instacard-marquee`
- hero animation begins when the hero visual enters the viewport
- all 3 steps and all 6 benefits reveal successfully through the real mobile scroll sequence
- legacy screenshot PNGs rendered in landing: **0**

## Reduced motion

Playwright emulated `prefers-reduced-motion: reduce`.

Verified:
- root mode: `motion-reduced`
- sharing marquee: **disabled**
- hero float: **disabled**
- hidden reveal elements: **0**

Core content therefore remains visible without continuous/reveal motion.

## Figma conversion mode

Use:

`?figma=1`

Example:
`https://ngh1aa.github.io/BCA_Test/?figma=1`

Verified at desktop and mobile:
- root mode: `figma-static`
- marquee animation: **none**
- hero float: **none**
- hidden reveal elements: **0**
- no horizontal overflow

This is the preferred URL for HTML → Figma conversion so the converter cannot capture an in-between motion state.

## Final static visual evidence

Full-page screenshots are captured in `?figma=1` mode after motion behavior is separately verified.

- `evidence/desktop-1440.png`
  - blob: `d8dceb708726ba4b1512a2673bd6187f41ea2009`
- `evidence/mobile-390.png`
  - blob: `4a036bf5f34becc5078f623e4ab799cb50a61f22`

Both screenshots were opened and visually inspected after capture.

Visual inspection:
- hero hierarchy remains clear;
- animated sharing rail fits the section without clipping the page;
- How It Works and benefit grids keep their alignment;
- Card Builder, FAQ and closing CTA are all present in full-page evidence;
- mobile layout retains the expected single-column reading order;
- no blank sections caused by unrevealed content remain in final evidence;
- no P0/P1 visual defect was found in the declared desktop/mobile scope.

Machine-readable motion evidence:
`evidence/motion-qa-report.json`

## Source consistency

Current implementation:
- original InstaCard logo SVG remains in header/footer;
- landing product visuals remain HTML/CSS/SVG;
- client app screenshots remain reference evidence only;
- JavaScript uses IntersectionObserver for one-time reveal and existing mobile-menu behavior;
- marquee/float/reveal motion is CSS-based;
- `prefers-reduced-motion` and Figma static mode are explicit escape hatches.

## Deferred / not claimed

Not covered by this final motion pass:
- Safari / Firefox rendering comparison;
- physical iOS / Android testing;
- screen-reader session;
- formal WCAG conformance audit;
- Lighthouse / field Core Web Vitals;
- production email submission;
- backend/integration behavior;
- usability testing with recruited users.
