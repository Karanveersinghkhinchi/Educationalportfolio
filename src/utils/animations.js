// GSAP animation helpers — used across components
import { gsap, ScrollTrigger } from './scroll';

// Word-split hero text reveal
export function revealHeroText(el, delay = 0) {
  if (!el) return;
  const words = el.querySelectorAll('.word');
  if (!words.length) return;
  gsap.fromTo(
    words,
    { yPercent: 110, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power4.out',
      stagger: 0.08,
      delay,
    }
  );
}

// Clip-path reveal for section headings on scroll
export function revealOnScroll(el, trigger) {
  if (!el) return;
  gsap.fromTo(
    el,
    { clipPath: 'inset(0 0 100% 0)', opacity: 0, y: 24 },
    {
      clipPath: 'inset(0 0 0% 0)',
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || el,
        start: 'top 85%',
        once: true,
      },
    }
  );
}

// Staggered fade-up for grids/cards
export function staggerReveal(els, trigger, stagger = 0.1) {
  if (!els || !els.length) return;
  gsap.fromTo(
    els,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger,
      scrollTrigger: {
        trigger: trigger || els[0],
        start: 'top 85%',
        once: true,
      },
    }
  );
}

// Image scale entrance
export function imageReveal(el, trigger) {
  if (!el) return;
  gsap.fromTo(
    el,
    { scale: 1.08, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || el,
        start: 'top 85%',
        once: true,
      },
    }
  );
}

// Magnetic button effect
export function magneticEffect(btn) {
  if (!btn) return;
  const MAX = 8;
  const onMove = (e) => {
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    gsap.to(btn, { x: dx * MAX, y: dy * MAX, duration: 0.3, ease: 'power2.out' });
  };
  const onLeave = () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.5)' });
  };
  btn.addEventListener('mousemove', onMove);
  btn.addEventListener('mouseleave', onLeave);
  return () => {
    btn.removeEventListener('mousemove', onMove);
    btn.removeEventListener('mouseleave', onLeave);
  };
}

export { ScrollTrigger };
