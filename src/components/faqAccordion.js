export default function FAQAccordion() {
  const section = document.createElement('section');
  section.id = 'faq';
  section.className = 'section bg-slate-900';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <span class="kicker">Support</span>
      <h2 class="section-title mt-2"><span class="heading-gradient">FAQ</span></h2>
      <div class="space-y-4 max-w-3xl mx-auto">
        <div class="frame-ghost border-gradient shadow-inset overflow-hidden">
          <button class="w-full text-left px-4 py-3 flex justify-between items-center faq-question focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500/40" aria-expanded="false" aria-controls="faq1">
            <span>Is this financial advice?</span>
            <span class="faq-icon text-xl">+</span>
          </button>
          <div id="faq1" class="px-4 pb-4 hidden faq-answer text-base sm:text-lg leading-relaxed text-white/80" aria-hidden="true">
            No. FuzzFolio provides educational analysis...
          </div>
        </div>
        <div class="frame-ghost border-gradient shadow-inset overflow-hidden">
          <button class="w-full text-left px-4 py-3 flex justify-between items-center faq-question focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500/40" aria-expanded="false" aria-controls="faq2">
            <span>Can I cancel anytime?</span>
            <span class="faq-icon text-xl">+</span>
          </button>
          <div id="faq2" class="px-4 pb-4 hidden faq-answer text-base sm:text-lg leading-relaxed text-white/80" aria-hidden="true">
            Yes, memberships can be cancelled anytime.
          </div>
        </div>
      </div>
    </div>
  `;

  const questions = section.querySelectorAll('.faq-question');
  questions.forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      questions.forEach(q => {
        const ans = section.querySelector(`#${q.getAttribute('aria-controls')}`);
        q.setAttribute('aria-expanded', 'false');
        q.querySelector('.faq-icon').textContent = '+';
        ans.classList.add('hidden');
        ans.setAttribute('aria-hidden', 'true');
      });
      if (!expanded) {
        const answer = section.querySelector(`#${btn.getAttribute('aria-controls')}`);
        btn.setAttribute('aria-expanded', 'true');
        btn.querySelector('.faq-icon').textContent = '–';
        answer.classList.remove('hidden');
        answer.setAttribute('aria-hidden', 'false');
      }
    });
  });

  return section;
}
