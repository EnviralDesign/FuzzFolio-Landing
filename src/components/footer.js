export default function Footer() {
  const section = document.createElement('footer');
  section.className = 'text-center py-8 text-gray-400 text-sm';
  section.innerHTML = `
    <div class="flex justify-center gap-4 mb-2">
      <a href="#" class="hover:text-purple-400">Privacy</a>
      <a href="#" class="hover:text-purple-400">Terms</a>
      <a href="#" class="hover:text-purple-400">Contact</a>
    </div>
    © <span id="year"></span> FuzzFolio`;
  const yearEl = section.querySelector('#year');
  yearEl.textContent = new Date().getFullYear();
  return section;
}
