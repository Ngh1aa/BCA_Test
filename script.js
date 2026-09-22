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
// Recreates the supplied GSAP/ScrollTrigger behavior with native requestAnimationFrame
// so the landing keeps zero animation-runtime dependencies.
const handsStage = document.querySelector('[data-hands-stage]');

if (handsStage) {
  const handFromLeft = handsStage.querySelector('.hand-from-left');
  const handFromRight = handsStage.querySelector('.hand-from-right');
  const signal = handsStage.querySelector('.hands-signal');

  const clamp = value => Math.min(1, Math.max(0, value));
  const easeOut = value => 1 - Math.pow(1 - value, 2);

  const setHandsPose = progress => {
    if (!handFromLeft || !handFromRight || !signal) return;

    const p = clamp(progress);
    const eased = easeOut(p);
    const compact = window.innerWidth <= 760;

    const leftStart = compact ? -50 : -52;
    const leftEnd = compact ? -6 : -8;
    const rightStart = compact ? 50 : 52;
    const rightEnd = compact ? 6 : 8;

    const leftX = leftStart + (leftEnd - leftStart) * eased;
    const rightX = rightStart + (rightEnd - rightStart) * eased;
    const startScale = compact ? 0.9 : 0.88;
    const endScale = compact ? 0.98 : 1;
    const scale = startScale + (endScale - startScale) * eased;

    handFromLeft.style.transform = `translate3d(${leftX}%, 0, 0) scale(${scale})`;
    handFromRight.style.transform = `translate3d(${rightX}%, 0, 0) scale(${scale})`;

    const signalProgress = clamp((eased - 0.58) / 0.42);
    signal.style.opacity = String(signalProgress);
    signal.style.transform = `translate(-50%, -50%) scale(${0.88 + signalProgress * 0.12})`;
  };

  if (isMotionEnhanced) {
    let ticking = false;

    const updateHands = () => {
      ticking = false;

      if (window.innerWidth <= 760) {
        const rect = handsStage.getBoundingClientRect();
        const start = window.innerHeight * 0.92;
        const end = window.innerHeight * 0.28;
        setHandsPose((start - rect.top) / (start - end));
        return;
      }

      const hero = handsStage.closest('.hero');
      const headerOffset = 88;
      const start = Math.max(0, (hero?.offsetTop || 0) - headerOffset);
      const range = Math.min(560, Math.max(360, (hero?.offsetHeight || 720) * 0.68));
      setHandsPose((window.scrollY - start) / range);
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
