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

