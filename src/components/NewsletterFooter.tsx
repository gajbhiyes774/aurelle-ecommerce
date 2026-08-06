import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useSilkReveal } from "@/hooks/useSilkReveal";

const columns = [
  { title: "Shop", links: ["New Arrivals", "Best Sellers", "Deals", "Gift Cards"] },
  { title: "Categories", links: ["Fashion", "Electronics", "Beauty", "Home & Living"] },
  { title: "Support", links: ["Contact", "Shipping", "Returns", "FAQs"] },
  { title: "Brands", links: ["Maison Vell", "Kestrel", "Solene", "Halvard"] },
];

export function NewsletterFooter() {
  const ref = useSilkReveal<HTMLElement>();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-espresso text-espresso-foreground">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-8 text-center font-display text-[22vw] leading-none text-espresso-foreground/6 select-none"
      >
        AURELLE
      </span>

      <div className="relative mx-auto max-w-[1500px] px-6 pt-28 pb-14 lg:px-12 lg:pt-40">
        <div
          data-silk
          className="mx-auto max-w-2xl rounded-3xl bg-ivory p-10 text-foreground shadow-float lg:p-14"
        >
          <p className="eyebrow text-gold">Newsletter</p>
          <h2 className="mt-5 font-display text-[2rem] leading-[1.05] lg:text-[2.8rem]">
            Get 10% off your first order
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Early access to drops, private sales and the occasional letter from our founders.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.includes("@")) setDone(true);
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="hairline flex-1 rounded-full bg-background px-6 py-4 text-sm outline-none focus:ring-1 focus:ring-ring"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-[0.72rem] tracking-[0.2em] text-primary-foreground uppercase transition-all duration-500 hover:gap-4"
            >
              {done ? <Check className="size-4" /> : null}
              {done ? "Subscribed" : "Subscribe"}
              {!done && <ArrowRight className="size-4" />}
            </button>
          </form>
          {done && <p className="mt-4 text-xs text-success">Your code is on its way.</p>}
        </div>

        <div className="mt-24 grid grid-cols-2 gap-10 lg:grid-cols-5">
          <div data-silk className="col-span-2 lg:col-span-1">
            <p className="font-display text-2xl tracking-[0.18em]">AURELLE</p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-espresso-foreground/60">
              Curated luxury across fashion, technology, beauty and the home. Shipped worldwide.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title} data-silk>
              <p className="eyebrow text-gold">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-xs text-espresso-foreground/65 transition-colors duration-300 hover:text-espresso-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-espresso-foreground/12 pt-8 sm:flex-row">
          <p className="text-[0.7rem] text-espresso-foreground/50">
            © {new Date().getFullYear()} Aurelle. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["UPI", "VISA", "Mastercard", "Razorpay"].map((p) => (
              <span
                key={p}
                className="rounded-md border border-espresso-foreground/15 px-3 py-1.5 text-[0.6rem] tracking-[0.14em] text-espresso-foreground/70 uppercase"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
