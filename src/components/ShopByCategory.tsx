import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";
import { useSilkReveal } from "@/hooks/useSilkReveal";

export function ShopByCategory() {
  const ref = useSilkReveal<HTMLElement>();

  return (
    <section ref={ref} id="categories" className="bg-blush px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1500px]">
        <p data-silk className="eyebrow text-gold">
          Browse
        </p>
        <h2 data-silk className="mt-5 max-w-xl font-display text-[2.6rem] leading-[1] lg:text-[4rem]">
          Shop by category
        </h2>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[240px]">
          {categories.map((c) => (
            <a
              key={c.id}
              href="#shop"
              data-silk
              className={`group relative overflow-hidden rounded-2xl ${c.span}`}
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                width={900}
                height={900}
                className="size-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.12]"
              />
              <div
                className="absolute inset-0 opacity-70 transition-opacity duration-700 group-hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.201 0.011 45 / 0.85) 0%, oklch(0.201 0.011 45 / 0.15) 55%, transparent 100%)",
                }}
              />
              <div className="absolute inset-x-6 bottom-6">
                <h3 className="font-display text-2xl text-ivory">{c.name}</h3>
                <p className="mt-1 text-xs text-ivory/70">{c.count} products</p>
                <span className="mt-4 inline-flex translate-y-3 items-center gap-2 rounded-full bg-gold px-5 py-2 text-[0.65rem] tracking-[0.2em] text-accent-foreground uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Explore
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
