import MarketSim from './marketSim.js';

export default function HeroSection() {
  const section = document.createElement('section');
  section.className = [
    'hero section relative',
    // Full viewport height hero; override section padding
    'min-h-[100svh] py-0 pt-20 md:pt-24',
    // Vertical centering on larger screens
    'flex items-start md:items-center',
    // Tailwind arbitrary multi-layer background to replace bg-hero-gradient
    "bg-[radial-gradient(140%_120%_at_0%_0%,rgba(168,85,247,0.35),transparent_60%),radial-gradient(140%_120%_at_100%_0%,rgba(236,72,153,0.30),transparent_55%)]"
  ].join(' ');
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid md:grid-cols-2 gap-8 md:items-stretch">
        <div class="md:flex md:flex-col">
          <h1 class="text-6xl md:text-7xl font-extrabold leading-tight tracking-[-0.02em]">
            Let the best setups <span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">find you.</span>
          </h1>
          <p class="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
            Craft fuzzy-weighted scoring profiles from indicators you trust. Backtest while you edit to see expected behavior—then let the dashboard surface the opportunities you care about in real time.
          </p>
          <div class="md:mt-auto">
            <div class="mt-6 flex items-center gap-3">
              <a href="#" class="cta-primary cta-pill bg-gradient-to-r from-purple-600 to-pink-500">Start free</a>
              <a href="#" class="cta-secondary cta-pill">See sample moments (Telegram)</a>
            </div>
            <p class="mt-3 text-sm text-white/60">No broker connect · Setup ≈ 2 min · Educational only · Cancel anytime</p>
          </div>
        </div>
        <div id="hero-market-sim" class="md:mt-2"></div>
      </div>
    </div>
  `;

  const mount = section.querySelector('#hero-market-sim');
  mount.appendChild(
    MarketSim({ symbols: ['AUDUSD','GBPUSD','EURUSD','USDJPY'], points: 60, intervalMs: 1000 })
  );

  return section;
}
