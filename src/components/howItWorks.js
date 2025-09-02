export default function HowItWorks() {
  const section = document.createElement('section');
  section.id = 'how';
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <h2 class="section-title">How it works</h2>
      <div class="relative grid md:grid-cols-3 gap-x-8 gap-y-8 md:before:content-[''] md:before:absolute md:before:top-6 md:before:left-[10%] md:before:right-[10%] md:before:h-px md:before:bg-white/10">
        <div class="card text-center relative z-10">
          <div class="w-12 h-12 skeleton rounded-full mx-auto mb-4" role="img" aria-label="Icon placeholder"><span class="skeleton-label">Icon</span></div>
          <h3 class="text-2xl font-semibold mb-2">Create a profile</h3>
          <p class="text-base sm:text-lg leading-relaxed text-white/80">Use your preferred indicators.</p>
        </div>
        <div class="card text-center relative z-10">
          <div class="w-12 h-12 skeleton rounded-full mx-auto mb-4" role="img" aria-label="Icon placeholder"><span class="skeleton-label">Icon</span></div>
          <h3 class="text-2xl font-semibold mb-2">Backtest</h3>
          <p class="text-base sm:text-lg leading-relaxed text-white/80">Iterate quickly on weights.</p>
        </div>
        <div class="card text-center relative z-10">
          <div class="w-12 h-12 skeleton rounded-full mx-auto mb-4" role="img" aria-label="Icon placeholder"><span class="skeleton-label">Icon</span></div>
          <h3 class="text-2xl font-semibold mb-2">Go live</h3>
          <p class="text-base sm:text-lg leading-relaxed text-white/80">Receive real-time alerts.</p>
        </div>
      </div>
    </div>
  `;
  return section;
}
