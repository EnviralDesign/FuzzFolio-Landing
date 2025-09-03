import './styles.css';

import HeroSection from './components/hero.js';
import WhyChips from './components/whyChips.js';
import InsideApp from './components/insideApp.js';
import HowItWorks from './components/howItWorks.js';
import SampleMoments from './components/sampleMoments.js';
import PricingPlans from './components/pricingPlans.js';
import FAQAccordion from './components/faqAccordion.js';
import Testimonials from './components/testimonials.js';
import Footer from './components/footer.js';

const app = document.getElementById('app');
[
  // 0) Hero
  HeroSection,
  // 1) Why it works
  WhyChips,
  // 2) Inside the app
  InsideApp,
  // 3) How it works (Build → Validate → Deploy)
  HowItWorks,
  // 4) Sample moments (Telegram)
  SampleMoments,
  // 5) Testimonials
  Testimonials,
  // 6) Plans
  PricingPlans,
  // 7) FAQ
  FAQAccordion,
  // Footer
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

// Header behavior: transparent when at top, frosted on scroll
const siteHeader = document.getElementById('site-header');
const desktopLinks = document.getElementById('desktop-links');

function applyHeaderState() {
  const atTop = window.scrollY < 10;
  if (!siteHeader) return;
  if (atTop) {
    siteHeader.classList.remove('bg-slate-900/80', 'backdrop-blur');
    siteHeader.classList.add('bg-transparent', 'backdrop-blur-0');
    desktopLinks?.classList.add('opacity-0', 'md:pointer-events-none');
    desktopLinks?.classList.remove('opacity-100', 'md:pointer-events-auto');
  } else {
    siteHeader.classList.remove('bg-transparent', 'backdrop-blur-0');
    siteHeader.classList.add('bg-slate-900/80', 'backdrop-blur');
    desktopLinks?.classList.remove('opacity-0', 'md:pointer-events-none');
    desktopLinks?.classList.add('opacity-100', 'md:pointer-events-auto');
  }
}

applyHeaderState();
window.addEventListener('scroll', applyHeaderState, { passive: true });
