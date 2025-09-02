export default function BacktestingSection() {
  const section = document.createElement('section');
  section.id = 'backtesting';
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <div class="frame frame-glow border-gradient shadow-elevated p-6 sm:p-8" style="background-image:radial-gradient(circle at 0% 0%, rgba(236,72,153,0.2), transparent 70%), radial-gradient(circle at 100% 100%, rgba(168,85,247,0.2), transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span class="kicker">Backtesting</span>
            <h2 class="text-3xl sm:text-4xl font-bold mt-2"><span class="heading-gradient">Backtesting</span> built in</h2>
            <ul class="list-disc ml-5 mt-4 space-y-2 text-base sm:text-lg leading-relaxed text-white/80">
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
