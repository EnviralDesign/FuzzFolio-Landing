export default function PricingPlans() {
  const section = document.createElement('section');
  section.id = 'plans';
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <div class="frame shadow-inset p-6 sm:p-8 bg-[radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.15),transparent_70%),radial-gradient(circle_at_0%_100%,rgba(168,85,247,0.10),transparent_70%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
        <span class="kicker">Pricing</span>
        <h2 class="section-title mt-2"><span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">Plans</span></h2>
        <div class="grid md:grid-cols-2 gap-x-8 gap-y-8">
          <div class="card shadow-elevated text-center relative motion-safe:animate-fade-up bg-[radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.2),transparent_70%),radial-gradient(circle_at_0%_100%,rgba(168,85,247,0.1),transparent_70%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" style="animation-delay:0s;">
            <h3 class="text-2xl font-semibold mb-4">Free — Setup Radar</h3>
            <ul class="space-y-2 text-base sm:text-lg leading-relaxed text-white/80">
              <li>Curated watchlist opportunities</li>
              <li>Weekly recap</li>
              <li>Great for evaluating the approach</li>
            </ul>
            <a href="#" class="cta-primary cta-pill bg-gradient-to-r from-purple-600 to-pink-500 inline-block mt-3">Join free</a>
          </div>
          <div class="card shadow-elevated text-center relative motion-safe:animate-fade-up bg-[radial-gradient(circle_at_100%_0%,rgba(236,72,153,0.25),transparent_70%),radial-gradient(circle_at_0%_100%,rgba(249,115,22,0.25),transparent_70%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" style="animation-delay:0.1s;">
            <span class="absolute -top-5 right-4 px-3 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500">Best for active traders</span>
            <h3 class="text-2xl font-semibold mb-4">Early Access Member — Full Feed</h3>
            <ul class="space-y-2 text-base sm:text-lg leading-relaxed text-white/80">
              <li>Real-time scoring alerts with context</li>
              <li>Historical performance log</li>
              <li>Deep-dive analysis via PWA</li>
            </ul>
            <a href="#" class="cta-primary cta-pill bg-gradient-to-r from-purple-600 to-pink-500 inline-block mt-3">Become a member</a>
          </div>
        </div>
      </div>
    </div>
  `;
  return section;
}
