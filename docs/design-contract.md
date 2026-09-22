# InstaCard — Design Contract

## Scope / final submission direction — 23 September 2026
One complete InstaCard landing-page UI option in English, with responsive desktop and mobile layouts. UX deliverables include competitor research, proposed sitemap, acquisition flow, core create/edit/share flows, and concept rationale. Static HTML/CSS/JS is the design medium.

Out of scope: a production app, functional signup endpoint, authentication, payment, analytics, contact sync/import, printing fulfillment, or an interactive app prototype.

## Source of truth
Authoritative inputs:
- BCA / Beyond Creative Agency design-test brief;
- original InstaCard logo SVG;
- six client-provided product screenshots used as **reference/context evidence**;
- UX/design workflow guidance from `Ngh1aa/uiux-ai-workspace`.

Only the original logo is a required visual asset in the final landing. The supplied app screenshots help infer create, customize, preview/share, premium and printing flows, but they are **not mandatory landing-page artwork** and are not used as hero/feature centerpiece visuals.

## Product argument
Audience hypothesis: freelancers, independent professionals, client-facing workers, and people who network across channels or languages.

Primary job:
> Exchange enough accurate contact information in the moment so the conversation can continue without manual retyping or recipient app friction.

Landing journey:
**Understand the value → see how sharing works → compare benefits → inspect a polished product concept → resolve questions → express early-access intent.**

Concept:
**Less exchanging. More connecting.**

Art direction:
**Clear · Personal · Effortless**

## Research synthesis
- **Linktree:** reinforces the “one destination, multiple channels” mental model.
- **WorldCard Mobile:** provides a useful contrast with OCR/card capture; InstaCard’s proposition is direct digital data rather than retyping/scanning.
- **Bizz Card:** included in the supplied competitor set; no unsupported feature claims are inferred where evidence was unavailable.
- **HiHello / Blinq:** additional references for recipient-friendly browser card, QR/link sharing, and save-contact outcomes.
- **21st.dev:** visual/layout inspiration only; no third-party source code or assets copied.

Research-derived ideas and product assumptions are explicitly treated as hypotheses where no user interview, analytics, or verified production evidence exists.

## Final composition contract
| Surface | User question | Final implementation | Mobile behavior |
|---|---|---|---|
| Header | Where am I and where can I go? | Original InstaCard logo, anchor nav, Early Access CTA | Compact nav with menu toggle |
| Hero | What is this and why should I care? | Brief headline/subheadline, Early Access field/CTA, **new editable digital identity + recipient preview + QR/link visual** | Copy/CTA first, marketing visual stacked below |
| Connection strip | How is it shared? | QR, link, save-contact cues | Vertical stack |
| How it works | What happens end to end? | Make → Share → Keep connection | Vertical steps |
| Benefits | Why is it better than paper/manual exchange? | All six brief benefits | Single-column cards |
| Your card | Can the product feel personal? | **New editable Card Builder + live preview concept**, not a legacy screenshot | Copy first, builder below |
| FAQ | What objections remain? | Static question/answer rows | Single column |
| Closing CTA | What should I do next? | Visual email field + Early Access CTA | Full width |

## Visual rationale
The legacy app screenshots are visually useful as product context but too implementation-specific to carry the marketing art direction. The final landing therefore translates the underlying product functions into a cleaner marketing system:

- **Hero:** branded digital identity on one side + recipient-facing contact preview on the other.
- **Share rail:** QR + one-link outcome makes the exchange model visible without a long explanation.
- **Card Builder:** converts customization from an abstract benefit into a tangible editable concept.
- **No decorative AI effects:** no glow-heavy gradients, fake glassmorphism, autoplay, or cinematic motion.
- **Product-specific density:** contact fields, channels, QR/share states, theme controls and card identity make the visuals feel like InstaCard rather than generic SaaS decoration.

## Foundation
- Page: white / light-neutral surfaces.
- Ink: `#142333`.
- Primary blue: `#1465D9`.
- Light brand surface: `#EAF4FF`.
- Borders: `#DDE5ED`.
- Typography: Bricolage Grotesque Bold for expressive headings; Instrument Sans for body/UI copy.
- Max content width: 1248px.
- Responsive implementation is CSS-based with desktop/tablet/mobile breakpoints.
- Motion is intentional and product-specific: slow hero/card float, an infinite sharing rail, scroll reveal/stagger, and restrained hover feedback. Full motion rules live in `docs/motion-direction.md`.

## Figma-conversion constraints
The final landing is optimized for HTML → Figma conversion:
- all marketing/product concept text remains real DOM text;
- hero, card builder, contact rows, chips, buttons and QR illustration are HTML/CSS/SVG;
- no PNG screenshots are embedded in `index.html`;
- the static layout avoids absolute/fixed/sticky positioning, gradients, canvas and iframe;
- CSS transforms/opacity are used only for motion enhancement, not to construct the base layout;
- `?figma=1` activates a static conversion mode that disables reveal, float, pulse and marquee transforms before capture;
- the InstaCard logo remains an SVG/vector asset;
- the six original screenshots stay available in `assets/` and `design-notes.html` as reference evidence only.

Expected conversion result:
**Frame → editable text / cards / controls / vectors**, with the logo as vector. No legacy app screenshot should flatten a major landing section into one bitmap.

## Copy and claim guardrails
- Preserve the requested hero message and CTA.
- Correct the brief typo to **“Effortless contact exchange.”**
- Include all six required benefits: Simple, Accurate, Multilingual, Integrated, Green, Customized.
- Do not use the unsupported “173 trees/day” claim.
- Google/Microsoft sync is described as planned, not verified current integration.
- Screenshot pricing is supplied context, not approved current pricing.
- No fabricated testimonials, customer counts, partner logos, conversion lifts, launch dates, or research statistics.
- Early Access fields are visual design elements only; no email is transmitted or stored.

## Interaction + motion scope
The brief does not require a functional prototype. Motion therefore supports hierarchy and product storytelling rather than introducing new flows:

- mobile menu open/close;
- anchor navigation;
- CamCard-inspired infinite sharing rail for QR / link / save-contact;
- BOVA-inspired staggered reveal for the 3-step “How it works” sequence;
- CloudCard-inspired low-amplitude card/preview float in hero and Card Builder;
- hover/focus lift on scannable cards/chips/buttons;
- one-time IntersectionObserver reveal for below-fold content.

Accessibility / conversion controls:
- `prefers-reduced-motion: reduce` disables continuous/reveal motion;
- `?figma=1` disables motion while preserving the exact final layout for HTML → Figma tools;
- content remains visible if JavaScript is unavailable.

FAQ rows and Early Access fields remain static presentation UI.

## Acceptance criteria
- Desktop 1440 and mobile 390 compositions render without horizontal overflow.
- Original InstaCard logo loads successfully.
- Hero, six benefits, Card Builder, FAQ, final CTA and footer are present.
- Landing contains **0 client screenshot PNGs**.
- Final desktop/mobile evidence is regenerated after the marketing-visual redesign.
- Documentation describes the current visual direction, not the earlier screenshot-led version.
- Default motion mode runs without runtime errors or horizontal overflow.
- Reduced-motion mode exposes the same content without continuous motion.
- `?figma=1` renders the final layout with animation disabled.
- Motion implementation adds no third-party animation runtime dependency.
