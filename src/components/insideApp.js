export default function InsideApp() {
  const section = document.createElement('section');
  section.id = 'inside';
  section.className = 'section py-20 md:py-24';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 class="text-5xl md:text-6xl font-bold tracking-tight text-center">Inside the <span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">app</span></h2>

      <div class="mt-10 grid grid-cols-12 gap-6 md:gap-8">
        <!-- Top row: one big full-width dashboard -->
        <figure class="relative col-span-12 rounded-2xl overflow-hidden border border-white/10 bg-slate-800/40 shadow-md">
          <div class="skeleton aspect-[16/9]" role="img" aria-label="Dashboard preview">
            <span class="skeleton-label">dashboard</span>
          </div>
          <figcaption class="px-3 py-2 text-sm text-white/70">1. Ranked tiles — instrument × profile; one score + short history.</figcaption>
          <span class="absolute top-4 left-4 text-[11px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10">DASHBOARD</span>
          <span class="absolute top-4 right-4 text-[11px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10">Simulated data</span>
        </figure>

        <!-- Bottom row: two halves -->
        <figure class="relative col-span-12 lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 bg-slate-800/40 shadow-md">
          <div class="skeleton aspect-[16/10]" role="img" aria-label="Profile builder">
            <span class="skeleton-label">builder</span>
          </div>
          <figcaption class="px-3 py-2 text-sm text-white/70">Builder — indicators, fuzzy rules, weights.</figcaption>
          <span class="absolute top-4 left-4 text-[11px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10">BUILDER</span>
        </figure>

        <figure class="relative col-span-12 lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 bg-slate-800/40 shadow-md">
          <div class="skeleton aspect-[16/10]" role="img" aria-label="Backtesting">
            <span class="skeleton-label">backtest</span>
          </div>
          <figcaption class="px-3 py-2 text-sm text-white/70">Backtesting — run while editing; compare variants fast.</figcaption>
          <span class="absolute top-4 left-4 text-[11px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10">BACKTESTING</span>
        </figure>
      </div>
    </div>
  `;
  return section;
}
