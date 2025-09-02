export default function CTASection() {
  const section = document.createElement('section');
  section.id = 'cta';
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-4xl mx-auto container-pad">
      <div class="frame border-gradient card-bg-gradient p-8 text-center relative corner-glow" style="background-image:
        radial-gradient(120% 90% at 0% 0%, rgba(168,85,247,.25), transparent 60%),
        radial-gradient(120% 90% at 100% 0%, rgba(236,72,153,.20), transparent 55%);">
        <span class="kicker">Join</span>
        <h2 class="text-3xl sm:text-4xl font-bold mt-2">Ready to see <span class="heading-gradient">clean setups</span>?</h2>
        <div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" class="cta-primary cta-pill cta-animated">Get setups</a>
          <a href="#" class="cta-secondary cta-pill">Join on Telegram</a>
        </div>
        <p class="mt-3 text-sm text-white/70">No credit card required</p>
      </div>
    </div>
  `;
  return section;
}
