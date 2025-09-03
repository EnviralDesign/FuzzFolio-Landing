export default function HowItWorks() {
  const section = document.createElement('section');
  section.id = 'how';
  section.className = 'section py-20 md:py-24';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 class="text-5xl md:text-6xl font-bold tracking-tight text-center">How it <span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">works</span></h2>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <article tabindex="0" class="group p-6 rounded-2xl border border-white/10 bg-slate-800/50 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0s]">
          <h3 class="text-[22px] font-semibold mb-1">Build</h3>
          <p class="text-[15px] leading-snug text-white/80 max-w-[36ch]">Add indicators, set fuzzy rules and weights; produce a timeframe-agnostic score.</p>
        </article>
        <article tabindex="0" class="group p-6 rounded-2xl border border-white/10 bg-slate-800/50 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0.02s]">
          <h3 class="text-[22px] font-semibold mb-1">Validate</h3>
          <p class="text-[15px] leading-snug text-white/80 max-w-[36ch]">Backtest as you edit to see expected behavior on recent history.</p>
        </article>
        <article tabindex="0" class="group p-6 rounded-2xl border border-white/10 bg-slate-800/50 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:0.04s]">
          <h3 class="text-[22px] font-semibold mb-1">Deploy</h3>
          <p class="text-[15px] leading-snug text-white/80 max-w-[36ch]">Turn it on; tiles appear and sort automatically on the dashboard.</p>
        </article>
      </div>
    </div>
  `;
  return section;
}
