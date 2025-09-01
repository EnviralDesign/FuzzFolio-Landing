export default function CTASection() {
  const section = document.createElement('section');
  section.id = 'cta';
  section.className = 'section bg-gradient-to-r from-purple-600 to-pink-600 text-center';
  section.innerHTML = `
    <h2 class="text-3xl font-bold mb-6">Ready to see clean setups?</h2>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="#" class="btn-primary">Join Free Setup Radar</a>
      <a href="#" class="btn-secondary">Become an Early Access Member</a>
    </div>
    <p class="mt-4 text-sm text-white/80">No credit card required.</p>
  `;
  return section;
}
