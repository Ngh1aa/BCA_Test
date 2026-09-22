# InstaCard — BCA UI/UX Design Test

## Repository state

This repository is intentionally in **documentation-only mode**.

The previous HTML/CSS/JavaScript implementation, assets and rendered QA evidence were removed so a new local implementation can be uploaded cleanly without conflicts.

### Files intentionally preserved

- `docs/figma-frame-inventory.md` — official list of frames to build/convert in Figma
- `docs/figma-design-system-spec.md` — typography, type scale, colors, spacing, radius, effects and component specs
- `docs/ux-research.md` — competitor research and design implications
- `docs/ux-strategy.md` — sitemap, UX strategy and user flows
- `docs/design-contract.md` — design decisions and scope reference
- `docs/motion-direction.md` — motion/reference direction
- `docs/qa.md` — historical QA notes from the removed implementation
- `docs/phase-state.md` — current handoff state

## Official Figma frame list

1. Project Overview
2. Problem & Consumer Insight
3. Competitive Landscape & Design Implications
4. Sitemap
5. User Flow — Early Access
6. User Flow — Core Product
7. Concept & Visual Direction
8. **UI Foundations — Typography & Tokens**
9. **Components & UI Styles**
10. Final Landing — Desktop 1440
11. Final Landing — Mobile 390

Frames **08–09** are the reusable design-system frames and must include typography/font sizes, line-height, tracking, colors, spacing, radius, shadows, buttons, fields, cards, chips, icons and component states.

Full details:
- `docs/figma-frame-inventory.md`
- `docs/figma-design-system-spec.md`

## Next step

Upload the new local implementation to this repository. After that:
1. reconnect frames 10–11 to the new desktop/mobile UI;
2. revalidate the design-system values against the new code;
3. regenerate QA/evidence from the new implementation;
4. update any stale implementation references in the documentation.

The old runtime implementation is intentionally no longer part of the repository.
