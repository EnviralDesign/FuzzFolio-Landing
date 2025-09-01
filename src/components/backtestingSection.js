export default function BacktestingSection() {
  const section = document.createElement('section');
  section.id = 'backtesting';
  section.className = 'section bg-slate-900';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="section-title text-left md:text-left">Backtesting built in</h2>
        <p class="mb-4">Validate a scoring profile with the same engine that powers live alerts.</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Configurable lookbacks</li>
          <li>Fast iteration on indicator weights</li>
          <li>Traceable outcomes with price context</li>
        </ul>
      </div>
      <div>
        <div class="aspect-[16/9] skeleton" role="img" aria-label="Backtest chart mockup"><span class="skeleton-label">16:9</span></div>
        <p class="mt-2 text-xs text-gray-400">Backtest chart mockup (16:9)</p>
      </div>
    </div>
  `;
  return section;
}
