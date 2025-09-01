export default function HeroSection() {
  const section = document.createElement('section');
  section.className = 'section relative text-white';
  section.innerHTML = `
    <div class="absolute inset-0 overflow-hidden">
      <img src="https://via.placeholder.com/1600x900" alt="" class="w-full h-full object-cover opacity-60" />
      <div class="absolute inset-0 bg-gradient-to-r from-black via-purple-900/50 to-black"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
      <div class="flex-1">
        <h1 class="text-4xl md:text-5xl font-bold">See <span class="text-purple-400">clean setups</span>.<br>Trade on your terms.</h1>
        <p class="mt-4 max-w-md">FuzzFolio helps you identify optimal trading setups...</p>
        <div class="mt-8 flex gap-4">
          <a href="#" class="btn-primary">Join Free Setup Radar</a>
          <a href="#" class="btn-secondary">Sample a setup</a>
        </div>
      </div>
      <div class="flex-1 mt-10 lg:mt-0 grid grid-cols-3 gap-4">
        <div class="card h-32"></div>
        <div class="card h-32"></div>
        <div class="card h-32"></div>
      </div>
    </div>
  `;
  return section;
}
