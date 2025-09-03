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
        <article class="p-6 rounded-xl bg-white/[0.04] border border-white/10 text-center relative motion-safe:animate-fade-up [animation-delay:0s] bg-[radial-gradient(circle_at_10%_20%,rgba(236,72,153,0.08),transparent_70%)]">
          <div class="w-16 aspect-square skeleton rounded mx-auto mb-4" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
          <h3 class="text-2xl font-semibold mb-2">Live market view</h3>
          <p class="text-base sm:text-lg leading-relaxed text-white/80">Clean 5-minute and hourly views with core indicators.</p>
        </article>

        <!-- Real-time alerts -->
        <article class="p-6 rounded-xl bg-white/[0.04] border border-white/10 text-center relative motion-safe:animate-fade-up [animation-delay:0.1s] bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.08),transparent_70%)]">
          <div class="w-16 aspect-square skeleton rounded mx-auto mb-4" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
          <h3 class="text-2xl font-semibold mb-2">Real-time alerts</h3>
          <p class="text-base sm:text-lg leading-relaxed text-white/80">Fuzzy logic combines indicators into one score.</p>
        </article>

        <!-- Historical log -->
        <article class="p-6 rounded-xl bg-white/[0.04] border border-white/10 text-center relative motion-safe:animate-fade-up [animation-delay:0.2s] bg-[radial-gradient(circle_at_30%_80%,rgba(236,72,153,0.08),transparent_70%)]">
          <div class="w-16 aspect-square skeleton rounded mx-auto mb-4" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
          <h3 class="text-2xl font-semibold mb-2">Historical log</h3>
          <p class="text-base sm:text-lg leading-relaxed text-white/80">Review past setups and export CSVs to validate.</p>
        </article>

        <!-- Backtesting -->
        <article class="p-6 rounded-xl bg-white/[0.04] border border-white/10 text-center relative motion-safe:animate-fade-up [animation-delay:0.3s] bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.08),transparent_70%)]">
          <div class="w-16 aspect-square skeleton rounded mx-auto mb-4" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
          <h3 class="text-2xl font-semibold mb-2">Backtesting</h3>
          <p class="text-base sm:text-lg leading-relaxed text-white/80">Validate scoring profiles quickly with transparent context.</p>
        </article>
        </div>
      </div>
    </div>
  `;
  return section;
}
