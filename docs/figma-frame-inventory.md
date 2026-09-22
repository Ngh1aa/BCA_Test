# InstaCard — Figma Conversion Frame Inventory

## Purpose
This is the retained presentation/frame list for the BCA test. The previous runtime implementation has been removed; frames 10–11 must be sourced from the new local implementation after it is uploaded.

The goal is a **short recruiter-facing case presentation**, not a long portfolio case study.

## Final frame list

| # | Figma frame | Purpose | Source |
|---|---|---|---|
| **01** | **Project Overview** | Brief, product, role, scope, deliverables | `docs/ux-strategy.md` + retained brief context |
| **02** | **Problem & Consumer Insight** | Pain points, JTBD, core insight; clearly marked as hypotheses | `docs/ux-research.md` + `docs/ux-strategy.md` |
| **03** | **Competitive Landscape & Design Implications** | Bizz Card, WorldCard Mobile, Linktree → opportunity → landing decisions | `docs/ux-research.md` |
| **04** | **Sitemap** | Proposed information architecture for public site, owner area and recipient card | `docs/ux-strategy.md` |
| **05** | **User Flow — Early Access** | Landing → evaluate → email intent → validation/confirmation concept | `docs/ux-strategy.md` |
| **06** | **User Flow — Core Product** | Create → customize → preview/share → recipient opens → save contact | `docs/ux-strategy.md` |
| **07** | **Concept & Visual Direction** | “Less exchanging. More connecting.”, Clear/Personal/Effortless, art direction and visual rationale | `docs/design-contract.md` + `docs/ux-strategy.md` |
| **08** | **UI Foundations — Typography & Tokens** | Font families, type scale, font sizes, line-height, tracking, color palette, grid, spacing, radius and shadow styles | `docs/figma-design-system-spec.md` |
| **09** | **Components & UI Styles** | Buttons, Early Access field, cards, chips, icons, nav patterns, states and hover behavior | `docs/figma-design-system-spec.md` — revalidate against new implementation after upload |
| **10** | **Final Landing — Desktop 1440** | Main desktop UI deliverable | **NEW IMPLEMENTATION REQUIRED** — capture/build from the uploaded local version at 1440px |
| **11** | **Final Landing — Mobile 390** | Responsive mobile UI deliverable | **NEW IMPLEMENTATION REQUIRED** — capture/build from the uploaded local version at 390px |

## Optional appendix — only if there is time
Do not put these before the final UI screens.

- Supplied Product Evidence — original InstaCard screenshots (**reference only; not part of main landing UI**)
- Extended product flows — Premium / Print / Settings
- QA / responsive notes

## Recommended Figma page structure

```text
BCA — InstaCard
├── 01 Project Overview
├── 02 Problem & Consumer Insight
├── 03 Competitive Landscape & Design Implications
├── 04 Sitemap
├── 05 User Flow — Early Access
├── 06 User Flow — Core Product
├── 07 Concept & Visual Direction
├── 08 UI Foundations — Typography & Tokens
├── 09 Components & UI Styles
├── 10 Final Landing — Desktop 1440
└── 11 Final Landing — Mobile 390
```

## Conversion rule
For frames 01–09, use editable text, frames, tables, components and vectors.

Frame 08 must include: font families, type scale, font size, line-height, tracking, color variables, spacing, grid, radius and effects.

Frame 09 must include: button variants, Early Access field, benefit cards, Builder/Profile cards, sharing/channel chips, icon sizing/stroke rules and key component states.

For frames 10–11:
- keep all marketing copy and product visuals editable where the converter supports it;
- the hero digital identity, recipient preview, QR/share rail and Card Builder are HTML/CSS/SVG—not client screenshot bitmaps;
- preserve the InstaCard logo as vector;
- do **not** bring the six legacy app screenshots into the main landing frames. Keep them only in an optional reference/evidence appendix.

## Submission priority
If time is limited, the must-have sequence is:

**01 → 02 → 03 → 04 → 05 → 07 → 08 → 09 → 10 → 11**

Frame 06 is valuable because it demonstrates product thinking beyond the marketing page, but it is secondary to the brief’s required Early Access user flow.


### HTML → Figma source

The old GitHub Pages implementation has been removed.

After the new local build is uploaded, define the fresh HTML → Figma conversion URL here. Do not use the previous `?figma=1` URL until the new implementation recreates that static-capture mode.



## Design-system export checklist

Before final Figma delivery, create these reusable styles/variables:

- **Text Styles:** Display/Hero, H1, H2, H3, Body Large, Body Default, Body Medium, Body Small, Button, Nav, Label, Caption.
- **Color Variables:** Ink, Muted, Primary Blue, Blue Dark, Hero BG, Pale Blue, Surface, Border, White, Green Surface, Closing Blue, Dark CTA.
- **Spacing Variables:** base spacing scale + section spacing.
- **Radius Variables:** XS, SM, MD, LG, XL, 2XL, Pill.
- **Effect Styles:** Hero, Builder, Profile Card, Hover Card, Sharing Pill.
- **Components:** Primary/Small/Dark Button, Early Access field, Benefit Card, Builder Card, Profile Card, Sharing Chip, Channel Chip, Status Badge, Step Icon Box.
- **State notes:** default/hover for interactive visual components, plus `?figma=1` static mode for landing capture.

Full specification: `docs/figma-design-system-spec.md`.
