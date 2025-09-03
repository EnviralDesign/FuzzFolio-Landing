import dashboardImg from '../media/dashboard.png';
import builderImg from '../media/builder.png';
import backtestingImg from '../media/backtesting.png';

export default function InsideApp() {
  const section = document.createElement('section');
  section.id = 'inside';
  section.className = 'section px-6 md:px-8 py-24 md:py-28';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-center">Inside the <span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">app</span></h2>

      <div class="mt-10 grid grid-cols-12 gap-8 md:gap-10">
        <!-- Top row: one big full-width dashboard -->
        <div class="col-span-12">
          <figure class="aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)]">
            <img src="${dashboardImg}" alt="Dashboard preview showing ranked market tiles with scores and sparklines." loading="lazy" decoding="async" class="w-full h-full object-cover" />
          </figure>
          <figcaption class="mt-2 text-sm text-white/70">Dashboard — Ranked tiles, instrument × profile; one score + short history.</figcaption>
        </div>

        <!-- Bottom row: two halves -->
        <div class="col-span-12 lg:col-span-6">
          <figure class="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)]">
            <img src="${builderImg}" alt="Profile Builder with indicators, fuzzy rules, and weights." loading="lazy" decoding="async" class="w-full h-full object-cover" />
          </figure>
          <figcaption class="mt-2 text-sm text-white/70">Builder — Indicators, fuzzy rules, weights.</figcaption>
        </div>

        <div class="col-span-12 lg:col-span-6">
          <figure class="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)]">
            <img src="${backtestingImg}" alt="Backtesting panel displaying profile behavior on recent history." loading="lazy" decoding="async" class="w-full h-full object-cover" />
          </figure>
          <figcaption class="mt-2 text-sm text-white/70">Backtesting — Run while editing; compare variants fast; deploy when ready.</figcaption>
        </div>
      </div>
    </div>
  `;
  return section;
}
