export default function SampleMoments() {
  const section = document.createElement('section');
  section.id = 'moments';
  section.className = 'section py-20 md:py-24';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-center">Sample <span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">moments</span> (Telegram)</h2>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        ${[
          { sym: 'EURUSD', title: 'Momentum Mix — Score ↑ to 82 (5m) · 2h ago', img: 'moment-1' },
          { sym: 'XAUUSD', title: 'Mean Revert — Pullback into watch zone · Today, 09:40', img: 'moment-2' },
          { sym: 'GBPUSD', title: 'Breakout Prep — Consolidation tightening near level · Today, 10:25', img: 'moment-3' },
        ].map((m,idx)=>`
          <article tabindex="0" class="group p-4 sm:p-5 rounded-2xl border border-white/10 bg-slate-800/50 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:${idx*0.02}s]">
            <header class="mb-3">
              <p class="text-[13px] text-white/70"><span class="font-semibold text-white">${m.sym}</span> · ${m.title}</p>
            </header>
            <div class="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <div class="skeleton aspect-[16/9]" role="img" aria-label="${m.sym} moment preview">
                <span class="skeleton-label">${m.img}</span>
              </div>
            </div>
          </article>
        `).join('')}
      </div>

      <div class="mt-6 flex items-center justify-center">
        <a href="#" class="text-sm font-semibold text-white hover:text-purple-300 transition">See more moments →</a>
      </div>
      <p class="mt-2 text-center text-[13px] text-white/60">Sampling channel. The app runs on the web.</p>
    </div>
  `;
  return section;
}
