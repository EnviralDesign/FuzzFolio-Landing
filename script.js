const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
