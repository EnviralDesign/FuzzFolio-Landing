export default function Footer() {
  const section = document.createElement('footer');
  section.className = 'text-center py-8 text-gray-400 text-sm';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <div class="flex justify-center gap-4 mb-2">
        <a href="#" class="hover:text-purple-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500/40">Privacy</a>
        <a href="#" class="hover:text-purple-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500/40">Terms</a>
        <a href="#" class="hover:text-purple-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500/40">Contact</a>
      </div>
      © <span id="year"></span> FuzzFolio
    </div>`;
  const yearEl = section.querySelector('#year');
  yearEl.textContent = new Date().getFullYear();
  return section;
}
