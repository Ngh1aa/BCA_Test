# InstaCard — Motion Direction

## Goal
Use motion to make the landing feel like a real digital-card exchange, not an animation showcase.

The implementation recreates **motion patterns** from the research/reference set. No competitor JavaScript or component source is copied into the project.

## Hero signature — scroll-scrubbed “Meet in the Middle”

The final hero uses the two transparent hand/phone renders supplied for the design exercise.

Interaction:
- the contact-profile phone enters from the left;
- the QR/share phone enters from the right;
- both move toward the center as the user scrolls;
- a small **Connection made** state appears as the two sides converge.

Product meaning:

**Show your card → Scan / open → Save contact**

This is intentionally more product-specific than the previous generic floating-card composition because the motion demonstrates the core exchange moment.

### Implementation
The reference snippet used GSAP ScrollTrigger. The final project recreates the same scroll-scrub behavior with:
- native `scroll` events;
- `requestAnimationFrame` throttling;
- percentage-based `translate3d()` transforms;
- a clamped 0→1 progress value;
- a small ease-out curve.

No GSAP, Framer Motion, Motion, WebGL or animation runtime is shipped.

Desktop progress is tied to the first portion of the hero scroll. Mobile progress is tied to the hand stage entering the viewport so the motion does not run while the visual is still off-screen.

## Other reference synthesis

### CamCard → sharing rail
CamCard gives card sharing its own prominent content block and presents multiple sharing methods.

InstaCard adaptation:
- keep only brief-supported outcomes: QR code, one link and save-to-contacts;
- loop the three methods in a slow horizontal marquee;
- keep the same information elsewhere so the marquee is supporting motion, not the only source of content.

### BOVAcard → How It Works sequence
BOVAcard communicates the product with a short multi-step story.

InstaCard adaptation:
- **Make it yours → Share in the moment → Keep the connection**;
- reveal the three steps sequentially when they enter the viewport;
- motion reinforces order without changing the flow.

### CloudCard → continuous product movement
CloudCard uses continuous product/card movement to make a static digital-card concept feel tangible.

InstaCard adaptation:
- keep continuous motion restrained;
- use the strongest continuous motion only for the sharing rail and the Card Builder preview;
- do not invent NFC, Apple Wallet or Google Wallet capabilities.

### 21st.dev → pattern benchmark
21st.dev was used only to benchmark implementation patterns such as:
- marquee / infinite rail;
- scroll reveal;
- lightweight card motion.

No third-party React component was copied.

## Motion map

| Surface | Motion | Purpose |
|---|---|---|
| Hero copy | fade + rise | establish entry hierarchy |
| Hero hands | **scroll-scrubbed convergence** | demonstrate the exchange moment |
| Connection state | opacity + scale tied to hero progress | communicate successful connection |
| Sharing strip | infinite horizontal marquee | reinforce “share your way” |
| How it works | 90ms staggered reveal | clarify sequence |
| Benefits | reveal + hover lift | improve scan rhythm |
| Card Builder preview | low-amplitude float | imply live customization |
| FAQ / Closing CTA | simple reveal | maintain page rhythm |

## Motion tokens

- Reveal: **640ms**
- Reveal easing: **cubic-bezier(.22, 1, .36, 1)**
- Step stagger: **90ms**
- Benefit stagger: **80ms**
- Sharing marquee: **26s linear infinite**
- Card Builder float: **6.2s**
- Hover response: **180ms**
- Hero convergence:
  - desktop roughly **-52% / +52% → -8% / +8%**
  - mobile roughly **-50% / +50% → -6% / +6%**
  - scale roughly **0.88/0.90 → 1/0.98**
- Connection state appears during the final ~42% of convergence.

## Accessibility and conversion controls

### Reduced motion
When `prefers-reduced-motion: reduce` is active:
- hero hands render directly in the final connected pose;
- sharing marquee stops;
- scroll reveals are removed;
- Card Builder float stops;
- all content remains visible.

### Figma conversion mode
Use:

`https://ngh1aa.github.io/BCA_Test/?figma=1`

The `figma-static` mode:
- freezes the hands in the connected pose;
- shows **Connection made**;
- stops marquee/float/reveal motion;
- preserves the exact final page composition.

The two hand/phone renders are intentionally raster image layers in Figma. Surrounding hero copy, labels, CTA, layout, benefits and Card Builder remain normal HTML/CSS/SVG structure.

## Performance rules
- no animation framework/runtime dependency;
- scroll work is throttled with `requestAnimationFrame`;
- transforms are used instead of layout-changing left/right animation;
- IntersectionObserver reveals each below-fold block only once;
- no canvas/WebGL/video background;
- marquee pauses on hover/focus;
- core content still exists without JavaScript.

## Do / Do not

### Do
- use movement to explain connection;
- keep hand convergence controlled and legible;
- keep continuous motion slow;
- preserve a strong static pose for screenshots/Figma;
- respect reduced motion.

### Do not
- add particle/shader effects;
- add unrelated 3D motion;
- animate every text fragment;
- imply unsupported Wallet/NFC features;
- require a converter/reviewer to manually stop animation.
