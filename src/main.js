import './styles.css';

import HeroSection from './components/hero.js';
import FeatureGrid from './components/featureGrid.js';
import ShowcaseSection from './components/showcaseSection.js';
import StatisticBanner from './components/statisticBanner.js';
import BacktestingSection from './components/backtestingSection.js';
import PricingPlans from './components/pricingPlans.js';
import FAQAccordion from './components/faqAccordion.js';
import Testimonials from './components/testimonials.js';
import CTASection from './components/ctaSection.js';
import Footer from './components/footer.js';

const app = document.getElementById('app');
[
  HeroSection,
  FeatureGrid,
  ShowcaseSection,
  StatisticBanner,
  BacktestingSection,
  PricingPlans,
  FAQAccordion,
  Testimonials,
  CTASection,
  Footer
].forEach(Component => app.appendChild(Component()));

const btn = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('menu-close');

function openMenu() {
  menu.classList.remove('hidden');
  btn.setAttribute('aria-expanded', 'true');
  document.body.classList.add('overflow-hidden');
}

function closeMenu() {
  menu.classList.add('hidden');
  btn.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('overflow-hidden');
}

btn?.addEventListener('click', openMenu);
closeBtn?.addEventListener('click', closeMenu);
menu?.querySelectorAll('a')?.forEach(link => link.addEventListener('click', closeMenu));
