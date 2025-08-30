const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
