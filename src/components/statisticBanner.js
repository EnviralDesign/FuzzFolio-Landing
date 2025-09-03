export default function StatisticBanner() {
  const section = document.createElement('section');
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="frame shadow-elevated p-6 sm:p-8 text-center bg-[radial-gradient(circle_at_100%_0%,rgba(236,72,153,0.15),transparent_70%),radial-gradient(circle_at_0%_100%,rgba(168,85,247,0.15),transparent_70%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
        <span class="kicker">Community</span>
        <p class="text-4xl md:text-5xl font-bold mt-2"><span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">5,000+</span></p>
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
