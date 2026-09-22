// Progressive enhancement only: core content stays visible and usable without JavaScript.
const root = document.documentElement;
const isMotionEnhanced = root.classList.contains('motion-enhanced') && !root.classList.contains('figma-static');

// Competitor-inspired scroll reveal:
// BOVA-style step sequencing + CamCard-style feature entrances, recreated from scratch.
if (isMotionEnhanced) {
  const revealElements = [...document.querySelectorAll('[data-reveal]')];

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.14,
      rootMargin: '0px 0px -8% 0px'
    });

    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add('is-visible'));
  }
} else {
  document.querySelectorAll('[data-reveal]').forEach(element => element.classList.add('is-visible'));
}

// Scroll-scrubbed “meet in the middle” hero hands.
// Exact behavior requested:
// left hand  xPercent: -100 -> 0
// right hand xPercent:  100 -> 0
// both move at the same time with scrub: 1.
const handsContainer = document.querySelector('.hands-container');

if (handsContainer) {
  const leftHand = handsContainer.querySelector('.left-hand');
  const rightHand = handsContainer.querySelector('.right-hand');

  const showFinalPose = () => {
    if (leftHand) leftHand.style.transform = 'translate3d(0,0,0)';
    if (rightHand) rightHand.style.transform = 'translate3d(0,0,0)';
  };

  if (
    isMotionEnhanced &&
    window.gsap &&
    window.ScrollTrigger &&
    leftHand &&
    rightHand
  ) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(leftHand, { xPercent: -100 });
    gsap.set(rightHand, { xPercent: 100 });

    const handsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: handsContainer,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    handsTimeline
      .to(leftHand, {
        xPercent: 0,
        ease: 'power2.out'
      })
      .to(rightHand, {
        xPercent: 0,
        ease: 'power2.out'
      }, '<');

    window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
  } else {
    // Figma mode, reduced-motion mode, or CDN failure: show the clean final composition.
    showFinalPose();
  }
}

// Mobile navigation.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

if (toggle && nav) {
  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
}
