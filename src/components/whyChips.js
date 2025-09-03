export default function WhyChips() {
  const section = document.createElement('section');
  section.className = 'section py-14';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 class="text-5xl md:text-6xl font-bold tracking-tight text-center">Why it <span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">works</span></h2>

      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <!-- Live ranking dashboard -->
        <article class="relative p-6 rounded-2xl bg-white/[0.05] border border-white/10 text-center transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus-within:shadow-lg focus-within:ring-2 focus-within:ring-purple-500/40">
          <div class="w-8 h-8 skeleton rounded mx-auto mb-4" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
          <h3 class="text-[20px] md:text-[22px] font-semibold mb-2">Live ranking dashboard</h3>
          <p class="text-[15px] md:text-[16px] leading-relaxed text-white/80">Your watchlist auto-sorted by a single score per instrument × profile.</p>
          <a href="#features" class="absolute top-3 right-3 text-sm text-white/60 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity">Learn more →</a>
        </article>

        <!-- Custom scoring profiles -->
        <article class="relative p-6 rounded-2xl bg-white/[0.05] border border-white/10 text-center transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus-within:shadow-lg focus-within:ring-2 focus-within:ring-purple-500/40">
          <div class="w-8 h-8 skeleton rounded mx-auto mb-4" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
          <h3 class="text-[20px] md:text-[22px] font-semibold mb-2">Custom scoring profiles</h3>
          <p class="text-[15px] md:text-[16px] leading-relaxed text-white/80">Combine indicators with fuzzy rules and weights into one timeframe-agnostic score.</p>
          <a href="#features" class="absolute top-3 right-3 text-sm text-white/60 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity">Learn more →</a>
        </article>

        <!-- Backtesting in the builder -->
        <article class="relative p-6 rounded-2xl bg-white/[0.05] border border-white/10 text-center transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus-within:shadow-lg focus-within:ring-2 focus-within:ring-purple-500/40">
          <div class="w-8 h-8 skeleton rounded mx-auto mb-4" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
          <h3 class="text-[20px] md:text-[22px] font-semibold mb-2">Backtesting in the builder</h3>
          <p class="text-[15px] md:text-[16px] leading-relaxed text-white/80">Validate profile behavior while you edit. Iterate in minutes.</p>
          <a href="#features" class="absolute top-3 right-3 text-sm text-white/60 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity">Learn more →</a>
        </article>
      </div>
    </div>
  `;
  return section;
}
