export default function FAQAccordion() {
  const section = document.createElement('section');
  section.id = 'faq';
  section.className = 'section bg-slate-900';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="section-title">FAQ</h2>
      <div class="space-y-4">
        <div class="border border-gray-700 rounded">
          <button class="w-full text-left px-4 py-3 flex justify-between items-center faq-question" aria-expanded="false" aria-controls="faq1">
            <span>Is this financial advice?</span>
            <span class="toggle-icon text-xl">+</span>
          </button>
          <div id="faq1" class="px-4 pb-4 hidden faq-answer" aria-hidden="true">No. FuzzFolio provides educational analysis...</div>
        </div>
        <div class="border border-gray-700 rounded">
          <button class="w-full text-left px-4 py-3 flex justify-between items-center faq-question" aria-expanded="false" aria-controls="faq2">
            <span>Can I cancel anytime?</span>
            <span class="toggle-icon text-xl">+</span>
          </button>
          <div id="faq2" class="px-4 pb-4 hidden faq-answer" aria-hidden="true">Yes, memberships can be cancelled anytime.</div>
        </div>
      </div>
    </div>
  `;

  section.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      answer.classList.toggle('hidden');
      answer.setAttribute('aria-hidden', String(expanded));
      const icon = btn.querySelector('.toggle-icon');
      icon.textContent = expanded ? '+' : '–';
    });
  });

  return section;
}
