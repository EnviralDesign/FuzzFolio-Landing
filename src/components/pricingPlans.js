export default function PricingPlans() {
  const section = document.createElement('section');
  section.id = 'plans';
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <div class="frame border-gradient card-bg-gradient shadow-inset p-6 sm:p-8">
        <span class="kicker">Pricing</span>
        <h2 class="section-title mt-2"><span class="heading-gradient">Plans</span></h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="card border-gradient card-bg-gradient shadow-elevated text-center relative motion-safe:animate-fade-up" style="animation-delay:0s">
            <h3 class="text-xl font-semibold mb-4">Free — Setup Radar</h3>
            <ul class="space-y-2 mb-4 text-base sm:text-lg leading-relaxed text-white/80">
              <li>Curated watchlist opportunities</li>
              <li>Weekly recap</li>
              <li>Great for evaluating the approach</li>
            </ul>
            <a href="#" class="cta-primary cta-pill cta-animated">Join free</a>
          </div>
          <div class="card border-gradient card-bg-gradient shadow-elevated text-center relative motion-safe:animate-fade-up" style="animation-delay:0.1s">
            <span class="absolute -top-3 right-4 text-xs bg-purple-600 text-white px-2 py-1 rounded">Best for active traders</span>
            <h3 class="text-xl font-semibold mb-4">Early Access Member — Full Feed</h3>
            <ul class="space-y-2 mb-4 text-base sm:text-lg leading-relaxed text-white/80">
              <li>Real-time scoring alerts with context</li>
              <li>Historical performance log</li>
              <li>Deep-dive analysis via PWA</li>
            </ul>
            <a href="#" class="cta-primary cta-pill cta-animated">Become a member</a>
          </div>
        </div>
      </div>
    </div>
  `;
  return section;
}
