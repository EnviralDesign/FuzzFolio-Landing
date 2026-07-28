const cardConfigs = [
  ['EURUSD', 'Momentum Alpha', 1001, 0.3],
  ['GBPUSD', 'Trend Following', 1002, -0.4],
  ['USDJPY', 'Mean Reversion', 1003, 0.5],
  ['AUDUSD', 'Breakout Scanner', 1004, -0.2],
  ['XAUUSD', 'RSI Divergence', 1005, 0.6],
  ['GBPJPY', 'MACD Crossover', 1006, -0.5],
  ['EURJPY', 'Scalp Pro', 1007, 0.2],
  ['NZDUSD', 'Volatility Edge', 1008, -0.3],
  ['USDCHF', 'Range Trader', 1009, 0.1],
  ['EURGBP', 'Swing Master', 1010, -0.6],
  ['NAS100', 'Momentum Alpha', 1011, 0.7],
  ['US30', 'Trend Following', 1012, -0.1],
  ['XAGUSD', 'Breakout Scanner', 1013, 0.4],
  ['AUDJPY', 'Mean Reversion', 1014, -0.3],
  ['SPX500', 'RSI Divergence', 1015, 0.5],
  ['CADJPY', 'MACD Crossover', 1016, -0.4],
  ['USDCAD', 'Scalp Pro', 1017, 0.3],
  ['EURAUD', 'Volatility Edge', 1018, -0.2],
  ['CHFJPY', 'Swing Master', 1019, 0.6],
  ['GBPAUD', 'Range Trader', 1020, -0.5],
];

function seededRandom(seed) {
  let state = seed;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

function generateSparkline(random, bias, points = 30) {
  const data = [];
  let value = random() * 8;
  let inBurst = false;
  let burstCountdown = 0;

  for (let i = 0; i < points; i += 1) {
    if (!inBurst) {
      value += (random() - 0.45) * 4;
      value = Math.max(0, Math.min(15, value));
      const burstChance = 0.08 + Math.max(bias, 0) * 0.06;
      if (random() < burstChance) {
        inBurst = true;
        burstCountdown = 2 + Math.floor(random() * 4);
      }
    } else if (burstCountdown > 0) {
      const surge = 15 + random() * 35;
      value = Math.min(100, value + surge * (0.5 + random() * 0.5));
      burstCountdown -= 1;
      if (burstCountdown <= 0) inBurst = false;
    }

    if (!inBurst && value > 15) value *= 0.55 + random() * 0.2;
    data.push(Math.round(Math.max(0, Math.min(100, value))));
  }

  return data;
}

function buildPath(data, width = 220, height = 54, close = false) {
  const step = width / (data.length - 1);
  const points = data.map((value, index) => {
    const x = index * step;
    const y = height - (value / 100) * height;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const line = `M${points[0]} ${points.map((point) => `L${point}`).join(' ')}`;
  return close ? `${line} L${width},${height} L0,${height} Z` : line;
}

function icon(direction) {
  const path = direction === 'up' ? 'M5 15l5-5 4 4 5-6M14 8h5v5' : 'M5 9l5 5 4-4 5 6M14 16h5v-5';
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${path}" /></svg>`;
}

function cardTemplate(card, index) {
  const greenId = `green-${index}`;
  const redId = `red-${index}`;
  return `
    <article class="market-card">
      <div class="market-card-head">
        <strong>${card.pair}</strong>
        <span>${card.profileName}</span>
      </div>
      <div class="market-scores">
        <div class="score score-long"><i>${icon('up')}</i><span>Long ${card.buy}%</span></div>
        <div class="score score-short"><span>Short ${card.sell}%</span><i>${icon('down')}</i></div>
      </div>
      <div class="sparkline">
        <svg viewBox="0 0 220 54" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="${greenId}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#16a34a" stop-opacity=".46" />
              <stop offset="100%" stop-color="#16a34a" stop-opacity=".02" />
            </linearGradient>
            <linearGradient id="${redId}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#e11d48" stop-opacity=".46" />
              <stop offset="100%" stop-color="#e11d48" stop-opacity=".02" />
            </linearGradient>
          </defs>
          <path d="${buildPath(card.longData, 220, 54, true)}" fill="url(#${greenId})" />
          <path d="${buildPath(card.shortData, 220, 54, true)}" fill="url(#${redId})" />
          <path d="${buildPath(card.longData)}" fill="none" stroke="#16a34a" stroke-width="1.6" />
          <path d="${buildPath(card.shortData)}" fill="none" stroke="#e11d48" stroke-width="1.6" />
        </svg>
      </div>
    </article>
  `;
}

function renderMarquee() {
  const root = document.querySelector('[data-marquee]');
  if (!root) return;

  const baseCards = cardConfigs.map(([pair, profileName, seed, longBias]) => {
    const random = seededRandom(seed);
    const longData = generateSparkline(random, Math.max(longBias, 0));
    const shortData = generateSparkline(random, Math.max(-longBias, 0));
    return {
      pair,
      profileName,
      longData,
      shortData,
      buy: longData.at(-1),
      sell: shortData.at(-1),
    };
  });

  const cards = [...baseCards, ...baseCards.slice(0, 8)];
  const columnCount = 4;
  const chunkSize = Math.ceil(cards.length / columnCount);

  root.innerHTML = Array.from({ length: columnCount }, (_, columnIndex) => {
    const columnCards = cards.slice(columnIndex * chunkSize, (columnIndex + 1) * chunkSize);
    return `
      <div class="marquee-column marquee-column-${columnIndex + 1}">
        ${columnCards.map((card, itemIndex) => cardTemplate(card, columnIndex * chunkSize + itemIndex)).join('')}
      </div>
    `;
  }).join('');
}

function setupHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;
  const apply = () => header.classList.toggle('is-scrolled', window.scrollY > 16);
  apply();
  window.addEventListener('scroll', apply, { passive: true });
}

function setupReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 },
  );

  items.forEach((item) => observer.observe(item));
}

function setupContactForm() {
  const form = document.querySelector('[data-contact-form]');
  const status = document.querySelector('[data-form-status]');
  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    if (String(formData.get('website') || '').trim()) return;

    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const interest = String(formData.get('interest') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const subject = `FuzzFolio access request — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Interest: ${interest}`,
      '',
      message,
    ].join('\n');

    status.textContent = 'Opening your email app…';
    window.location.href = `mailto:support@fuzzfolio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => {
      status.textContent = 'Your email app should be open. If not, email support@fuzzfolio.com directly.';
    }, 900);
  });
}

function setupCopyEmail() {
  const button = document.querySelector('[data-copy-email]');
  if (!button) return;

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('support@fuzzfolio.com');
      const original = button.textContent;
      button.textContent = 'Copied';
      window.setTimeout(() => {
        button.textContent = original;
      }, 1400);
    } catch {
      window.location.href = 'mailto:support@fuzzfolio.com';
    }
  });
}

renderMarquee();
setupHeader();
setupReveal();
setupContactForm();
setupCopyEmail();

document.querySelector('[data-year]').textContent = new Date().getFullYear();
