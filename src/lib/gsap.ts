import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Flip);
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Shared silk reveal tween settings used across every section. */
export const SILK = {
  from: { opacity: 0, y: 60, skewY: 4 },
  to: {
    opacity: 1,
    y: 0,
    skewY: 0,
    duration: 1.1,
    ease: "power4.out",
    stagger: 0.08,
  },
};

export { gsap, ScrollTrigger, Flip };
