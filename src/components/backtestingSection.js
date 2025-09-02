export default function BacktestingSection() {
  const section = document.createElement('section');
  section.id = 'backtesting';
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <div class="frame p-6 sm:p-8">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span class="kicker">Backtesting</span>
            <h2 class="text-2xl sm:text-3xl font-bold mt-2">Backtesting built in</h2>
            <ul class="list-disc ml-5 mt-4 space-y-2">
              <li>Configurable lookbacks</li>
              <li>Fast iteration on weights</li>
              <li>Traceable outcomes with price context</li>
            </ul>
          </div>
          <div class="skeleton rounded-2xl aspect-[16/9]" role="img" aria-label="Backtest chart mockup">
            <span class="skeleton-label">16:9</span>
          </div>
        </div>
      </div>
    </div>
  `;
  return section;
}
