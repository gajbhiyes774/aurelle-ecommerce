import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { heroImg } from "@/data/products";

export function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-line]",
        { yPercent: 110 },
        { yPercent: 0, duration: 1.4, ease: "power4.out", stagger: 0.1, delay: 0.15 },
      );
      gsap.fromTo(
        "[data-hero-fade]",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power4.out", stagger: 0.08, delay: 0.5 },
      );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=110%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to("[data-hero-frame]", { scale: 0.84, borderRadius: 40, ease: "none" }, 0)
        .to("[data-hero-img]", { scale: 1.15, yPercent: -6, ease: "none" }, 0)
        .to("[data-hero-copy]", { yPercent: -28, opacity: 0.15, ease: "none" }, 0)
        .to("[data-hero-scroll]", { opacity: 0, ease: "none" }, 0);
    }, el);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="home" className="relative h-screen w-full overflow-hidden">
      <div
        data-hero-frame
        className="absolute inset-0 overflow-hidden will-change-transform"
        style={{ borderRadius: 0 }}
      >
        <img
          data-hero-img
          src={heroImg}
          width={1600}
          height={1104}
          alt="Model wearing a flowing ivory silk gown in warm studio light"
          className="size-full object-cover will-change-transform"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, oklch(0.973 0.008 85 / 0.94) 0%, oklch(0.973 0.008 85 / 0.62) 42%, oklch(0.973 0.008 85 / 0.05) 78%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center px-6 lg:px-12">
        <div data-hero-copy className="max-w-2xl will-change-transform">
          <p data-hero-fade className="eyebrow mb-8 text-gold">
            New Season 2026
          </p>

          <h1 className="font-display text-[3.4rem] leading-[0.94] sm:text-[5rem] lg:text-[6.6rem]">
            <span className="mask-line">
              <span data-hero-line className="block">
                Discover
              </span>
            </span>
            <span className="mask-line">
              <span data-hero-line className="block italic">
                Extraordinary.
              </span>
            </span>
          </h1>

          <p
            data-hero-fade
            className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground"
          >
            Experience luxury shopping with premium products curated from the world's finest
            collections.
          </p>

          <div data-hero-fade className="mt-11 flex flex-wrap items-center gap-4">
            <a
              href="#new-arrivals"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-[0.78rem] tracking-[0.2em] text-primary-foreground uppercase transition-all duration-500 hover:gap-5"
            >
              Shop Now
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href="#collections"
              className="hairline inline-flex items-center rounded-full px-8 py-4 text-[0.78rem] tracking-[0.2em] uppercase transition-colors duration-500 hover:bg-blush"
            >
              Explore Collections
            </a>
          </div>
        </div>
      </div>

      <div
        data-hero-scroll
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <span className="eyebrow text-muted-foreground">Scroll</span>
        <div className="mx-auto mt-3 h-10 w-px bg-gold/50" />
      </div>
    </section>
  );
}
