// Presentation-only behaviors. No email is transmitted or persisted.
document.querySelectorAll('.signup').forEach(form => {
  const input = form.querySelector('input');
  const status = form.querySelector('.form-status');
  const statusId = input.id + '-status';
  status.id = statusId;
  input.setAttribute('aria-describedby', statusId);
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!input.validity.valid) {
      input.setAttribute('aria-invalid', 'true');
      status.textContent = 'Please enter a valid email address, such as you@example.com.';
      input.focus();
      return;
    }
    input.removeAttribute('aria-invalid');
    status.textContent = 'This is a design preview. Your email has not been sent or saved.';
  });
  input.addEventListener('input', () => { input.removeAttribute('aria-invalid'); status.textContent = ''; });
});
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu() { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); nav.classList.toggle('is-open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
