export default function StatisticBanner() {
  const section = document.createElement('section');
  section.className = 'bg-slate-800 py-10';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
      <div class="text-center md:text-left">
        <p class="text-3xl font-bold">5,000+</p>
        <p class="text-sm text-gray-300">Traders trust FuzzFolio</p>
      </div>
      <div class="flex gap-6 overflow-x-auto">
        <div class="w-28 aspect-[3/1] skeleton" role="img" aria-label="Partner logo placeholder"><span class="skeleton-label">3:1 logo</span></div>
        <div class="w-28 aspect-[3/1] skeleton" role="img" aria-label="Partner logo placeholder"><span class="skeleton-label">3:1 logo</span></div>
        <div class="w-28 aspect-[3/1] skeleton" role="img" aria-label="Partner logo placeholder"><span class="skeleton-label">3:1 logo</span></div>
        <div class="w-28 aspect-[3/1] skeleton" role="img" aria-label="Partner logo placeholder"><span class="skeleton-label">3:1 logo</span></div>
      </div>
    </div>
  `;
  return section;
}
