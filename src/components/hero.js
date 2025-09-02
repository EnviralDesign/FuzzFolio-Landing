export default function HeroSection() {
  const section = document.createElement('section');
  section.className = 'section relative bg-hero-gradient';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <span class="kicker">FuzzFolio</span>
        <h1 class="mt-3 text-6xl md:text-7xl font-extrabold leading-tight">
          <span class="heading-gradient">See clean setups.</span><br/>Trade on <span class="heading-gradient">your terms</span>.
        </h1>
        <p class="mt-4 max-w-md text-base sm:text-lg leading-relaxed text-white/80">FuzzFolio helps you identify optimal trading setups...</p>
        <div class="mt-8 flex gap-3">
          <a href="#" class="cta-primary cta-pill border-gradient cta-animated">Get setups</a>
          <a href="#" class="cta-secondary cta-pill">Join on Telegram</a>
        </div>
        <p class="mt-2 text-sm text-white/70 text-center max-w-xs mx-auto">Updates via Telegram, no spam</p>
      </div>
      <div>
        <div class="grid grid-cols-3 gap-3">
          <div class="skeleton rounded-xl aspect-[9/16]" role="img" aria-label="Demo tile"><span class="skeleton-label">9:16</span></div>
          <div class="skeleton rounded-xl aspect-[9/16]" role="img" aria-label="Demo tile"><span class="skeleton-label">9:16</span></div>
          <div class="skeleton rounded-xl aspect-[9/16]" role="img" aria-label="Demo tile"><span class="skeleton-label">9:16</span></div>
        </div>
      </div>
    </div>
  `;
  return section;
}
