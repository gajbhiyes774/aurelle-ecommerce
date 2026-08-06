import { brands } from "@/data/products";

export function BrandsMarquee() {
  const row = [...brands, ...brands];

  return (
    <section className="relative overflow-hidden bg-blush py-24">
      <div className="relative flex">
        <div className="marquee-track flex min-w-max gap-20 pr-20" style={{ "--marquee-duration": "38s" } as React.CSSProperties}>
          {row.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="font-display text-2xl tracking-[0.2em] whitespace-nowrap text-foreground/45 transition-colors duration-500 hover:text-foreground lg:text-3xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-40"
        style={{ background: "linear-gradient(to right, var(--blush), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-40"
        style={{ background: "linear-gradient(to left, var(--blush), transparent)" }}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="glass rounded-full px-7 py-3 text-[0.65rem] tracking-[0.28em] uppercase shadow-soft">
          Trusted Worldwide
        </span>
      </div>
    </section>
  );
}
