// src/components/marketSim.js
export default function MarketSim({ symbols = ['AUDUSD','GBPUSD','EURUSD','USDJPY'], points = 60, intervalMs = 1000 } = {}) {
  const wrap = document.createElement('div');
  wrap.className = 'market-grid grid grid-cols-2 gap-4 md:gap-5';

  // --- State per tile
  const tiles = symbols.map(sym => {
    const data = Array.from(
      { length: points },
      (_, i) => clamp11(0.5 * Math.sin(i / 6) + randn(0, 0.3))
    );
    return { sym, data, el: null, up: 0, down: 0 };
  });

  tiles.forEach(t => { t.el = createTile(t); wrap.appendChild(t.el); updateTileVisual(t); });

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
      const next = clamp11(last + randn(0, 0.3));
      t.data.push(next); t.data.shift();

      // Derive long/short scores from shared value
      t.up   = Math.round(Math.max(next, 0) * 100);
      t.down = Math.round(Math.max(-next, 0) * 100);

      updateTileVisual(t);
    });

    // Sort (highest opportunity first)
    const sorted = [...tiles].sort((a,b) => Math.max(b.up, b.down) - Math.max(a.up, a.down));
    flipReorder(wrap, sorted.map(t => t.el));
  }

  return wrap;

  // --- DOM helpers

  function createTile(t) {
    const card = document.createElement('article');
    card.className = [
      'market-tile frame border-gradient card-bg-gradient corner-glow relative overflow-hidden p-4 md:p-5',
      'rounded-2xl'
    ].join(' ');

    card.innerHTML = `
      <header class="flex items-start justify-between">
        <h3 class="text-lg md:text-xl font-semibold tracking-[-0.01em]">${t.sym}</h3>
        <span class="inline-flex items-center text-white/60 text-sm"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 3h7v7h-2V6.41l-5.3 5.3-1.4-1.42 5.3-5.3H14V3zM5 5h7v2H7.41l5.3 5.3-1.42 1.4-5.3-5.3V12H5V5z"/></svg></span>
      </header>

      <div class="mt-2 flex items-center justify-between">
        <span class="inline-flex items-center gap-2">
          <span class="score-up text-white/80 text-base md:text-lg font-semibold"><span>0</span>%</span>
        </span>
        <span class="inline-flex items-center gap-2">
          <span class="score-down text-rose-400 text-base md:text-lg font-semibold"><span>0</span>%</span>
        </span>
      </div>

      <div class="spark mt-3 md:mt-4 rounded-xl bg-white/5 shadow-inset overflow-hidden border border-white/10">
        <svg class="spark-svg block w-full h-[72px] md:h-[88px]" viewBox="0 0 300 88" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="upGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="rgba(34,197,94,0.8)"/>
              <stop offset="100%" stop-color="rgba(34,197,94,0.0)"/>
            </linearGradient>
            <linearGradient id="downGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="rgba(244,63,94,0.8)"/>
              <stop offset="100%" stop-color="rgba(244,63,94,0.0)"/>
            </linearGradient>
          </defs>
          <path class="area-up" fill="url(#upGrad)" d="M0,88 L300,88 Z"/>
          <path class="area-down" fill="url(#downGrad)" d="M0,88 L300,88 Z"/>
          <path class="line-up" fill="none" stroke="rgba(34,197,94,0.9)" stroke-width="1.5" d="M0,88 L300,88"/>
          <path class="line-down" fill="none" stroke="rgba(244,63,94,0.9)" stroke-width="1.5" d="M0,88 L300,88"/>
        </svg>
      </div>

      <footer class="mt-3 text-[13px] text-white/60">about 3 hours</footer>
    `;
    return card;
  }

  function updateTileVisual(t) {
    // Scores
    t.el.querySelector('.score-up span').textContent   = t.up;
    t.el.querySelector('.score-down span').textContent = t.down;

    // Sparkline
    const svg = t.el.querySelector('.spark-svg');
    const { width, height } = svg.viewBox.baseVal; // 300 × 88
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
