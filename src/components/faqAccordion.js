export default function FAQAccordion() {
  const section = document.createElement('section');
  section.id = 'faq';
  section.className = 'section bg-slate-900';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <span class="kicker">Support</span>
      <h2 class="section-title mt-2">FAQ</h2>
      <div class="space-y-4 max-w-3xl mx-auto">
        <div class="frame frame-ghost overflow-hidden">
          <button class="w-full text-left px-4 py-3 flex justify-between items-center faq-question focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500/40" aria-expanded="false" aria-controls="faq1">
            <span>Is this financial advice?</span>
            <span class="faq-icon text-xl">+</span>
          </button>
          <div id="faq1" class="px-4 pb-4 hidden faq-answer" aria-hidden="true">
            No. FuzzFolio provides educational analysis...
          </div>
        </div>
        <div class="frame frame-ghost overflow-hidden">
          <button class="w-full text-left px-4 py-3 flex justify-between items-center faq-question focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500/40" aria-expanded="false" aria-controls="faq2">
            <span>Can I cancel anytime?</span>
            <span class="faq-icon text-xl">+</span>
          </button>
          <div id="faq2" class="px-4 pb-4 hidden faq-answer" aria-hidden="true">
            Yes, memberships can be cancelled anytime.
          </div>
        </div>
      </div>
    </div>
  `;

  section.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const open = answer.classList.toggle('hidden') === false;
      btn.querySelector('.faq-icon')?.replaceChildren(document.createTextNode(open ? '–' : '+'));
      btn.setAttribute('aria-expanded', String(open));
      answer.setAttribute('aria-hidden', String(!open));
    });
  });

  return section;
}
