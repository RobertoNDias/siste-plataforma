// Mobile menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if (hamburger && nav) {
  const setState = () => {
    const opened = nav.classList.contains('open');
    hamburger.setAttribute('aria-expanded', opened ? 'true' : 'false');
    hamburger.setAttribute('aria-label', opened ? 'Fechar menu' : 'Abrir menu');
  };
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    setState();
  });
  setState();
}

// Theme toggle (light/dark) with persistence
const toggleBtn = document.getElementById('themeToggle');
const THEME_KEY = 'theme';

function applyTheme(theme) {
  const html = document.documentElement;
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (theme === 'light') {
    html.classList.add('theme-light');
    if (metaTheme) metaTheme.setAttribute('content', '#ffffff');
    if (toggleBtn) {
      toggleBtn.textContent = '🌙';
      toggleBtn.setAttribute('aria-label', 'Alternar para modo escuro');
    }
  } else {
    html.classList.remove('theme-light');
    if (metaTheme) metaTheme.setAttribute('content', '#0b1220');
    if (toggleBtn) {
      toggleBtn.textContent = '☀️';
      toggleBtn.setAttribute('aria-label', 'Alternar para modo claro');
    }
  }
}

let themePref = localStorage.getItem(THEME_KEY);
if (!themePref) {
  themePref = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}
applyTheme(themePref);

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    themePref = themePref === 'light' ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, themePref);
    applyTheme(themePref);
  });
}

// Simple testimonials carousel
const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * (track.clientWidth)}px)`;
}

function slide(direction) {
  const total = track.children.length;
  index = (index + direction + total) % total;
  // Scroll to the selected card
  const cardWidth = track.children[0].getBoundingClientRect().width + 18; // include gap
  track.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
}

if (prevBtn && nextBtn && track) {
  prevBtn.addEventListener('click', () => slide(-1));
  nextBtn.addEventListener('click', () => slide(1));
}

// Auto rotate every 5s
let auto = setInterval(() => slide(1), 5000);
if (track) {
  track.addEventListener('mouseenter', () => clearInterval(auto));
  track.addEventListener('mouseleave', () => (auto = setInterval(() => slide(1), 5000)));
}

// Popup contact logic (Elementor-like)
(function () {
  const modal = document.getElementById('popup-contact');
  if (!modal) return;

  const openers = Array.from(document.querySelectorAll('.cta-popup, .btn-cta'));
  const closeBtn = modal.querySelector('.modal__close');

  function openPopup() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closePopup() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  // Expose globally for inline handlers if needed
  window.openPopup = openPopup;
  window.closePopup = closePopup;

  openers.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openPopup();
    });
  });

  closeBtn && closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closePopup();
  });

  // Close on overlay click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closePopup();
  });

  // Escape key closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePopup();
  });

  // Simple form handler
  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closePopup();
    alert('Mensagem enviada! Em breve entraremos em contato.');
  });
})();
