export default function Footer() {
  const section = document.createElement('footer');
  section.className = 'text-center py-8 text-gray-400 text-sm';
  section.innerHTML = `© <span id="year"></span> FuzzFolio`;
  const yearEl = section.querySelector('#year');
  yearEl.textContent = new Date().getFullYear();
  return section;
}
