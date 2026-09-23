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

// Hero moment: the two supplied phone/hand visuals move toward one another
// while the stage is sticky. This is purely presentational and does not imply NFC.
const shell = document.querySelector('[data-hands-shell]');
const leftHand = document.querySelector('.hand--left');
const rightHand = document.querySelector('.hand--right');

if (shell && leftHand && rightHand) {
  const clamp = value => Math.min(1, Math.max(0, value));

  const setProgress = progress => {
    const p = clamp(progress);
    const compact = window.innerWidth <= 760;
    const start = compact ? 72 : 58;
    const leftX = -start + (start * p);
    const rightX = start - (start * p);
    const scale = (compact ? .9 : .88) + ((compact ? .1 : .12) * p);

    leftHand.style.transform = `translate3d(${leftX}%,0,0) scale(${scale})`;
    rightHand.style.transform = `translate3d(${rightX}%,0,0) scale(${scale})`;
  };

  if (isFigmaStatic || reduceMotion) {
    setProgress(1);
  } else {
    let ticking = false;

    const update = () => {
      ticking = false;
      const pinTop = window.innerWidth <= 760 ? 74 : 90;
      const shellTop = window.scrollY + shell.getBoundingClientRect().top;
      const travel = window.innerWidth <= 760 ? 430 : 560;
      const startY = shellTop - pinTop;
      setProgress((window.scrollY - startY) / travel);
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    setProgress(0);
    requestAnimationFrame(update);
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    window.addEventListener('pageshow', requestUpdate);
  }
}
