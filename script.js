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
// Primary path: GSAP ScrollTrigger with pin + scrub.
// Fallback path: native sticky + requestAnimationFrame if GSAP/CDN is unavailable.
const handsContainer = document.querySelector('.hands-container');

if (handsContainer) {
  const leftHand = handsContainer.querySelector('.left-hand');
  const rightHand = handsContainer.querySelector('.right-hand');
  const hero = handsContainer.closest('.hero-camcard');

  const setNativeProgress = progress => {
    const p = Math.min(1, Math.max(0, progress));
    const leftX = -100 + (100 * p);
    const rightX = 100 - (100 * p);
    if (leftHand) leftHand.style.transform = `translate3d(${leftX}%,0,0)`;
    if (rightHand) rightHand.style.transform = `translate3d(${rightX}%,0,0)`;
  };

  const showFinalPose = () => setNativeProgress(1);

  const setupNativeFallback = () => {
    if (!leftHand || !rightHand || !hero) return;

    hero.classList.add('native-hands-fallback');
    handsContainer.classList.add('native-hands-pin');
    setNativeProgress(0);

    let ticking = false;
    const update = () => {
      ticking = false;
      const compact = window.innerWidth <= 760;
      const pinTop = compact ? 74 : 90;
      const distance = compact ? 520 : 760;
      const startY = hero.offsetTop + handsContainer.offsetTop - pinTop;
      setNativeProgress((window.scrollY - startY) / distance);
    };
    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    requestUpdate();
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
        start: () => window.innerWidth <= 760 ? 'top top+=74' : 'top top+=90',
        end: () => '+=' + (window.innerWidth <= 760 ? 520 : 760),
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    handsTimeline
      .to(leftHand, { xPercent: 0, ease: 'none' }, 0)
      .to(rightHand, { xPercent: 0, ease: 'none' }, 0);

    window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
  } else if (isMotionEnhanced) {
    setupNativeFallback();
  } else {
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
