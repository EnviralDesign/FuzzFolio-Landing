export default function PersonaTabs() {
  const section = document.createElement('section');
  section.id = 'personas';
  section.className = 'section bg-slate-900';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="section-title">Who it's for</h2>
      <div class="flex flex-wrap gap-4 justify-center mb-8" role="tablist">
        <button class="persona-tab btn-secondary" data-target="day">Day Trader</button>
        <button class="persona-tab btn-secondary" data-target="swing">Swing Trader</button>
        <button class="persona-tab btn-secondary" data-target="scalper">Scalper</button>
        <button class="persona-tab btn-secondary" data-target="new">New Trader</button>
        <button class="persona-tab btn-secondary" data-target="you">You</button>
      </div>
      <div class="persona-content max-w-3xl mx-auto">
        <div data-tab="day" class="tab-panel">
          <p class="mb-4">Day traders can react to real-time scoring alerts and quick backtests.</p>
          <div class="aspect-video bg-gray-700 rounded"></div>
        </div>
        <div data-tab="swing" class="tab-panel hidden">
          <p class="mb-4">Swing traders can hold positions with confidence using clear setup scores.</p>
          <div class="aspect-video bg-gray-700 rounded"></div>
        </div>
        <div data-tab="scalper" class="tab-panel hidden">
          <p class="mb-4">Scalpers get fast signals to catch quick moves.</p>
          <div class="aspect-video bg-gray-700 rounded"></div>
        </div>
        <div data-tab="new" class="tab-panel hidden">
          <p class="mb-4">New traders learn by seeing clean setups scored in real time.</p>
          <div class="aspect-video bg-gray-700 rounded"></div>
        </div>
        <div data-tab="you" class="tab-panel hidden">
          <p class="mb-4">Whatever your style, FuzzFolio adapts to you.</p>
          <div class="aspect-video bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  `;

  const tabs = section.querySelectorAll('.persona-tab');
  const panels = section.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('btn-primary', 'active'));
      panels.forEach(p => p.classList.add('hidden'));
      tab.classList.add('btn-primary', 'active');
      section.querySelector(`[data-tab="${tab.dataset.target}"]`).classList.remove('hidden');
    });
  });

  tabs[0].click();

  return section;
}
