import './styles.css';

import HeroSection from './components/hero.js';
import PersonaTabs from './components/personaTabs.js';
import FeatureGrid from './components/featureGrid.js';
import StatisticBanner from './components/statisticBanner.js';
import BacktestingSection from './components/backtestingSection.js';
import HowItWorks from './components/howItWorks.js';
import PricingPlans from './components/pricingPlans.js';
import Testimonials from './components/testimonials.js';
import FAQAccordion from './components/faqAccordion.js';
import CTASection from './components/ctaSection.js';
import Footer from './components/footer.js';

const app = document.getElementById('app');
[
  HeroSection,
  PersonaTabs,
  FeatureGrid,
  StatisticBanner,
  BacktestingSection,
  HowItWorks,
  PricingPlans,
  Testimonials,
  FAQAccordion,
  CTASection,
  Footer
].forEach(Component => app.appendChild(Component()));

const btn = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
btn?.addEventListener('click', () => {
  const open = menu.classList.toggle('hidden');
  btn.setAttribute('aria-expanded', String(!open));
});
