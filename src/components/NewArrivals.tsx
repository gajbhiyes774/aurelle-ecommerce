import { useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";
import { useSilkReveal } from "@/hooks/useSilkReveal";

const PAGE_SIZE = 4;
const sorts = ["Featured", "Price: Low", "Price: High", "Top Rated"] as const;

export function NewArrivals() {
  const ref = useSilkReveal<HTMLElement>();
  const [sort, setSort] = useState<(typeof sorts)[number]>("Featured");
  const [page, setPage] = useState(0);

  const list = useMemo(() => {
    const arrivals = products.filter((p) => p.newArrival);
    const sorted = [...arrivals].sort((a, b) => {
      if (sort === "Price: Low") return a.price - b.price;
      if (sort === "Price: High") return b.price - a.price;
      if (sort === "Top Rated") return b.rating - a.rating;
      return Number(b.featured) - Number(a.featured);
    });
    return sorted;
  }, [sort]);

  const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const visible = list.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section ref={ref} id="shop" className="px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p data-silk className="eyebrow text-gold">
              Just Landed
            </p>
            <h2 data-silk className="mt-5 font-display text-[2.6rem] leading-[1] lg:text-[4rem]">
              New Arrivals
            </h2>
          </div>
          <div data-silk className="flex flex-wrap gap-2">
            {sorts.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSort(s);
                  setPage(0);
                }}
                className={`rounded-full px-5 py-2.5 text-[0.7rem] tracking-[0.18em] uppercase transition-colors duration-400 ${
                  sort === s ? "bg-primary text-primary-foreground" : "hairline hover:bg-blush"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4 lg:gap-x-8">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {pages > 1 && (
          <div className="mt-16 flex justify-center gap-3">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                className={`size-9 rounded-full text-xs transition-colors duration-300 ${
                  page === i ? "bg-primary text-primary-foreground" : "hairline hover:bg-blush"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
