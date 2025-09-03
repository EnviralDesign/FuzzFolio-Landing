// src/components/marketSim.js
export default function MarketSim({ symbols = ['AUDUSD','GBPUSD','EURUSD','USDJPY'], points = 60, intervalMs = 1000 } = {}) {
  // Container with small label + grid
  const container = document.createElement('div');
  container.className = 'space-y-2';

  const label = document.createElement('div');
  label.className = 'kicker inline-flex';
  label.textContent = 'Simulated Playback';
  container.appendChild(label);

  const gridEl = document.createElement('div');
  gridEl.className = 'market-grid grid grid-cols-2 gap-4 md:gap-5';
  container.appendChild(gridEl);

  const noise = 0.3 * 0.75; // reduce stochastic variance by 25%

  // --- State per tile
  const tiles = symbols.map(sym => {
    const data = Array.from(
      { length: points },
      (_, i) => clamp11(0.5 * Math.sin(i / 6) + randn(0, noise))
    );
    return { sym, data, el: null, up: 0, down: 0 };
  });

  tiles.forEach(t => { t.el = createTile(t); gridEl.appendChild(t.el); updateTileVisual(t); });

  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  let cadence = media.matches ? Math.max(intervalMs, 3000) : intervalMs;
  const handleMotionChange = () => {
    cadence = media.matches ? Math.max(intervalMs, 3000) : intervalMs;
    if (timer) { clearInterval(timer); timer = setInterval(tick, cadence); }
  };
  media.addEventListener?.('change', handleMotionChange);

  // Visibility throttle
  let timer = null;
  const start = () => { if (!timer) timer = setInterval(tick, cadence); };
  const stop  = () => { if (timer) { clearInterval(timer); timer = null; } };
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  start();

  function tick() {
    // Update data + scores for each tile
    tiles.forEach(t => {
      const last = t.data[t.data.length - 1];
      const next = clamp11(last + randn(0, noise));
      t.data.push(next); t.data.shift();

      // Derive long/short scores from shared value
      t.up   = Math.round(Math.max(next, 0) * 100);
      t.down = Math.round(Math.max(-next, 0) * 100);

      updateTileVisual(t);
    });

    // Sort (highest opportunity first)
    const sorted = [...tiles].sort((a,b) => Math.max(b.up, b.down) - Math.max(a.up, a.down));
    flipReorder(gridEl, sorted.map(t => t.el));
  }

  return container;

  // --- DOM helpers

  function createTile(t) {
    const card = document.createElement('article');
    card.className = [
      'market-tile relative overflow-hidden p-4 md:p-5',
      'rounded-2xl border border-white/10 bg-slate-800/50 shadow'
    ].join(' ');

    card.innerHTML = `
      <header class="flex items-start">
        <h3 class="text-lg md:text-xl font-semibold tracking-[-0.01em]">${t.sym}</h3>
      </header>

      <div class="mt-2 flex items-center justify-between">
        <span class="inline-flex items-center gap-2">
          <span class="score-up text-green-400 text-base md:text-lg font-semibold"><span>0</span>%</span>
        </span>
        <span class="inline-flex items-center gap-2">
          <span class="score-down text-rose-400 text-base md:text-lg font-semibold"><span>0</span>%</span>
        </span>
      </div>

      <div class="spark mt-3 md:mt-4 rounded-xl bg-white/5 shadow-inset overflow-hidden border border-white/10">
        <svg class="spark-svg block w-full h-[88px] md:h-[104px]" viewBox="0 0 300 104" preserveAspectRatio="none" aria-hidden="true">
          <path class="area-up fill-green-500/30" d="M0,104 L300,104 Z"/>
          <path class="area-down fill-rose-500/30" d="M0,104 L300,104 Z"/>
          <path class="line-up fill-none stroke-green-500/90 stroke-[1.5]" d="M0,104 L300,104"/>
          <path class="line-down fill-none stroke-rose-500/90 stroke-[1.5]" d="M0,104 L300,104"/>
        </svg>
      </div>
    `;

    return card;
  }

  function updateTileVisual(t) {
    // Scores
    t.el.querySelector('.score-up span').textContent   = t.up;
    t.el.querySelector('.score-down span').textContent = t.down;

    // Sparkline
    const svg = t.el.querySelector('.spark-svg');
    const { width, height } = svg.viewBox.baseVal; // 300 × 104
    const upSeries = t.data.map(v => Math.max(v, 0));
    const downSeries = t.data.map(v => v < 0 ? -v : 0);

    const upPath = pathFrom(upSeries, width, height, 8);
    const downPath = pathFrom(downSeries, width, height, 8);
    const upArea = `${upPath} L ${width},${height} L 0,${height} Z`;
    const downArea = `${downPath} L ${width},${height} L 0,${height} Z`;

    const upAreaEl = svg.querySelector('.area-up');
    const upLineEl = svg.querySelector('.line-up');
    const downAreaEl = svg.querySelector('.area-down');
    const downLineEl = svg.querySelector('.line-down');

    upAreaEl.setAttribute('d', upArea);
    upLineEl.setAttribute('d', upPath);
    downAreaEl.setAttribute('d', downArea);
    downLineEl.setAttribute('d', downPath);

    // No caption updates (hover/tap micro-caption removed)
  }

  // --- FLIP reordering animation
  function flipReorder(container, newOrder) {
    const first = new Map([...container.children].map(el => [el, el.getBoundingClientRect()]));
    newOrder.forEach(el => container.appendChild(el));
    const last = new Map([...container.children].map(el => [el, el.getBoundingClientRect()]));
    newOrder.forEach(el => {
      const f = first.get(el), l = last.get(el);
      const dx = f.left - l.left, dy = f.top - l.top;
      el.animate(
        [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'translate(0,0)' }],
        { duration: 450, easing: 'cubic-bezier(.2,.7,.2,1)' }
      );
    });
  }

  // --- utils
  function pathFrom(values, w, h, pad = 8) {
    const step = (w - pad * 2) / (values.length - 1);
    return values.map((v, i) => {
      const x = pad + step * i;
      const y = pad + (1 - v) * (h - pad * 2);
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    }).join(' ');
  }
  function randn(mu = 0, sigma = 1) { return mu + sigma * (Math.random() * 2 - 1); }
  function clamp11(x) { return Math.max(-1, Math.min(1, x)); }
}
