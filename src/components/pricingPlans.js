export default function PricingPlans() {
  const section = document.createElement('section');
  section.id = 'plans';
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 class="section-title"><span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">Pricing</span></h2>
      <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 items-stretch">
          <!-- Free -->
          <div tabindex="0" class="group relative p-6 rounded-2xl border border-white/10 bg-slate-800/50 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0s] flex flex-col">
            <div class="min-h-14 flex items-start gap-2">
              <h3 class="text-2xl font-semibold">Free</h3>
              <span class="badge">Risk Free Evaluation</span>
              <span class="price-tag ml-auto">$0/mo</span>
            </div>
            <div class="mt-4 grow">
              <ul class="space-y-2 text-[15px] leading-snug">
                <li class="feat-yes flex items-center gap-2 p-3 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span><span>Updates: ~60s</span>
                </li>
                <li class="feat-yes flex items-center gap-2 p-3 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span><span>Profiles: 1 (8 inst.)</span>
                </li>
                <li class="feat-yes flex items-center gap-2 p-3 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span><span>Indicators/profile: 3</span>
                </li>
                <li class="feat-yes flex items-center gap-2 p-3 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span><span>Backtests: 100/d · 7d</span>
                </li>
                <li class="feat-no flex items-center gap-2 p-3 rounded-md bg-white/[0.02] border border-white/5 text-white/60">
                  <span class="mt-0.5 text-white/40" aria-hidden="true">–</span><span>Alerts: None</span>
                </li>
              </ul>
            </div>
            <div class="mt-auto pt-3">
              <a href="#" class="cta-primary cta-pill bg-gradient-to-r from-purple-600 to-pink-500 inline-block">Start free trial</a>
              <p class="mt-2 text-[12px] text-white/60">No credit card · Cancel anytime</p>
            </div>
          </div>

          <!-- Plus -->
          <div tabindex="0" class="group relative p-6 rounded-2xl border border-white/10 bg-slate-800/50 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0.02s] flex flex-col">
            <div aria-hidden="true" class="absolute inset-0 rounded-2xl pointer-events-none opacity-70 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(168,85,247,0.18),transparent_55%),radial-gradient(120%_80%_at_50%_120%,rgba(236,72,153,0.18),transparent_55%)]"></div>
            <div class="min-h-14 flex items-start gap-2">
              <h3 class="text-2xl font-semibold">Plus <span class="badge">Best for Active Traders</span></h3>
              <span class="price-tag ml-auto opacity-80">—/mo</span>
            </div>
            <div class="mt-4 grow">
              <ul class="space-y-2 text-[15px] leading-snug">
                <li class="feat-yes flex items-center gap-2 p-3 rounded-md bg-white/[0.04] border border-white/10 text-white/90"><span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span><span>Updates: ~30s</span></li>
                <li class="feat-yes flex items-center gap-2 p-3 rounded-md bg-white/[0.04] border border-white/10 text-white/90"><span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span><span>Profiles: 5 (100 inst.)</span></li>
                <li class="feat-yes flex items-center gap-2 p-3 rounded-md bg-white/[0.04] border border-white/10 text-white/90"><span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span><span>Indicators/profile: 5</span></li>
                <li class="feat-yes flex items-center gap-2 p-3 rounded-md bg-white/[0.04] border border-white/10 text-white/90"><span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span><span>Backtests: 500/d · 30d</span></li>
                <li class="feat-yes flex items-center gap-2 p-3 rounded-md bg-white/[0.04] border border-white/10 text-white/90"><span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span><span>Alerts: Unlimited</span></li>
              </ul>
            </div>
            <div class="mt-auto pt-3">
              <a href="#" class="cta-primary cta-pill bg-gradient-to-r from-purple-600 to-pink-500 inline-block">Start free trial</a>
              <p class="mt-2 text-[12px] text-white/60">Early-access pricing</p>
            </div>
          </div>

          <!-- Pro (supersedes Plus) -->
          <div tabindex="0" class="group relative p-6 rounded-2xl border border-white/10 bg-slate-800/50 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0.04s] flex flex-col">
            <div class="min-h-14 flex items-start gap-2">
              <h3 class="text-2xl font-semibold">Pro <span class="badge">Ideal for Power Users</span></h3>
              <span class="price-tag ml-auto opacity-80">—/mo</span>
            </div>
            <div class="mt-4 grow">
              <ul class="space-y-2 text-[15px] leading-snug">
                <li class="feat-yes flex items-center gap-2 p-3 rounded-md bg-white/[0.04] border border-white/10 text-white/90"><span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span><span>Updates: ~5s</span></li>
                <li class="feat-yes flex items-center gap-2 p-3 rounded-md bg-white/[0.04] border border-white/10 text-white/90"><span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span><span>Profiles: 12 (∞ inst.)</span></li>
                <li class="feat-yes flex items-center gap-2 p-3 rounded-md bg-white/[0.04] border border-white/10 text-white/90"><span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span><span>Indicators/profile: 10</span></li>
                <li class="feat-yes flex items-center gap-2 p-3 rounded-md bg-white/[0.04] border border-white/10 text-white/90"><span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span><span>Backtests: 5k/d · 1y</span></li>
                <li class="feat-yes flex items-center gap-2 p-3 rounded-md bg-white/[0.04] border border-white/10 text-white/90"><span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span><span>Alerts: Unlimited</span></li>
              </ul>
            </div>
            <div class="mt-auto pt-3">
              <a href="#" class="cta-primary cta-pill bg-gradient-to-r from-purple-600 to-pink-500 inline-block">Start free trial</a>
              <p class="mt-2 text-[12px] text-white/60">Early-access pricing</p>
            </div>
          </div>
      </div>
    </div>
  `;
  return section;
}
