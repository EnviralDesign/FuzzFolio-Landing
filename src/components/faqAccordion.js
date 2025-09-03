export default function FAQAccordion() {
  const section = document.createElement('section');
  section.id = 'faq';
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <span class="kicker">Support</span>
      <h2 class="section-title mt-2"><span class="bg-gradient-to-b from-white to-slate-300/90 bg-clip-text text-transparent">FAQ</span></h2>
      <div class="space-y-4 max-w-3xl mx-auto">
        <div class="frame-ghost shadow-inset overflow-hidden">
          <button class="w-full text-left px-4 py-3 flex justify-between items-center faq-question border-b border-white/10 focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500/40" aria-expanded="false" aria-controls="faq1">
            <span>Is this financial advice?</span>
            <span class="faq-icon text-2xl">+</span>
          </button>
          <div id="faq1" class="faq-answer px-4 pb-4 text-base sm:text-lg leading-relaxed text-white/80 max-h-0 overflow-hidden transition-[max-height] duration-300 hidden" aria-hidden="true">
            No. FuzzFolio provides educational analysis...
          </div>
        </div>
        <div class="frame-ghost shadow-inset overflow-hidden">
          <button class="w-full text-left px-4 py-3 flex justify-between items-center faq-question border-b border-white/10 focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500/40" aria-expanded="false" aria-controls="faq2">
            <span>Can I cancel anytime?</span>
            <span class="faq-icon text-2xl">+</span>
          </button>
          <div id="faq2" class="faq-answer px-4 pb-4 text-base sm:text-lg leading-relaxed text-white/80 max-h-0 overflow-hidden transition-[max-height] duration-300 hidden" aria-hidden="true">
            Yes, memberships can be cancelled anytime.
          </div>
        </div>
      </div>
    </div>
  `;
  const answers = section.querySelectorAll('.faq-answer');
  answers.forEach(a => {
    a.style.maxHeight = '0px';
  });

  section.addEventListener('click', e => {
    const btn = e.target.closest('.faq-question');
    if (!btn) return;
    const answer = section.querySelector(`#${btn.getAttribute('aria-controls')}`);
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    // close others
    section.querySelectorAll('.faq-question').forEach(q => {
      const a = section.querySelector(`#${q.getAttribute('aria-controls')}`);
      q.setAttribute('aria-expanded', 'false');
      q.querySelector('.faq-icon').textContent = '+';
      a.style.maxHeight = '0px';
      a.setAttribute('aria-hidden', 'true');
      a.classList.add('hidden');
    });
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      btn.querySelector('.faq-icon').textContent = '–';
      answer.classList.remove('hidden');
      const fullHeight = answer.scrollHeight;
      answer.style.maxHeight = `${fullHeight}px`;
      answer.setAttribute('aria-hidden', 'false');
    }
  });

  return section;
}
