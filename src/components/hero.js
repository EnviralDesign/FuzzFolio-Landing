export default function HeroSection() {
  const section = document.createElement('section');
  section.className = 'section relative bg-hero-gradient';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <span class="kicker">FuzzFolio</span>
        <h1 class="mt-3 text-4xl md:text-6xl font-bold">
          <span class="heading-gradient">See clean setups.</span><br/>Trade on your terms.
        </h1>
        <p class="mt-4 max-w-md">FuzzFolio helps you identify optimal trading setups...</p>
        <div class="mt-8 flex gap-3">
          <a href="#" class="cta-primary cta-pill">Get Setups</a>
          <a href="#" class="cta-secondary cta-pill">Join on Telegram</a>
        </div>
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
