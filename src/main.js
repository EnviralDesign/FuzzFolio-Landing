import './styles.css';

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

// Highlight nav links on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a[href^="#"]');

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.nav a[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (link) link.classList.add('active');
      }
    });
  },
  { rootMargin: '-50% 0px -50% 0px' }
);

sections.forEach(section => sectionObserver.observe(section));

// Prevent hero cards from staying shifted when clicked
document.querySelectorAll('.signal-card').forEach(card => {
  card.addEventListener('click', () => card.blur());
});
