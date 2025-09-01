export default function FeatureGrid() {
  const section = document.createElement('section');
  section.id = 'features';
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <h2 class="section-title">What FuzzFolio gives you</h2>

      <div class="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-4">
        <!-- Live market view -->
        <div class="card text-center">
          <div class="w-16 aspect-square skeleton rounded mx-auto mb-4" role="img" aria-label="Icon placeholder"><span class="skeleton-label">Icon</span></div>
          <h3 class="font-semibold mb-2">Live market view</h3>
          <p>Clean 5-minute and hourly views with core indicators.</p>
        </div>

        <!-- Real-time alerts -->
        <div class="card text-center">
          <div class="w-16 aspect-square skeleton rounded mx-auto mb-4" role="img" aria-label="Icon placeholder"><span class="skeleton-label">Icon</span></div>
          <h3 class="font-semibold mb-2">Real-time alerts</h3>
          <p>Fuzzy logic rolls indicators into a single score.</p>
        </div>

        <!-- Historical log -->
        <div class="card text-center">
          <div class="w-16 aspect-square skeleton rounded mx-auto mb-4" role="img" aria-label="Icon placeholder"><span class="skeleton-label">Icon</span></div>
          <h3 class="font-semibold mb-2">Historical log</h3>
          <p>Review past setups and export CSVs to validate.</p>
        </div>

        <!-- NEW: Backtesting -->
        <div class="card text-center">
          <div class="w-16 aspect-square skeleton rounded mx-auto mb-4" role="img" aria-label="Icon placeholder"><span class="skeleton-label">Icon</span></div>
          <h3 class="font-semibold mb-2">Backtesting</h3>
          <p>Validate scoring profiles quickly with transparent context.</p>
        </div>
      </div>
    </div>
  `;
  return section;
}
