export default function PersonaTabs() {
  const section = document.createElement('section');
  section.id = 'personas';
  section.className = 'section bg-slate-900';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <h2 class="section-title">Who it's for</h2>
      <div class="flex flex-wrap gap-4 justify-center mb-8" role="tablist">
        <button id="tab-day" class="persona-tab btn-primary" data-target="day" role="tab" aria-selected="true" aria-controls="panel-day">Day Trader</button>
        <button id="tab-swing" class="persona-tab btn-secondary" data-target="swing" role="tab" aria-selected="false" aria-controls="panel-swing">Swing Trader</button>
        <button id="tab-scalper" class="persona-tab btn-secondary" data-target="scalper" role="tab" aria-selected="false" aria-controls="panel-scalper">Scalper</button>
        <button id="tab-new" class="persona-tab btn-secondary" data-target="new" role="tab" aria-selected="false" aria-controls="panel-new">New Trader</button>
        <button id="tab-you" class="persona-tab btn-secondary" data-target="you" role="tab" aria-selected="false" aria-controls="panel-you">You</button>
      </div>
      <div class="persona-content max-w-3xl mx-auto">
        <div id="panel-day" data-tab="day" class="tab-panel" role="tabpanel" aria-labelledby="tab-day">
          <p class="mb-4">Day traders can react to real-time scoring alerts and quick backtests.</p>
          <div class="aspect-[16/9] skeleton" role="img" aria-label="Day trader dashboard preview"><span class="skeleton-label">16:9 preview</span></div>
        </div>
        <div id="panel-swing" data-tab="swing" class="tab-panel" role="tabpanel" aria-labelledby="tab-swing">
          <p class="mb-4">Swing traders can hold positions with confidence using clear setup scores.</p>
          <div class="aspect-[16/9] skeleton" role="img" aria-label="Swing trader dashboard preview"><span class="skeleton-label">16:9 preview</span></div>
        </div>
        <div id="panel-scalper" data-tab="scalper" class="tab-panel" role="tabpanel" aria-labelledby="tab-scalper">
          <p class="mb-4">Scalpers get fast signals to catch quick moves.</p>
          <div class="aspect-[16/9] skeleton" role="img" aria-label="Scalper dashboard preview"><span class="skeleton-label">16:9 preview</span></div>
        </div>
        <div id="panel-new" data-tab="new" class="tab-panel" role="tabpanel" aria-labelledby="tab-new">
          <p class="mb-4">New traders learn by seeing clean setups scored in real time.</p>
          <div class="aspect-[16/9] skeleton" role="img" aria-label="New trader dashboard preview"><span class="skeleton-label">16:9 preview</span></div>
        </div>
        <div id="panel-you" data-tab="you" class="tab-panel" role="tabpanel" aria-labelledby="tab-you">
          <p class="mb-4">Whatever your style, FuzzFolio adapts to you.</p>
          <div class="aspect-[16/9] skeleton" role="img" aria-label="Personalized dashboard preview"><span class="skeleton-label">16:9 preview</span></div>
        </div>
      </div>
    </div>
  `;

  const tabs = section.querySelectorAll('.persona-tab');
  const panels = section.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('btn-primary', 'active');
        t.classList.add('btn-secondary');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => {
        p.classList.add('hidden');
        p.setAttribute('aria-hidden', 'true');
      });
      tab.classList.add('btn-primary', 'active');
      tab.classList.remove('btn-secondary');
      tab.setAttribute('aria-selected', 'true');
      const panel = section.querySelector(`#panel-${tab.dataset.target}`);
      panel.classList.remove('hidden');
      panel.setAttribute('aria-hidden', 'false');
    });
  });

  // Initialize first tab
  tabs[0].click();

  return section;
}
