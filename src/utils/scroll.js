// Smooth scroll initializer using Lenis + GSAP ticker
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis = null;

export function initLenis() {
  // Skip on mobile — native scroll is better
  if (window.matchMedia('(max-width: 768px)').matches) return null;

  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
  });

  // Connect Lenis to GSAP ticker
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // Sync with ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  return lenis;
}

export function destroyLenis() {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
}

export { gsap, ScrollTrigger };
