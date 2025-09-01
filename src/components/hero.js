export default function HeroSection() {
  const section = document.createElement('section');
  section.className = 'section relative text-white bg-hero-gradient';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad flex flex-col lg:flex-row items-center">
      <div class="flex-1">
        <h1 class="text-4xl sm:text-6xl md:text-7xl font-bold">See <span class="text-purple-400">clean setups</span>.<br/>Trade on your terms.</h1>
        <p class="mt-4 max-w-md">FuzzFolio helps you identify optimal trading setups with AI-powered analysis...</p>
        <div class="mt-8 flex gap-4">
          <a href="#" class="btn-primary">Join Free Setup Radar</a>
          <a href="#" class="btn-secondary">Sample a setup</a>
        </div>
      </div>
      <div class="flex-1 mt-8 lg:mt-0">
        <div class="grid grid-cols-3 gap-3 sm:gap-4 w-full">
          <div class="skeleton rounded-xl aspect-[9/16] sm:aspect-[3/5] md:aspect-[4/5]" role="img" aria-label="9:16 tile"><span class="skeleton-label">9:16 tile</span></div>
          <div class="skeleton rounded-xl aspect-[9/16] sm:aspect-[3/5] md:aspect-[4/5]" role="img" aria-label="9:16 tile"><span class="skeleton-label">9:16 tile</span></div>
          <div class="skeleton rounded-xl aspect-[9/16] sm:aspect-[3/5] md:aspect-[4/5]" role="img" aria-label="9:16 tile"><span class="skeleton-label">9:16 tile</span></div>
        </div>
      </div>
    </div>
  `;
  return section;
}
