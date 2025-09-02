export default function PricingPlans() {
  const section = document.createElement('section');
  section.id = 'plans';
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <div class="frame p-6 sm:p-8">
        <span class="kicker">Pricing</span>
        <h2 class="section-title mt-2">Plans</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="card text-center">
            <h3 class="text-xl font-semibold mb-4">Free — Setup Radar</h3>
            <ul class="space-y-2 mb-4">
              <li>Curated watchlist opportunities</li>
              <li>Weekly recap</li>
              <li>Great for evaluating the approach</li>
            </ul>
            <a href="#" class="cta-primary cta-pill">Join Free</a>
          </div>
          <div class="card text-center relative">
            <span class="absolute -top-3 right-4 text-xs bg-purple-600 text-white px-2 py-1 rounded">Best for active traders</span>
            <h3 class="text-xl font-semibold mb-4">Early Access Member — Full Feed</h3>
            <ul class="space-y-2 mb-4">
              <li>Real-time scoring alerts with context</li>
              <li>Historical performance log</li>
              <li>Deep-dive analysis via PWA</li>
            </ul>
            <a href="#" class="cta-primary cta-pill">Become a Member</a>
          </div>
        </div>
      </div>
    </div>
  `;
  return section;
}
