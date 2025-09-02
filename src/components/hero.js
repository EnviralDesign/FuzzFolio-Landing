import MarketSim from './marketSim.js';

export default function HeroSection() {
  const section = document.createElement('section');
  section.className = 'hero section relative bg-hero-gradient';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <div class="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 class="text-6xl md:text-7xl font-extrabold leading-tight tracking-[-0.02em]">
            See clean setups.<br/>Trade on <span class="heading-gradient">your terms</span>.
          </h1>
          <p class="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
            FuzzFolio helps you identify optimal trading setups with AI-powered analysis.
          </p>
          <div class="mt-6 flex items-center gap-3">
            <a href="#" class="cta-primary cta-pill cta-animated">Get setups</a>
            <a href="#" class="cta-secondary cta-pill cta-animated">Join on Telegram</a>
          </div>
          <p class="mt-3 text-sm text-white/60">Updates via Telegram, no spam</p>
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
