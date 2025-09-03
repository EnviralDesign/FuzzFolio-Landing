export default function PricingPlans() {
  const section = document.createElement('section');
  section.id = 'plans';
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 class="section-title"><span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">Pricing</span></h2>
      <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          <!-- Free -->
          <div tabindex="0" class="group relative p-6 rounded-2xl border border-white/10 bg-slate-800/50 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0s] flex flex-col">
            <h3 class="text-2xl font-semibold">Free — Setup Radar</h3>
            <p class="mt-1 text-white/70 text-base">Curated opportunities to get a feel for the flow.</p>
            <div class="mt-4 grow">
              <ul class="space-y-2 text-[15px] leading-snug">
                <li class="feat-yes flex items-start gap-2 p-2 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>Live ranking dashboard</span>
                </li>
                <li class="feat-no flex items-start gap-2 p-2 rounded-md bg-white/[0.02] border border-white/5 text-white/60">
                  <span class="mt-0.5 text-white/40" aria-hidden="true">×</span>
                  <span>Real-time scoring alerts</span>
                </li>
                <li class="feat-no flex items-start gap-2 p-2 rounded-md bg-white/[0.02] border border-white/5 text-white/60">
                  <span class="mt-0.5 text-white/40" aria-hidden="true">×</span>
                  <span>Historical performance log</span>
                </li>
                <li class="feat-yes flex items-start gap-2 p-2 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>Profile builder (fuzzy rules & weights)</span>
                </li>
                <li class="feat-yes flex items-start gap-2 p-2 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>Backtesting while editing</span>
                </li>
                <li class="feat-no flex items-start gap-2 p-2 rounded-md bg-white/[0.02] border border-white/5 text-white/60">
                  <span class="mt-0.5 text-white/40" aria-hidden="true">×</span>
                  <span>Unlimited profiles</span>
                </li>
                <li class="feat-no flex items-start gap-2 p-2 rounded-md bg-white/[0.02] border border-white/5 text-white/60">
                  <span class="mt-0.5 text-white/40" aria-hidden="true">×</span>
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
            <div class="mt-4">
              <a href="#" class="cta-primary cta-pill bg-gradient-to-r from-purple-600 to-pink-500 inline-block">Join for free</a>
              <p class="mt-2 text-[12px] text-white/60">No credit card · Cancel anytime</p>
            </div>
          </div>

          <!-- Plus -->
          <div tabindex="0" class="group relative p-6 rounded-2xl border border-white/10 bg-slate-800/50 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0.02s] flex flex-col">
            <span class="absolute -top-5 right-4 px-3 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500">Best for active traders</span>
            <h3 class="text-2xl font-semibold">Plus — Full Feed</h3>
            <p class="mt-1 text-white/70 text-base">Everything in Free, plus real-time scoring and history.</p>
            <div class="mt-4 grow">
              <ul class="space-y-2 text-[15px] leading-snug">
                <li class="feat-yes flex items-start gap-2 p-2 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>Live ranking dashboard</span>
                </li>
                <li class="feat-yes flex items-start gap-2 p-2 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>Real-time scoring alerts</span>
                </li>
                <li class="feat-yes flex items-start gap-2 p-2 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>Historical performance log</span>
                </li>
                <li class="feat-yes flex items-start gap-2 p-2 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>Profile builder (fuzzy rules & weights)</span>
                </li>
                <li class="feat-yes flex items-start gap-2 p-2 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>Backtesting while editing</span>
                </li>
                <li class="feat-no flex items-start gap-2 p-2 rounded-md bg-white/[0.02] border border-white/5 text-white/60">
                  <span class="mt-0.5 text-white/40" aria-hidden="true">×</span>
                  <span>Unlimited profiles</span>
                </li>
                <li class="feat-no flex items-start gap-2 p-2 rounded-md bg-white/[0.02] border border-white/5 text-white/60">
                  <span class="mt-0.5 text-white/40" aria-hidden="true">×</span>
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
            <div class="mt-4">
              <a href="#" class="cta-primary cta-pill bg-gradient-to-r from-purple-600 to-pink-500 inline-block">Start free trial</a>
              <p class="mt-2 text-[12px] text-white/60">Early access pricing</p>
            </div>
          </div>

          <!-- Pro (supersedes Plus) -->
          <div tabindex="0" class="group relative p-6 rounded-2xl border border-white/10 bg-slate-800/50 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0.04s] flex flex-col">
            <span class="absolute -top-5 right-4 px-3 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500">Coming soon</span>
            <h3 class="text-2xl font-semibold">Pro — Advanced</h3>
            <p class="mt-1 text-white/70 text-base">Supersedes Plus with advanced analytics & integrations.</p>
            <div class="mt-4 grow">
              <ul class="space-y-2 text-[15px] leading-snug">
                <li class="feat-yes flex items-start gap-2 p-2 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>Live ranking dashboard</span>
                </li>
                <li class="feat-yes flex items-start gap-2 p-2 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>Real-time scoring alerts</span>
                </li>
                <li class="feat-yes flex items-start gap-2 p-2 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>Historical performance log</span>
                </li>
                <li class="feat-yes flex items-start gap-2 p-2 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>Profile builder (fuzzy rules & weights)</span>
                </li>
                <li class="feat-yes flex items-start gap-2 p-2 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>Backtesting while editing</span>
                </li>
                <li class="feat-yes flex items-start gap-2 p-2 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>Unlimited profiles</span>
                </li>
                <li class="feat-yes flex items-start gap-2 p-2 rounded-md bg-white/[0.04] border border-white/10 text-white/90">
                  <span class="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
            <div class="mt-4">
              <a href="#" class="cta-secondary cta-pill inline-block">start free trial</a>
              <p class="mt-2 text-[12px] text-white/60">We’ll email when Pro opens</p>
            </div>
          </div>
      </div>
    </div>
  `;
  return section;
}
