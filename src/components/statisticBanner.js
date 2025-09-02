export default function StatisticBanner() {
  const section = document.createElement('section');
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <div class="frame border-gradient card-bg-gradient shadow-elevated p-6 sm:p-8 text-center">
        <span class="kicker">Community</span>
        <p class="text-3xl font-bold mt-2"><span class="heading-gradient">5,000+</span></p>
        <p class="text-sm text-gray-300 mb-6">Traders trust FuzzFolio</p>
        <div class="relative overflow-hidden edge-fade">
          <div class="logo-ticker flex gap-8 items-center w-max">
            <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="Logo placeholder"><span class="skeleton-label">3:1</span></div>
            <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="Logo placeholder"><span class="skeleton-label">3:1</span></div>
            <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="Logo placeholder"><span class="skeleton-label">3:1</span></div>
            <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="Logo placeholder"><span class="skeleton-label">3:1</span></div>
            <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="Logo placeholder"><span class="skeleton-label">3:1</span></div>
            <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="Logo placeholder"><span class="skeleton-label">3:1</span></div>
            <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="Logo placeholder"><span class="skeleton-label">3:1</span></div>
            <div class="w-28 sm:w-32 aspect-[3/1] skeleton" role="img" aria-label="Logo placeholder"><span class="skeleton-label">3:1</span></div>
          </div>
        </div>
      </div>
    </div>
  `;
  const ticker = section.querySelector('.logo-ticker');
  ticker.innerHTML += ticker.innerHTML;
  return section;
}
