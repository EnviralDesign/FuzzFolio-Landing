export default function Testimonials() {
  const section = document.createElement('section');
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <span class="kicker">Testimonials</span>
      <h2 class="section-title mt-2"><span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">Traders</span> say</h2>
      <div class="overflow-hidden edge-fade">
        <div class="flex gap-6 w-max logo-ticker">
        <div class="min-w-[260px] flex-shrink-0 frame-ghost shadow-inset p-6 snap-start">
          <p class="mb-4 text-base sm:text-lg leading-relaxed text-white/80">"FuzzFolio helped me spot setups I used to miss."</p>
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 skeleton rounded-full grid place-items-center transition-transform hover:scale-105" role="img" aria-label="Avatar placeholder"><span class="text-sm text-white/80">A</span></div>
            <div>
              <span>Alex</span>
              <p class="text-sm text-gray-400">Swing Trader</p>
            </div>
          </div>
        </div>
        <div class="min-w-[260px] flex-shrink-0 frame-ghost shadow-inset p-6 snap-start">
          <p class="mb-4 text-base sm:text-lg leading-relaxed text-white/80">"The scoring system keeps my trades disciplined."</p>
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 skeleton rounded-full grid place-items-center transition-transform hover:scale-105" role="img" aria-label="Avatar placeholder"><span class="text-sm text-white/80">J</span></div>
            <div>
              <span>Jordan</span>
              <p class="text-sm text-gray-400">Day Trader</p>
            </div>
          </div>
        </div>
        <div class="min-w-[260px] flex-shrink-0 frame-ghost shadow-inset p-6 snap-start">
          <p class="mb-4 text-base sm:text-lg leading-relaxed text-white/80">"Backtesting is fast and easy to tweak."</p>
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 skeleton rounded-full grid place-items-center transition-transform hover:scale-105" role="img" aria-label="Avatar placeholder"><span class="text-sm text-white/80">T</span></div>
            <div>
              <span>Taylor</span>
              <p class="text-sm text-gray-400">Scalper</p>
            </div>
          </div>
        </div>
        <div class="min-w-[260px] flex-shrink-0 frame-ghost shadow-inset p-6 snap-start">
          <p class="mb-4 text-base sm:text-lg leading-relaxed text-white/80">"FuzzFolio helped me spot setups I used to miss."</p>
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 skeleton rounded-full grid place-items-center transition-transform hover:scale-105" role="img" aria-label="Avatar placeholder"><span class="text-sm text-white/80">A</span></div>
            <div>
              <span>Alex</span>
              <p class="text-sm text-gray-400">Swing Trader</p>
            </div>
          </div>
        </div>
        <div class="min-w-[260px] flex-shrink-0 frame-ghost shadow-inset p-6 snap-start">
          <p class="mb-4 text-base sm:text-lg leading-relaxed text-white/80">"The scoring system keeps my trades disciplined."</p>
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 skeleton rounded-full grid place-items-center transition-transform hover:scale-105" role="img" aria-label="Avatar placeholder"><span class="text-sm text-white/80">J</span></div>
            <div>
              <span>Jordan</span>
              <p class="text-sm text-gray-400">Day Trader</p>
            </div>
          </div>
        </div>
        <div class="min-w-[260px] flex-shrink-0 frame-ghost shadow-inset p-6 snap-start">
          <p class="mb-4 text-base sm:text-lg leading-relaxed text-white/80">"Backtesting is fast and easy to tweak."</p>
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 skeleton rounded-full grid place-items-center transition-transform hover:scale-105" role="img" aria-label="Avatar placeholder"><span class="text-sm text-white/80">T</span></div>
            <div>
              <span>Taylor</span>
              <p class="text-sm text-gray-400">Scalper</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  `;
  return section;
}
