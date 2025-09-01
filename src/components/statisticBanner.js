export default function StatisticBanner() {
  const section = document.createElement('section');
  section.className = 'bg-slate-800/60 py-10';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <div class="card p-6 md:p-8">
        <div class="text-center mb-6">
          <p class="text-3xl font-bold">5,000+</p>
          <p class="text-sm text-gray-300">Traders trust FuzzFolio</p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 place-items-center">
          <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="3:1 logo"><span class="skeleton-label">3:1 logo</span></div>
          <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="3:1 logo"><span class="skeleton-label">3:1 logo</span></div>
          <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="3:1 logo"><span class="skeleton-label">3:1 logo</span></div>
          <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="3:1 logo"><span class="skeleton-label">3:1 logo</span></div>
        </div>
      </div>
    </div>
  `;
  return section;
}
