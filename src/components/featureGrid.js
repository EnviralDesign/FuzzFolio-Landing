export default function FeatureGrid() {
  const section = document.createElement('section');
  section.id = 'features';
  section.className = 'section';
  section.innerHTML = `
    <div class="max-w-7xl mx-auto container-pad">
      <div class="frame frame-glow p-6 sm:p-8">
        <span class="kicker">Platform</span>
        <h2 class="section-title mt-2">What FuzzFolio gives you</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <!-- Live market view -->
        <article class="card text-center">
          <div class="w-16 aspect-square skeleton rounded mx-auto mb-4" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
          <h3 class="font-semibold mb-2">Live market view</h3>
          <p>Clean 5-minute and hourly views with core indicators.</p>
        </article>

        <!-- Real-time alerts -->
        <article class="card text-center">
          <div class="w-16 aspect-square skeleton rounded mx-auto mb-4" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
          <h3 class="font-semibold mb-2">Real-time alerts</h3>
          <p>Fuzzy logic combines indicators into one score.</p>
        </article>

        <!-- Historical log -->
        <article class="card text-center">
          <div class="w-16 aspect-square skeleton rounded mx-auto mb-4" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
          <h3 class="font-semibold mb-2">Historical log</h3>
          <p>Review past setups and export CSVs to validate.</p>
        </article>

        <!-- Backtesting -->
        <article class="card text-center">
          <div class="w-16 aspect-square skeleton rounded mx-auto mb-4" role="img" aria-label="Icon"><span class="skeleton-label">Icon</span></div>
          <h3 class="font-semibold mb-2">Backtesting</h3>
          <p>Validate scoring profiles quickly with transparent context.</p>
        </article>
        </div>
      </div>
    </div>
  `;
  return section;
}
