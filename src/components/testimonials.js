export default function Testimonials() {
  const section = document.createElement('section');
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <h2 class="section-title">Traders say</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="card">
          <p class="mb-4">"FuzzFolio helped me spot setups I used to miss."</p>
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 skeleton rounded-full grid place-items-center" role="img" aria-label="Avatar placeholder"><span class="text-xs text-white/80">A</span></div>
            <div>
              <span>Alex</span>
              <p class="text-xs text-gray-400">Swing Trader</p>
            </div>
          </div>
        </div>
        <div class="card">
          <p class="mb-4">"The scoring system keeps my trades disciplined."</p>
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 skeleton rounded-full grid place-items-center" role="img" aria-label="Avatar placeholder"><span class="text-xs text-white/80">J</span></div>
            <div>
              <span>Jordan</span>
              <p class="text-xs text-gray-400">Day Trader</p>
            </div>
          </div>
        </div>
        <div class="card">
          <p class="mb-4">"Backtesting is fast and easy to tweak."</p>
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 skeleton rounded-full grid place-items-center" role="img" aria-label="Avatar placeholder"><span class="text-xs text-white/80">T</span></div>
            <div>
              <span>Taylor</span>
              <p class="text-xs text-gray-400">Scalper</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return section;
}
