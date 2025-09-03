export default function WhyChips() {
  const section = document.createElement('section');
  section.id = 'why';
  section.className = 'section py-20 md:py-24';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 class="text-5xl md:text-6xl font-bold tracking-tight text-center">Why it <span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">works</span></h2>

      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <!-- Live ranking dashboard -->
        <article tabindex="0" class="group relative p-6 rounded-2xl bg-white/[0.05] border border-white/10 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0s]">
          <div class="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/5 grid place-items-center mb-3">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="w-7 h-7 text-white/80">
              <!-- sparkline icon -->
              <path d="M3 17L9 11l3 3 4-8 5 10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="text-[22px] font-semibold mb-1 text-white">Live ranking dashboard</h3>
          <p class="text-[15px] leading-snug text-white/80 max-w-[36ch]">Your watchlist auto-sorted by a single score per instrument × profile.</p>
          <a href="#features" class="absolute top-3 right-3 text-sm text-white/60 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity">Learn more →</a>
        </article>

        <!-- Custom scoring profiles -->
        <article tabindex="0" class="group relative p-6 rounded-2xl bg-white/[0.05] border border-white/10 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0.02s]">
          <div class="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/5 grid place-items-center mb-3">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="w-7 h-7 text-white/80">
              <!-- sliders-horizontal icon -->
              <path d="M3 7h10" stroke-linecap="round"/>
              <circle cx="14" cy="7" r="2"/>
              <path d="M3 17h14" stroke-linecap="round"/>
              <circle cx="8" cy="17" r="2"/>
            </svg>
          </div>
          <h3 class="text-[22px] font-semibold mb-1 text-white">Custom scoring profiles</h3>
          <p class="text-[15px] leading-snug text-white/80 max-w-[36ch]">Combine indicators with fuzzy rules and weights into one timeframe-agnostic score.</p>
          <a href="#features" class="absolute top-3 right-3 text-sm text-white/60 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity">Learn more →</a>
        </article>

        <!-- Backtesting in the builder -->
        <article tabindex="0" class="group relative p-6 rounded-2xl bg-white/[0.05] border border-white/10 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0.04s]">
          <div class="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/5 grid place-items-center mb-3">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="w-7 h-7 text-white/80">
              <!-- clock/history icon -->
              <circle cx="12" cy="12" r="9"/>
              <path d="M12 7v5l3 2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="text-[22px] font-semibold mb-1 text-white">Backtesting in the builder</h3>
          <p class="text-[15px] leading-snug text-white/80 max-w-[36ch]">Validate profile behavior while you edit. Iterate in minutes.</p>
          <a href="#features" class="absolute top-3 right-3 text-sm text-white/60 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity">Learn more →</a>
        </article>
      </div>
    </div>
  `;
  return section;
}
