export default function WhyChips() {
  const section = document.createElement('section');
  section.className = 'section py-10';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="frame frame-glow shadow-elevated p-6 sm:p-8 bg-[radial-gradient(circle_at_100%_0%,rgba(236,72,153,0.15),transparent_70%),radial-gradient(circle_at_0%_100%,rgba(168,85,247,0.15),transparent_70%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
        <h2 class="section-title mt-2">Why it <span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">works</span></h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-8">
          <!-- Live ranking dashboard -->
          <article class="p-6 rounded-2xl border border-white/10 bg-slate-800/50 shadow text-center">
            <div class="w-16 aspect-square skeleton rounded mx-auto mb-4" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
            <h3 class="text-2xl font-semibold mb-2">Live ranking dashboard</h3>
            <p class="text-base sm:text-lg leading-relaxed text-white/80">Your watchlist auto-sorted by a single score per instrument × profile.</p>
          </article>

          <!-- Custom scoring profiles -->
          <article class="p-6 rounded-2xl border border-white/10 bg-slate-800/50 shadow text-center">
            <div class="w-16 aspect-square skeleton rounded mx-auto mb-4" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
            <h3 class="text-2xl font-semibold mb-2">Custom scoring profiles</h3>
            <p class="text-base sm:text-lg leading-relaxed text-white/80">Combine indicators with fuzzy rules and weights into one timeframe-agnostic score.</p>
          </article>

          <!-- Backtesting in the builder -->
          <article class="p-6 rounded-2xl border border-white/10 bg-slate-800/50 shadow text-center">
            <div class="w-16 aspect-square skeleton rounded mx-auto mb-4" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
            <h3 class="text-2xl font-semibold mb-2">Backtesting in the builder</h3>
            <p class="text-base sm:text-lg leading-relaxed text-white/80">Validate profile behavior while you edit. Iterate in minutes.</p>
          </article>
        </div>
      </div>
    </div>
  `;
  return section;
}
