# InstaCard — Motion Direction

## Goal
Use motion to make the landing feel like a modern digital-card product without turning the BCA test into an animation showcase.

The implementation recreates **motion patterns**, not competitor source code.

## Reference synthesis

### CamCard → sharing rail + feature-card motion
CamCard gives “Unlimited card sharing” its own section and repeats multiple sharing options such as QR code, email/SMS and WhatsApp. That content pattern supports an always-moving sharing rail for InstaCard.

Adaptation:
- InstaCard keeps only brief-supported sharing outcomes: QR code, one link and save-to-contacts.
- The rail loops horizontally as supporting motion.
- The same facts remain available elsewhere on the page, so the marquee is not the only source of important information.

Reference:
- https://www.camcard.com/

### BOVAcard → staggered How It Works reveal
BOVAcard uses a three-step homepage story: Create Your Profile → Add Your Information → Share and Connect.

Adaptation:
- InstaCard keeps its own three-step flow: Make it yours → Share in the moment → Keep the connection.
- Steps reveal sequentially as they enter the viewport.
- The animation reinforces order; it does not change the flow content.

Reference:
- https://bovacard.com/en

### CloudCard → floating card choreography
CloudCard places digital-business-card and sharing outcomes near the top of the homepage and explicitly frames sharing through QR, personalised link, email/text and wallet surfaces.

Adaptation:
- InstaCard hero cards float with opposing low-amplitude vertical motion.
- The QR/share rail remains visually anchored.
- No Wallet/NFC capability is invented for InstaCard.

Reference:
- https://cloudcard.digital/

### 21st.dev → implementation pattern reference
21st.dev was used only to benchmark common patterns such as:
- marquee / infinite rail;
- stacking/floating cards;
- scroll-triggered reveal.

No React component or third-party source code was copied into this static HTML/CSS/JS project.

References:
- https://21st.dev/community/components/explore/react-marquee
- https://21st.dev/community/components/explore/card-animation-react
- https://21st.dev/community/components/explore/scroll-animation-component

## Motion map

| InstaCard surface | Motion | Purpose |
|---|---|---|
| Hero copy | fade + rise | establish hierarchy on entry |
| Hero identity card | slow float | give the digital identity object presence |
| Recipient preview | inverse slow float | create a subtle two-object conversation |
| Ready state | soft pulse | signal connection readiness |
| Sharing strip | infinite horizontal marquee | communicate “share your way” continuously |
| How it works | 90ms staggered reveal | make the 3-step sequence legible |
| Benefits | staggered reveal + hover lift | improve scan rhythm without hiding content |
| Card Builder | reveal + preview float | imply live customization |
| FAQ / Closing CTA | simple reveal | maintain rhythm without excessive effects |

## Motion tokens

- Reveal duration: **640ms**
- Reveal easing: **cubic-bezier(.22, 1, .36, 1)**
- Step stagger: **90ms**
- Benefit stagger: **80ms**
- Hero float: **5.8s / 6.4s**
- Preview float: **6.2s**
- Sharing marquee: **26s linear infinite**
- Hover response: **180ms**
- Float amplitude: **6–7px**

## Accessibility and control

### Reduced motion
When `prefers-reduced-motion: reduce` is active:
- reveal transitions are removed;
- continuous marquee stops;
- floating cards stop;
- pulse stops;
- core content stays visible.

### Figma conversion mode
Use:

`?figma=1`

Example:

`https://ngh1aa.github.io/BCA_Test/?figma=1`

This adds `figma-static` to the document root and disables reveal/floating/marquee motion while keeping the exact final layout visible. This prevents HTML → Figma tools from capturing an in-between animation frame.

## Performance rules
- No GSAP, Motion, Framer Motion or animation runtime dependency.
- CSS transforms/opacity are used for compositor-friendly motion.
- IntersectionObserver triggers reveal only once, then unobserves the element.
- No canvas/WebGL/video background.
- Marquee pauses on pointer hover/focus-within.
- Content remains visible without JavaScript.

## Do / Do not

### Do
- use motion to explain sharing, sequence and live identity;
- keep continuous motion slow;
- keep amplitudes small;
- use one motion language across the page;
- preserve readable static states.

### Do not
- add particle/shader backgrounds;
- add 3D perspective just for spectacle;
- animate every piece of text independently;
- add NFC/Wallet animations that imply unsupported InstaCard features;
- make conversion to Figma depend on stopping animation manually.
