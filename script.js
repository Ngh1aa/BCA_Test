const root = document.documentElement;
const isFigmaStatic = root.classList.contains('figma-static');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

if (menuToggle && mobileNav) {
  const closeMenu = () => {
    mobileNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  };

  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    mobileNav.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
      menuToggle.focus();
    }
  });
}

// Early-access forms are prototype UI only: validate locally, never transmit data.
document.querySelectorAll('[data-early-form]').forEach(form => {
  const input = form.querySelector('input[type="email"]');
  const status = form.parentElement.querySelector('[data-form-status]');

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!input || !status) return;

    const valid = input.value.trim() !== '' && input.checkValidity();

    if (!valid) {
      status.textContent = 'Enter a valid email address to continue.';
      input.setAttribute('aria-invalid', 'true');
      input.focus();
      return;
    }

    input.removeAttribute('aria-invalid');
    status.textContent = 'Looks good — this design-test prototype does not send or store your email.';
  });
});

// Selective reveal only. Core content is still visible if IntersectionObserver is unavailable.
const revealItems = [...document.querySelectorAll('.reveal-once')];

if (!isFigmaStatic && !reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.16,
    rootMargin: '0px 0px -8% 0px'
  });

  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

// Continuous social-channel marquee.
// Uses requestAnimationFrame so the rail keeps moving even on systems that
// report reduced-motion. Figma capture mode remains intentionally static.
function initChannelMarquee() {
  if (isFigmaStatic) return;

  const rail = document.querySelector('.channel-rail');
  const track = rail?.querySelector('.channel-track');
  const firstGroup = track?.querySelector('.channel-group');

  if (!rail || !track || !firstGroup) return;

  track.classList.add('is-js-marquee');

  const SPEED = 58; // pixels per second
  let loopWidth = 0;
  let offset = 0;
  let lastTime = performance.now();
  let frameId = 0;

  // A seamless marquee needs enough repeated groups to cover the viewport
  // plus one complete group waiting beyond the right edge. Two copies are
  // not enough on wide desktop screens, which caused the visible empty gap.
  const ensureCoverage = () => {
    const trackStyle = getComputedStyle(track);
    const gap = parseFloat(trackStyle.columnGap || trackStyle.gap || '0') || 0;
    const groupWidth = firstGroup.getBoundingClientRect().width;

    if (groupWidth <= 0) return;

    loopWidth = groupWidth + gap;

    const minimumTrackWidth = rail.clientWidth + loopWidth * 2;
    let safety = 0;

    while (track.scrollWidth < minimumTrackWidth && safety < 12) {
      const clone = firstGroup.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.dataset.marqueeClone = 'true';
      track.appendChild(clone);
      safety += 1;
    }

    offset = -((-offset) % loopWidth);
    track.style.transform = `translate3d(${offset}px,0,0)`;
  };

  const tick = now => {
    const delta = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    if (!document.hidden && loopWidth > 0) {
      offset -= SPEED * delta;

      if (-offset >= loopWidth) {
        // Jump forward exactly one duplicated group. Because every group is
        // identical, the visual position is unchanged and the loop is seamless.
        offset += loopWidth;
      }

      track.style.transform = `translate3d(${offset}px,0,0)`;
    }

    frameId = requestAnimationFrame(tick);
  };

  ensureCoverage();

  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver(ensureCoverage);
    resizeObserver.observe(rail);
    resizeObserver.observe(firstGroup);
  } else {
    window.addEventListener('resize', ensureCoverage, { passive: true });
  }

  if (document.fonts?.ready) {
    document.fonts.ready.then(ensureCoverage).catch(() => {});
  }

  document.addEventListener('visibilitychange', () => {
    lastTime = performance.now();
  });

  frameId = requestAnimationFrame(tick);

  window.addEventListener('pagehide', () => {
    cancelAnimationFrame(frameId);
  }, { once: true });
}

initChannelMarquee();


// Restored previous two-hand GSAP ScrollTrigger interaction.
function initCamCardHandsScroll() {
  const heroStage = document.getElementById('camcard-hands-stage');
  if (!heroStage) return;

  const isFigmaStatic = document.documentElement.classList.contains('figma-static');

  if (isFigmaStatic) {
    const left = document.querySelector('.camcard-hand--left');
    const right = document.querySelector('.camcard-hand--right');
    const badge = document.getElementById('camcard-connect-badge');
    if (left) left.style.transform = 'translateX(50%) rotate(0deg)';
    if (right) right.style.transform = 'translateX(-50%) rotate(0deg)';
    if (badge) {
      badge.style.opacity = '1';
      badge.style.transform = 'translate(-50%, -50%) scale(1)';
    }
    return;
  }

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroStage,
      start: 'top 85%',
      end: 'bottom 45%',
      scrub: 1.2
    }
  });

  tl.to('.camcard-hand--left', {
    xPercent: 50,
    rotation: 0,
    ease: 'power2.out'
  });

  tl.to('.camcard-hand--right', {
    xPercent: -50,
    rotation: 0,
    ease: 'power2.out'
  }, '<');

  tl.to('#camcard-connect-badge', {
    opacity: 1,
    scale: 1,
    duration: 0.35,
    ease: 'back.out(1.7)'
  }, '-=0.25');
}

initCamCardHandsScroll();

