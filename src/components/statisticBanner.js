export default function StatisticBanner() {
  const section = document.createElement('section');
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <div class="frame frame-glow p-6 sm:p-8 text-center">
        <p class="text-3xl font-bold">5,000+</p>
        <p class="text-sm text-gray-300 mb-6">Traders trust FuzzFolio</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 place-items-center">
          <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="Logo placeholder"><span class="skeleton-label">3:1</span></div>
          <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="Logo placeholder"><span class="skeleton-label">3:1</span></div>
          <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="Logo placeholder"><span class="skeleton-label">3:1</span></div>
          <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="Logo placeholder"><span class="skeleton-label">3:1</span></div>
        </div>
      </div>
    </div>
  `;
  return section;
}
