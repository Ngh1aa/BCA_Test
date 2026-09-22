# InstaCard — Design Contract

## Scope / final submission pass — 23 September 2026
One complete InstaCard landing-page UI option in English, with responsive desktop and mobile layouts. UX deliverables include the proposed product sitemap, acquisition flow, core create/edit/share flows, premium/print extensions, and recovery considerations. Static HTML/CSS/JS is the design medium.

Out of scope: a production app, functional signup endpoint, authentication, payment, analytics, contact sync/import, printing fulfillment, or an interactive Figma prototype.

## Source of truth
Authoritative inputs:
- BCA / Beyond Creative Agency design-test brief;
- original InstaCard logo SVG;
- six original client-provided product screenshots: New Card, Design Card, My Card, View Card, Premium, and Printing;
- UX/design workflow guidance from `Ngh1aa/uiux-ai-workspace`.

The original logo and screenshots are preserved as supplied. Product screenshots are evidence of intended product areas, not proof of current production availability, prices, integrations, or launch status.

## Product argument
Audience hypothesis: freelancers, independent professionals, client-facing workers, and people who network across channels or languages.

Primary job:
> Exchange enough accurate contact information in the moment so the conversation can continue without manual retyping or recipient app friction.

Landing journey:
**Understand the value → see how sharing works → compare benefits → inspect original product UI → resolve questions → express early-access intent.**

Concept:
**Less exchanging. More connecting.**

Art direction:
**Clear · Personal · Effortless**

## Research synthesis
- **Linktree:** reinforces the “one destination, multiple channels” mental model.
- **HiHello / Blinq:** reinforce recipient-friendly browser card, QR/link sharing, and save-contact outcomes.
- **WorldCard Mobile:** provides a useful contrast with OCR/card capture; InstaCard’s proposition is direct digital data rather than retyping/scanning.
- **Bizz Card:** included in the supplied competitor set; no unsupported feature claims are inferred where evidence was unavailable.
- **21st.dev:** used as visual/layout inspiration only; no third-party source code or assets are copied into the final deliverable.

Research-derived ideas and product assumptions are explicitly treated as hypotheses where no user interview, analytics, or verified production evidence exists.

## Final composition contract
| Surface | User question | Final implementation | Mobile behavior |
|---|---|---|---|
| Header | Where am I and where can I go? | Original InstaCard logo, anchor nav, Early Access CTA | Compact nav with menu toggle |
| Hero | What is this and why should I care? | Brief headline/subheadline, visual email field + CTA, original `Screen View Card.png` | Copy first, original product screen below |
| Connection strip | How is it shared? | QR, link, save-contact cues | Vertical stack |
| How it works | What happens end to end? | Make → Share → Keep connection | Vertical steps |
| Benefits | Why is it better than paper/manual exchange? | All six brief benefits | Single-column cards |
| Your card | What does the real product look like? | Original `Screen My Card.png` with supporting marketing copy | Copy before image |
| FAQ | What objections remain? | Static question/answer rows for design presentation | Single column |
| Closing CTA | What should I do next? | Visual email field + Early Access CTA | Full width |

## Foundation
- Page: white / light-neutral surfaces.
- Ink: `#142333`.
- Primary blue: `#1465D9`.
- Light brand surface: `#EAF4FF`.
- Borders: `#DDE5ED`.
- Typography: Bricolage Grotesque Bold for expressive headings; Instrument Sans for body/UI copy.
- Max content width: 1248px.
- Responsive implementation is CSS-based with desktop/tablet/mobile breakpoints.
- Motion is intentionally minimal; no autoplay or decorative animation.

## Figma-conversion constraints
The HTML is optimized for conversion tools while preserving the client’s original assets:
- visible marketing copy remains real DOM text;
- benefit cards and layout blocks are HTML/CSS rather than rasterized composites;
- the landing avoids absolute/fixed/sticky layout positioning and decorative CSS transforms;
- no canvas, iframe, pseudo-element visual compositions, background-image artwork, or gradient effects are required for the page structure;
- original product screenshots remain image layers by design and are not rebuilt, edited, cropped internally, or claimed to be editable text;
- the logo remains an SVG/vector asset.

Trade-off: preserving original screenshots means text inside those screenshots is intentionally not editable after HTML → Figma import.

## Copy and claim guardrails
- Preserve the requested hero message and CTA.
- Correct the brief typo to **“Effortless contact exchange.”**
- Include all six required benefits: Simple, Accurate, Multilingual, Integrated, Green, Customized.
- Do not use the unsupported “173 trees/day” claim; use qualitative paper-reduction language instead.
- Google/Microsoft sync is described as planned, not verified current integration.
- Screenshot pricing is treated as supplied product evidence, not current approved pricing.
- No fabricated testimonials, customer counts, partner logos, conversion lifts, launch dates, or research statistics.
- Early Access fields are **visual design elements only** in this static submission; no email is transmitted or stored.

## Interaction scope
The brief does not require a prototype. The final page therefore keeps interaction deliberately light:
- mobile menu open/close;
- anchor navigation;
- hover/focus presentation on links/buttons.

FAQ rows and Early Access fields are static presentation UI, not interactive form/disclosure components.

## Acceptance criteria for final submission
- Desktop and mobile landing compositions render without horizontal overflow.
- Original supplied logo and product screens load successfully.
- Hero, six benefits, Your Card, FAQ, final CTA, and footer are present.
- Desktop and mobile visual evidence is regenerated after the final hero/image changes.
- Documentation must describe the current code, not earlier interactive/form versions.
- No user-testing, accessibility-conformance, cross-browser, or production-readiness claim is made beyond the checks actually performed.
