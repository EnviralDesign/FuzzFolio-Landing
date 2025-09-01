export default function Testimonials() {
  const section = document.createElement('section');
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="section-title">Traders say</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="card">
          <p class="mb-4">"FuzzFolio helped me spot setups I used to miss."</p>
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 bg-gray-700 rounded-full"></div>
            <span>Alex</span>
          </div>
        </div>
        <div class="card">
          <p class="mb-4">"The scoring system keeps my trades disciplined."</p>
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 bg-gray-700 rounded-full"></div>
            <span>Jordan</span>
          </div>
        </div>
        <div class="card">
          <p class="mb-4">"Backtesting is fast and easy to tweak."</p>
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 bg-gray-700 rounded-full"></div>
            <span>Taylor</span>
          </div>
        </div>
      </div>
    </div>
  `;
  return section;
}
