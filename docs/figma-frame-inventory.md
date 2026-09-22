# InstaCard — Figma Conversion Frame Inventory

## Purpose
This is the final presentation/frame list for converting the BCA test from the static HTML project into Figma.

The goal is a **short recruiter-facing case presentation**, not a long portfolio case study.

## Final frame list

| # | Figma frame | Purpose | Source |
|---|---|---|---|
| **01** | **Project Overview** | Brief, product, role, scope, deliverables | `design-notes.html` intro + brief |
| **02** | **Problem & Consumer Insight** | Pain points, JTBD, core insight; clearly marked as hypotheses | `design-notes.html` section 01 + `docs/ux-research.md` |
| **03** | **Competitive Landscape & Design Implications** | Bizz Card, WorldCard Mobile, Linktree → opportunity → landing decisions | `docs/ux-research.md` + `design-notes.html` section 02 |
| **04** | **Sitemap** | Proposed information architecture for public site, owner area and recipient card | `design-notes.html` sitemap + `docs/ux-strategy.md` |
| **05** | **User Flow — Early Access** | Landing → evaluate → email intent → validation/confirmation concept | `design-notes.html` acquisition flow |
| **06** | **User Flow — Core Product** | Create → customize → preview/share → recipient opens → save contact | `design-notes.html` core flow + `docs/ux-strategy.md` |
| **07** | **Concept & Visual Direction** | “Less exchanging. More connecting.”, Clear/Personal/Effortless, color/type/layout rationale | `design-notes.html` concept section + `docs/design-contract.md` |
| **08** | **Final Landing — Desktop 1440** | Main UI deliverable | `index.html` at 1440px / `evidence/desktop-1440.png` |
| **09** | **Final Landing — Mobile 390** | Responsive UI deliverable | `index.html` at 390px / `evidence/mobile-390.png` |

## Optional appendix — only if there is time
Do not put these before the final UI screens.

- Supplied Product Evidence — original InstaCard screenshots
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
├── 08 Final Landing — Desktop 1440
└── 09 Final Landing — Mobile 390
```

## Conversion rule
For frames 01–07, use editable text, frames, tables and vectors.

For frames 08–09:
- keep all marketing copy and UI blocks editable where the converter supports it;
- preserve the original client-provided product screenshots as image layers;
- preserve the InstaCard logo as vector;
- do not rebuild or alter screenshot pixels merely to make their internal text editable.

## Submission priority
If time is limited, the must-have sequence is:

**01 → 02 → 03 → 04 → 05 → 07 → 08 → 09**

Frame 06 is valuable because it demonstrates product thinking beyond the marketing page, but it is secondary to the brief’s required Early Access user flow.
