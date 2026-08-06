import { Instagram } from "lucide-react";
import { instagramImages } from "@/data/products";

export function InstagramMarquee() {
  const row = [...instagramImages, ...instagramImages];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="flex">
        <div
          className="marquee-track flex min-w-max gap-5 pr-5"
          style={{ "--marquee-duration": "55s" } as React.CSSProperties}
        >
          {row.map((src, i) => (
            <figure
              key={i}
              className="group size-[240px] shrink-0 overflow-hidden rounded-2xl lg:size-[300px]"
            >
              <img
                src={src}
                alt="Aurelle product photography"
                loading="lazy"
                width={600}
                height={600}
                className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-115"
              />
            </figure>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4">
        <span className="glass pointer-events-auto rounded-full px-7 py-3 text-[0.65rem] tracking-[0.28em] uppercase shadow-float">
          @aurelle.official
        </span>
        <a
          href="#top"
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[0.65rem] tracking-[0.24em] text-primary-foreground uppercase"
        >
          <Instagram className="size-3.5" strokeWidth={1.5} />
          Follow Us
        </a>
      </div>
    </section>
  );
}
