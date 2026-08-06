import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { trending } from "@/data/products";

export function TrendingCollections() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const track = el.querySelector<HTMLElement>("[data-track]");
      if (!track) return;
      const distance = () => track.scrollWidth - window.innerWidth + 96;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(track, { x: () => -distance(), ease: "none" }, 0).to(
        "[data-progress]",
        { scaleX: 1, ease: "none" },
        0,
      );

      gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((card, i) => {
        gsap.to(card.querySelector("img"), {
          xPercent: i % 2 === 0 ? -8 : 8,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: 1.4,
          },
        });
      });
    }, el);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="deals" className="relative h-screen overflow-hidden bg-blush">
      <div className="absolute inset-x-6 top-24 z-10 flex items-end justify-between lg:inset-x-12">
        <div>
          <p className="eyebrow text-gold">Trending Now</p>
          <h2 className="mt-4 font-display text-[2rem] leading-none lg:text-[3rem]">
            Trending collections
          </h2>
        </div>
        <span className="hidden text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase lg:block">
          Scroll →
        </span>
      </div>

      <div className="flex h-full items-center">
        <div data-track className="flex gap-8 pr-24 pl-6 will-change-transform lg:pl-12">
          {trending.map((t) => (
            <figure
              key={t.id}
              data-drift
              className="relative h-[58vh] w-[76vw] shrink-0 overflow-hidden rounded-3xl shadow-soft sm:w-[46vw] lg:w-[34vw]"
            >
              <img
                src={t.image}
                alt={t.title}
                loading="lazy"
                width={1000}
                height={1300}
                className="size-[115%] -translate-x-[6%] object-cover"
              />
              <figcaption className="glass absolute inset-x-5 bottom-5 rounded-2xl px-6 py-4">
                <p className="font-display text-lg">{t.title}</p>
                <p className="mt-1 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {t.meta}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-6 bottom-14 h-px bg-foreground/12 lg:inset-x-12">
        <span
          data-progress
          className="block h-full origin-left scale-x-0 bg-gold"
          aria-hidden
        />
      </div>
    </section>
  );
}
