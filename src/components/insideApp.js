// Auto-discover media derivatives in src/media and src/media/derivs/**
const mediaMap = import.meta.glob('../media/**/*.{png,webp}', { eager: true, as: 'url' });

function byWidthAsc(a, b) { return a.w - b.w; }
function parseWidthFromName(path) {
  // supports .../<prefix>-640.webp and .../derivs/<prefix>/640.webp
  const m = path.match(/(?:-|\/)(\d+)\.(?:png|webp)$/);
  return m ? parseInt(m[1], 10) : undefined;
}
function matchesPrefix(path, prefix) {
  return path.includes(`/media/${prefix}-`) || path.includes(`/media/derivs/${prefix}/`);
}
function collectSrcset(prefix, ext) {
  const entries = Object.entries(mediaMap)
    .filter(([p]) => matchesPrefix(p, prefix) && p.endsWith(`.${ext}`))
    .map(([p, url]) => ({ w: parseWidthFromName(p) || 0, url }))
    .filter(x => x.w > 0)
    .sort(byWidthAsc);
  const srcset = entries.map(e => `${e.url} ${e.w}w`).join(', ');
  const fallback = entries.length ? entries[entries.length - 1].url : mediaMap[`../media/${prefix}.png`];
  return { srcset, fallback };
}
function pictureHTML(prefix, sizes, alt) {
  const webp = collectSrcset(prefix, 'webp');
  const png = collectSrcset(prefix, 'png');
  const fallback = png.fallback || webp.fallback || mediaMap[`../media/${prefix}.png`];
  return `
    <picture>
      ${webp.srcset ? `<source type="image/webp" srcset="${webp.srcset}" sizes="${sizes}">` : ''}
      ${png.srcset ? `<source type="image/png" srcset="${png.srcset}" sizes="${sizes}">` : ''}
      <img src="${fallback}" alt="${alt}" loading="lazy" decoding="async" class="w-full h-full object-cover" />
    </picture>
  `;
}

export default function InsideApp() {
  const section = document.createElement('section');
  section.id = 'inside';
  section.className = 'section px-6 md:px-8 py-24 md:py-28';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-center">Inside the <span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">app</span></h2>

      <div class="mt-10 grid grid-cols-12 gap-8 md:gap-10">
        <!-- Top row: one big full-width dashboard -->
        <div class="col-span-12">
          <figure class="aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)]">
            ${pictureHTML('dashboard', '(min-width:1024px) 80rem, 100vw', 'Dashboard preview showing ranked market tiles with scores and sparklines.')}
          </figure>
          <figcaption class="mt-2 text-sm text-white/70"><span class="font-semibold text-white">Dashboard</span> — Ranked tiles; instrument × profile; one score + short history.</figcaption>
        </div>

        <!-- Bottom row: two halves -->
        <div class="col-span-12 lg:col-span-6">
          <figure class="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)]">
            ${pictureHTML('builder', '(min-width:1024px) 40rem, 100vw', 'Profile Builder with indicator rules, fuzzy thresholds, and weights.')}
          </figure>
          <figcaption class="mt-2 text-sm text-white/70"><span class="font-semibold text-white">Builder</span> — Indicators, fuzzy rules, weights.</figcaption>
        </div>

        <div class="col-span-12 lg:col-span-6">
          <figure class="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)]">
            ${pictureHTML('backtesting', '(min-width:1024px) 40rem, 100vw', 'Backtesting panel showing expected behavior over recent history.')}
          </figure>
          <figcaption class="mt-2 text-sm text-white/70"><span class="font-semibold text-white">Backtesting</span> — Run while editing; compare variants fast; deploy when ready.</figcaption>
        </div>
      </div>
    </div>
  `;
  return section;
}
