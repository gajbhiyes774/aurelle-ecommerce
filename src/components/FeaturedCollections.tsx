import { useEffect, useRef, useState } from "react";
import { Star, Plus } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { collections, products, formatINR } from "@/data/products";
import { useShop } from "@/context/ShopContext";

export function FeaturedCollections() {
  const root = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const { addToCart } = useShop();

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>("[data-slide]");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${slides.length * 90}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.min(
              slides.length - 1,
              Math.floor(self.progress * slides.length * 0.999),
            );
            setActive(idx);
          },
        },
      });

      slides.forEach((slide, i) => {
        if (i === 0) return;
        tl.to(
          slides[i - 1]!,
          { opacity: 0, xPercent: -14, filter: "blur(14px)", ease: "power2.inOut" },
          i - 1,
        ).fromTo(
          slide,
          { opacity: 0, scale: 0.85, rotateY: 12, filter: "blur(10px)" },
          { opacity: 1, scale: 1, rotateY: 0, filter: "blur(0px)", ease: "power3.out" },
          i - 1 + 0.25,
        );
      });
    }, el);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  const collection = collections[active]!;
  const product = products.find((p) => p.id === collection.productId)!;

  return (
    <section
      ref={root}
      id="collections"
      className="relative h-screen w-full overflow-hidden transition-colors duration-1000"
      style={{ backgroundColor: collection.tint }}
    >
      <div className="mx-auto grid h-full max-w-[1500px] grid-cols-1 items-center gap-10 px-6 pt-24 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-12">
        <div className="relative h-[38vh] lg:h-[74vh]" style={{ perspective: "1400px" }}>
          {collections.map((c, i) => (
            <div
              key={c.id}
              data-slide
              className="absolute inset-0 overflow-hidden rounded-3xl shadow-float will-change-transform"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                width={1000}
                height={1300}
                className="size-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="min-w-0">
          <p className="eyebrow text-gold">
            Collection {String(active + 1).padStart(2, "0")} / {String(collections.length).padStart(2, "0")}
          </p>
          <h2 className="mt-5 font-display text-[2.4rem] leading-[1.02] lg:text-[3.6rem]">
            {collection.title}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            {collection.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <span className="font-display text-2xl">{formatINR(product.price)}</span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Star className="size-4 fill-gold text-gold" strokeWidth={0} />
              {product.rating}
              <span className="text-muted-foreground/70">({product.reviews})</span>
            </span>
          </div>

          {product.variants && (
            <div className="mt-6">
              <p className="eyebrow text-muted-foreground">Variants</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <span key={v} className="hairline rounded-full px-4 py-1.5 text-xs">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.colors && (
            <div className="mt-6 flex items-center gap-3">
              {product.colors.map((c) => (
                <span
                  key={c}
                  className="size-6 rounded-full ring-1 ring-border"
                  style={{ backgroundColor: c }}
                  aria-hidden
                />
              ))}
            </div>
          )}

          <button
            onClick={() => addToCart(product)}
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-[0.78rem] tracking-[0.2em] text-primary-foreground uppercase transition-all duration-500 hover:gap-5"
          >
            Add to Cart
            <Plus className="size-4 transition-transform duration-500 group-hover:rotate-90" />
          </button>

          <div className="mt-12 flex gap-2">
            {collections.map((c, i) => (
              <span
                key={c.id}
                className="h-px flex-1 overflow-hidden bg-foreground/15"
                aria-hidden
              >
                <span
                  className="block h-full bg-gold transition-transform duration-700 ease-out"
                  style={{ transform: `scaleX(${i <= active ? 1 : 0})`, transformOrigin: "left" }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
