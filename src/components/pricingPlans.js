export default function PricingPlans() {
  const section = document.createElement('section');
  section.id = 'plans';
  section.className = 'section bg-slate-900';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="section-title">Plans</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="card text-center">
          <h3 class="text-xl font-semibold mb-4">Free — Setup Radar</h3>
          <ul class="space-y-2 mb-4">
            <li>Curated watchlist opportunities</li>
            <li>Weekly recap</li>
            <li>Great for evaluating the approach</li>
          </ul>
          <a href="#" class="btn-primary">Join Free</a>
        </div>
        <div class="card text-center relative">
          <span class="absolute -top-3 right-4 text-xs bg-purple-600 text-white px-2 py-1 rounded">Best for active traders</span>
          <h3 class="text-xl font-semibold mb-4">Early Access Member — Full Feed</h3>
          <ul class="space-y-2 mb-4">
            <li>Real-time scoring alerts with context</li>
            <li>Historical performance log</li>
            <li>Deep-dive analysis via PWA</li>
          </ul>
          <a href="#" class="btn-primary">Become a Member</a>
        </div>
      </div>
    </div>
  `;
  return section;
}
