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

// Scroll-scrubbed "meet in the middle" hero hands.
// The hands scene becomes sticky so the movement is clearly visible while scrolling.
const handsStage = document.querySelector('[data-hands-stage]');

if (handsStage) {
  const handFromLeft = handsStage.querySelector('.hand-from-left');
  const handFromRight = handsStage.querySelector('.hand-from-right');

  const clamp = value => Math.min(1, Math.max(0, value));
  const easeOut = value => 1 - Math.pow(1 - value, 3);

  const setHandsPose = progress => {
    if (!handFromLeft || !handFromRight) return;

    const p = easeOut(clamp(progress));
    const compact = window.innerWidth <= 760;

    const leftStart = compact ? -64 : -38;
    const leftEnd = compact ? 4 : 18;
    const rightStart = compact ? 64 : 38;
    const rightEnd = compact ? -4 : -18;

    const startScale = compact ? 0.86 : 0.9;
    const endScale = compact ? 1 : 1.04;

    const leftX = leftStart + (leftEnd - leftStart) * p;
    const rightX = rightStart + (rightEnd - rightStart) * p;
    const scale = startScale + (endScale - startScale) * p;

    handFromLeft.style.transform = `translate3d(${leftX}%,0,0) scale(${scale})`;
    handFromRight.style.transform = `translate3d(${rightX}%,0,0) scale(${scale})`;
  };

  if (isMotionEnhanced) {
    let ticking = false;

    const updateHands = () => {
      ticking = false;

      const hero = handsStage.closest('.hero');
      if (!hero) return;

      const compact = window.innerWidth <= 760;
      const stickyTop = compact ? 74 : 76;

      // Static position of the stage inside the hero before sticky behavior takes over.
      const startY = hero.offsetTop + handsStage.offsetTop - stickyTop;
      const scrubDistance = compact
        ? Math.max(360, window.innerHeight * 0.48)
        : Math.max(460, window.innerHeight * 0.58);

      setHandsPose((window.scrollY - startY) / scrubDistance);
    };

    const requestHandsUpdate = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateHands);
    };

    window.addEventListener('scroll', requestHandsUpdate, { passive: true });
    window.addEventListener('resize', requestHandsUpdate);
    requestHandsUpdate();
  } else {
    setHandsPose(1);
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
