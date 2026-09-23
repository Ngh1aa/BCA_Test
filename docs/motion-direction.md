# InstaCard — Motion Direction

## Goal
Use motion to support the digital exchange story without turning the BCA test into an animation showcase.

Art direction:
**Clear · Personal · Effortless**

## Primary hero moment
The supplied two hand/phone renders are the one dominant motion moment.

Behavior:
- the left and right phone/hand visuals begin farther apart;
- while the hero stage is in view, scrolling moves both toward the center;
- the motion visually reinforces “exchange contact information in the moment”;
- no NFC, Wallet or scanner capability is stated or implied by copy.

Implementation — restored from the previous local build:
- GSAP 3.12.2 + ScrollTrigger;
- trigger: `#camcard-hands-stage`;
- start: `top 85%`;
- end: `bottom 45%`;
- scrub: `1.2`;
- left hand: `xPercent: 50`, rotation → 0;
- right hand: `xPercent: -50`, rotation → 0;
- both hand movements run together;
- the final contact-exchanged badge appears as the hands converge.

## 21st.dev pattern adaptation
21st.dev is used as a visual-pattern benchmark only:
- **masked marquee / infinite rail** → Share your way channel strip;
- **card depth / stack language** → customization/product composition;
- **selective reveal** → only key headings, not every element.

No 21st.dev component source code or assets are copied.

## Motion map
| Surface | Motion | Purpose |
|---|---|---|
| Hero hands | scroll convergence | make the exchange moment tangible |
| Share your way | slow horizontal marquee | reinforce supported channels |
| Key section headings | one-time rise/fade | support reading rhythm |
| Benefit cards/buttons | restrained hover lift | interaction feedback |

## Accessibility / Figma
When `prefers-reduced-motion: reduce` is active:
- hand movement resolves to the static final pose;
- marquee stops;
- reveal transitions are removed.

For HTML → Figma use:
- `/?figma=1`

Figma-static mode:
- disables marquee/reveal/hand motion;
- preserves the final layout;
- keeps marketing text editable as DOM text where the converter supports it.

## Rules
Do:
- keep one motion signature;
- use motion to explain exchange/sharing;
- keep hover feedback short;
- preserve readable static states.

Do not:
- add fake customer proof;
- use motion to imply NFC/Wallet/OCR;
- add particles/shaders/cinematic effects;
- animate every card or text fragment.
