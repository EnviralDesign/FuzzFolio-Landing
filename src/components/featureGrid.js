export default function FeatureGrid() {
  const section = document.createElement('section');
  section.id = 'features';
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="frame frame-glow shadow-elevated p-6 sm:p-8 bg-[radial-gradient(circle_at_100%_0%,rgba(236,72,153,0.15),transparent_70%),radial-gradient(circle_at_0%_100%,rgba(168,85,247,0.15),transparent_70%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
        <span class="kicker">Platform</span>
        <h2 class="section-title mt-2">What <span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">FuzzFolio</span> gives you</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-8">
        <!-- Live market view -->
        <article tabindex="0" class="group relative p-6 rounded-2xl border border-white/10 bg-slate-800/50 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0s]">
          <div class="w-10 h-10 skeleton rounded mb-3" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
          <h3 class="text-[22px] font-semibold mb-1">Live market view</h3>
          <p class="text-[15px] leading-snug text-white/80 max-w-[36ch]">Clean 5-minute and hourly views with core indicators.</p>
        </article>

        <!-- Real-time alerts -->
        <article tabindex="0" class="group relative p-6 rounded-2xl border border-white/10 bg-slate-800/50 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0.1s]">
          <div class="w-10 h-10 skeleton rounded mb-3" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
          <h3 class="text-[22px] font-semibold mb-1">Real-time alerts</h3>
          <p class="text-[15px] leading-snug text-white/80 max-w-[36ch]">Fuzzy logic combines indicators into one score.</p>
        </article>

        <!-- Historical log -->
        <article tabindex="0" class="group relative p-6 rounded-2xl border border-white/10 bg-slate-800/50 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0.2s]">
          <div class="w-10 h-10 skeleton rounded mb-3" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
          <h3 class="text-[22px] font-semibold mb-1">Historical log</h3>
          <p class="text-[15px] leading-snug text-white/80 max-w-[36ch]">Review past setups and export CSVs to validate.</p>
        </article>

        <!-- Backtesting -->
        <article tabindex="0" class="group relative p-6 rounded-2xl border border-white/10 bg-slate-800/50 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0.3s]">
          <div class="w-10 h-10 skeleton rounded mb-3" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
          <h3 class="text-[22px] font-semibold mb-1">Backtesting</h3>
          <p class="text-[15px] leading-snug text-white/80 max-w-[36ch]">Validate scoring profiles quickly with transparent context.</p>
        </article>
        </div>
      </div>
    </div>
  `;
  return section;
}
