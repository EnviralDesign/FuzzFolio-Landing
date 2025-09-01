export default function FeatureGrid() {
  const section = document.createElement('section');
  section.id = 'features';
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="section-title">What FuzzFolio gives you</h2>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="card text-center transform transition hover:-translate-y-0.5">
          <div class="w-16 h-16 skeleton rounded mx-auto mb-4" role="img" aria-label="Icon placeholder"><span class="skeleton-label">Icon</span></div>
          <h3 class="font-semibold mb-2">Live market view</h3>
          <p>See clean 5-minute and hourly views with core indicators.</p>
        </div>
        <div class="card text-center transform transition hover:-translate-y-0.5">
          <div class="w-16 h-16 skeleton rounded mx-auto mb-4" role="img" aria-label="Icon placeholder"><span class="skeleton-label">Icon</span></div>
          <h3 class="font-semibold mb-2">Real-time alerts</h3>
          <p>Fuzzy logic rolls indicators into a single score.</p>
        </div>
        <div class="card text-center transform transition hover:-translate-y-0.5">
          <div class="w-16 h-16 skeleton rounded mx-auto mb-4" role="img" aria-label="Icon placeholder"><span class="skeleton-label">Icon</span></div>
          <h3 class="font-semibold mb-2">Historical log</h3>
          <p>Review past setups and export CSVs to validate.</p>
        </div>
      </div>
    </div>
  `;
  return section;
}
