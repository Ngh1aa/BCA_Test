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
// Native implementation: no CDN/runtime dependency.
// The scene is driven directly by scroll position so dragging the page up/down
// visibly moves the hands apart/together. Only ?figma=1 disables this motion.
const handsContainer = document.querySelector('.hands-container');

if (handsContainer) {
  const leftHand = handsContainer.querySelector('.left-hand');
  const rightHand = handsContainer.querySelector('.right-hand');
  const hero = handsContainer.closest('.hero-camcard');
  const handsShell = document.querySelector('[data-hands-shell]');
  const isFigmaStatic = document.documentElement.classList.contains('figma-static');

  const clamp = value => Math.min(1, Math.max(0, value));

  const setProgress = progress => {
    const p = clamp(progress);
    const leftX = -100 + (100 * p);
    const rightX = 100 - (100 * p);

    if (leftHand) leftHand.style.transform = `translate3d(${leftX}%,0,0)`;
    if (rightHand) rightHand.style.transform = `translate3d(${rightX}%,0,0)`;
  };

  if (leftHand && rightHand && hero && handsShell && !isFigmaStatic) {
    hero.classList.add('hands-scroll-active');
    handsContainer.classList.add('hands-native-pin');

    let ticking = false;

    const updateHands = () => {
      ticking = false;

      const compact = window.innerWidth <= 760;
      const pinTop = compact ? 74 : 90;
      const travel = compact ? 520 : 760;

      const shellTop = window.scrollY + handsShell.getBoundingClientRect().top;
      const startY = shellTop - pinTop;
      const progress = (window.scrollY - startY) / travel;

      setProgress(progress);
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateHands);
    };

    // Force the true start pose immediately before any scroll occurs.
    setProgress(0);
    requestAnimationFrame(updateHands);

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    window.addEventListener('pageshow', requestUpdate);
  } else {
    // Static export state.
    setProgress(1);
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
