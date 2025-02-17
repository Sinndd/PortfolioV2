import Lenis from '@studio-freight/lenis';

const lenis: Lenis | null = typeof window !== 'undefined' ? new Lenis({
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
}) : null;

if (lenis) {

  function raf(time: number) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

export default lenis;