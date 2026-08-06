import { Star } from "lucide-react";
import { useSilkReveal } from "@/hooks/useSilkReveal";

const reviews = [
  {
    quote:
      "The coat arrived wrapped like a gift I hadn't bought myself. Two winters in and it still looks new.",
    name: "Ananya Rao",
    role: "Bengaluru",
    offset: "",
  },
  {
    quote:
      "The only store where the photography actually undersells the product. Everything feels considered.",
    name: "Marcus Feld",
    role: "Berlin",
    offset: "lg:mt-16",
  },
  {
    quote:
      "Support replied in four minutes, at midnight, and swapped my size without a single form.",
    name: "Leila Haddad",
    role: "Dubai",
    offset: "",
  },
];

export function Testimonials() {
  const ref = useSilkReveal<HTMLElement>();

  return (
    <section ref={ref} className="px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="text-center">
          <p data-silk className="eyebrow text-gold">
            Loved Worldwide
          </p>
          <h2 data-silk className="mt-5 font-display text-[2.6rem] leading-[1] lg:text-[4rem]">
            Customer reviews
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {reviews.map((r) => (
            <blockquote
              key={r.name}
              data-silk
              className={`glass relative rounded-3xl p-9 shadow-soft transition-transform duration-700 hover:-translate-y-2 ${r.offset}`}
            >
              <span
                aria-hidden
                className="absolute -top-6 left-8 font-display text-[5rem] leading-none text-gold/35"
              >
                &rdquo;
              </span>
              <div className="relative flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-3.5 fill-gold text-gold" strokeWidth={0} />
                ))}
              </div>
              <p className="relative mt-6 text-sm leading-relaxed">{r.quote}</p>
              <footer className="mt-8 text-xs">
                <span className="block">{r.name}</span>
                <span className="mt-1 block text-muted-foreground">{r.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div data-silk className="mt-20 flex flex-col items-center gap-5">
          <div className="flex -space-x-3">
            {["#C9A24B", "#8A4B2A", "#1C1512", "#E8DCCF", "#2F855A"].map((c) => (
              <span
                key={c}
                className="size-11 rounded-full ring-2 ring-background"
                style={{ backgroundColor: c }}
                aria-hidden
              />
            ))}
          </div>
          <p className="text-sm">
            <span className="font-display text-xl">4.9</span>
            <span className="text-muted-foreground"> average from 10,000+ happy customers</span>
          </p>
        </div>
      </div>
    </section>
  );
}
