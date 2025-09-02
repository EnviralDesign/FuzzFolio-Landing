export default function ShowcaseSection() {
  const section = document.createElement('section');
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <span class="kicker">Showcase</span>
      <h2 class="section-title mt-2"><span class="heading-gradient">FuzzFolio</span> in action</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="frame border-gradient card-bg-gradient shadow-elevated relative p-5 sm:p-6 motion-safe:animate-fade-up" style="animation-delay:0s">
          <h3 class="text-lg font-semibold mb-3">Clean multi-TF view</h3>
          <div class="skeleton rounded-2xl aspect-[4/3]" role="img" aria-label="Multi-timeframe preview">
            <span class="skeleton-label">4:3</span>
          </div>
        </div>
        <div class="frame border-gradient card-bg-gradient shadow-elevated relative p-5 sm:p-6 motion-safe:animate-fade-up" style="animation-delay:0.1s">
          <h3 class="text-lg font-semibold mb-3">Score timeline</h3>
          <div class="skeleton rounded-2xl aspect-[4/3]" role="img" aria-label="Score timeline preview">
            <span class="skeleton-label">4:3</span>
          </div>
        </div>
        <div class="frame border-gradient card-bg-gradient shadow-elevated relative p-5 sm:p-6 motion-safe:animate-fade-up" style="animation-delay:0.2s">
          <h3 class="text-lg font-semibold mb-3">Profile weights</h3>
          <div class="skeleton rounded-2xl aspect-[4/3]" role="img" aria-label="Profile weights preview">
            <span class="skeleton-label">4:3</span>
          </div>
        </div>
        <div class="frame border-gradient card-bg-gradient shadow-elevated relative p-5 sm:p-6 motion-safe:animate-fade-up" style="animation-delay:0.3s">
          <h3 class="text-lg font-semibold mb-3">Setup detail</h3>
          <div class="skeleton rounded-2xl aspect-[4/3]" role="img" aria-label="Setup detail preview">
            <span class="skeleton-label">4:3</span>
          </div>
        </div>
      </div>
    </div>
  `;
  return section;
}

