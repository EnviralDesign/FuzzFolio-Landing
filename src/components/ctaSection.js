export default function CTASection() {
  const section = document.createElement('section');
  section.id = 'cta';
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="frame p-8 text-center bg-[radial-gradient(120%_90%_at_0%_0%,rgba(168,85,247,.25),transparent_60%),radial-gradient(120%_90%_at_100%_0%,rgba(236,72,153,.20),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
        <span class="kicker">Join</span>
        <h2 class="text-4xl md:text-5xl font-bold mt-2">Ready to see <span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">clean setups</span>?</h2>
        <div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" class="cta-primary cta-pill bg-gradient-to-r from-purple-600 to-pink-500">Get setups</a>
          <a href="#" class="cta-secondary cta-pill">Join on Telegram</a>
        </div>
        <p class="mt-3 text-sm text-white/70 max-w-sm mx-auto">No credit card required</p>
        <p class="mt-1 text-sm text-white/70 max-w-sm mx-auto">Updates via Telegram, no spam</p>
      </div>
    </div>
  `;
  return section;
}
