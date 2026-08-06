import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, SILK, prefersReducedMotion } from "@/lib/gsap";

/**
 * Reveals every [data-silk] descendant of the returned ref with the shared
 * silk animation (opacity/y/skewY, power4.out, 0.08 stagger).
 */
export function useSilkReveal<T extends HTMLElement = HTMLDivElement>(start = "top 82%") {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>("[data-silk]");
    if (!targets.length) return;

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0, skewY: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, SILK.from, {
        ...SILK.to,
        scrollTrigger: { trigger: el, start, once: true },
      });
    }, el);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [start]);

  return ref;
}

/** Masked-line headline reveal: children slide up from y:110%. */
export function useMaskedLines<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const lines = el.querySelectorAll<HTMLElement>("[data-line]");
    if (!lines.length) return;

    if (prefersReducedMotion()) {
      gsap.set(lines, { yPercent: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.09,
          delay,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return ref;
}
