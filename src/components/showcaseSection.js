export default function ShowcaseSection() {
  const section = document.createElement('section');
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <span class="kicker">Showcase</span>
      <h2 class="section-title mt-2"><span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">FuzzFolio</span> in action</h2>
      <div class="grid md:grid-cols-2 gap-x-6 gap-y-8">
        <div class="frame shadow-elevated relative p-6 sm:p-8 motion-safe:animate-fade-up [animation-delay:0s] bg-[radial-gradient(circle_at_100%_0%,rgba(236,72,153,0.15),transparent_70%),radial-gradient(circle_at_0%_100%,rgba(168,85,247,0.15),transparent_70%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
          <h3 class="text-2xl font-semibold mb-3">Clean multi-TF view</h3>
          <div class="skeleton rounded-2xl aspect-[4/3]" role="img" aria-label="Multi-timeframe preview">
            <span class="skeleton-label">4:3</span>
          </div>
        </div>
        <div class="frame shadow-elevated relative p-6 sm:p-8 motion-safe:animate-fade-up [animation-delay:0.1s] bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_70%),radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.15),transparent_70%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
          <h3 class="text-2xl font-semibold mb-3">Score timeline</h3>
          <div class="skeleton rounded-2xl aspect-[4/3]" role="img" aria-label="Score timeline preview">
            <span class="skeleton-label">4:3</span>
          </div>
        </div>
        <div class="frame shadow-elevated relative p-6 sm:p-8 motion-safe:animate-fade-up [animation-delay:0.2s] bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.15),transparent_70%),radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.15),transparent_70%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
          <h3 class="text-2xl font-semibold mb-3">Profile weights</h3>
          <div class="skeleton rounded-2xl aspect-[4/3]" role="img" aria-label="Profile weights preview">
            <span class="skeleton-label">4:3</span>
          </div>
        </div>
        <div class="frame shadow-elevated relative p-6 sm:p-8 motion-safe:animate-fade-up [animation-delay:0.3s] bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_70%),radial-gradient(circle_at_0%_0%,rgba(236,72,153,0.15),transparent_70%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
          <h3 class="text-2xl font-semibold mb-3">Setup detail</h3>
          <div class="skeleton rounded-2xl aspect-[4/3]" role="img" aria-label="Setup detail preview">
            <span class="skeleton-label">4:3</span>
          </div>
        </div>
      </div>
    </div>
  `;
  return section;
}

// NOT IN USE: This section is currently not used in the landing flow.
