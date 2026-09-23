# InstaCard — Design Contract

## Scope
One English InstaCard landing-page option with desktop and mobile browser layouts, plus UX documentation (research, sitemap, flows, rationale and Figma foundations).

Out of scope: production backend, authentication, payment, analytics, real contact-sync implementation, or a full app prototype.

## Source-of-truth order
1. BCA design-test brief
2. Client-provided InstaCard brand/product context
3. Current repository implementation
4. `docs/ux-research.md` and `docs/ux-strategy.md`
5. UIUX Factory guidance from `Ngh1aa/uiux-ai-workspace`
6. External visual references such as 21st.dev

## Product argument
Primary job:

> Exchange enough accurate contact information in the moment so the conversation can continue without manual retyping or recipient app friction.

Concept: **Less exchanging. More connecting.**

Art direction: **Clear · Personal · Effortless**

## Final landing contract
| Surface | Required / rationale |
|---|---|
| Header | Original logo + anchor menu + Early Access CTA |
| Hero | Exact brief headline, corrected “Effortless” spelling, **email field + Get Early Access** |
| Share your way | Contact + Facebook / Instagram / WhatsApp / profile-link story from client background |
| Benefits | All six brief benefits, with required wording preserved |
| How it works | Create → Share → Stay connected |
| Your card | Editable HTML/CSS customization concept; no unverified feature expansion |
| FAQ | Clarifies no-app, social links and customization |
| Footer | Repeats email + Get Early Access |

## Content guardrails
Do not introduce unsupported product capabilities or proof.

Removed from the current landing because the brief does not verify them:
- NFC / hardware-tap flows
- Apple Wallet / Google Wallet
- OCR / Smart Scanner as an InstaCard core feature
- fake enterprise customer logos
- fabricated customer counts, country counts, satisfaction rates or testimonials

Client-supplied claims kept because the brief explicitly requires them:
- “Help save 173 trees a day”
- Microsoft / Google / phone integration wording

These are **brief claims**, not independently verified production facts.

## UIUX Factory application
The implementation follows the workspace contract:
- latest user/brief request is the highest source of truth;
- unsupported assumptions are not promoted to facts;
- one primary hero motion moment rather than animation everywhere;
- responsive targets include desktop and mobile;
- actual rendered QA is required before completion.

## 21st.dev usage
21st.dev is visual-pattern inspiration only:
- masked/infinite rail for supporting channel examples;
- depth/card composition for product visuals;
- selective scroll reveal.

No 21st.dev source code/assets are copied into the project.

## Figma / accessibility
- `?figma=1` disables motion for stable HTML → Figma capture.
- `prefers-reduced-motion: reduce` disables continuous motion/reveal.
- Core marketing text is DOM text.
- Logo remains SVG.
- Touch targets and mobile reading order are preserved.
