export default function SampleMoments() {
  const section = document.createElement('section');
  section.id = 'moments';
  section.className = 'section py-20 md:py-24';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-center">Sample <span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">moments</span></h2>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        ${[0,1,2].map((i,idx)=>`
          <article tabindex="0" class="group p-6 rounded-2xl border border-white/10 bg-slate-800/50 text-left transition-all duration-200 hover:-translate-y-[2px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/10 motion-safe:animate-fade-up [animation-delay:${idx*0.02}s]">
            <div class="skeleton rounded-xl aspect-[4/3]" role="img" aria-label="Telegram moment preview">
              <span class="skeleton-label">moment</span>
            </div>
            <p class="mt-3 text-[15px] leading-snug text-white/80">A recent real-time ranking moment with context.</p>
          </article>
        `).join('')}
      </div>

      <div class="mt-8 text-center">
        <a href="#" class="cta-secondary cta-pill">See sample moments (Telegram)</a>
      </div>
    </div>
  `;
  return section;
}
