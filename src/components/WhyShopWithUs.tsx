import { useEffect, useRef } from "react";
import { Truck, ShieldCheck, Headphones } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { macroImages } from "@/data/products";

const counters = [
  { value: 10, suffix: "K+", label: "Products" },
  { value: 500, suffix: "+", label: "Premium Brands" },
  { value: 100, suffix: "K+", label: "Happy Customers" },
];

const promises = [
  { icon: Headphones, title: "24/7 Support", copy: "Real people, any hour, any timezone." },
  { icon: Truck, title: "Fast Delivery", copy: "Insured express dispatch within 24 hours." },
  { icon: ShieldCheck, title: "Secure Payments", copy: "UPI, cards and wallets via Razorpay." },
];

export function WhyShopWithUs() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion()) {
        const panels = gsap.utils.toArray<HTMLElement>("[data-macro]");
        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: () => `+=${panels.length * 70}%`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          })
          .to(panels, {
            yPercent: -100 * (panels.length - 1),
            ease: "none",
          });

        gsap.fromTo(
          "[data-why-silk]",
          { opacity: 0, y: 60, skewY: 4 },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration: 1.1,
            ease: "power4.out",
            stagger: 0.08,
            scrollTrigger: { trigger: el, start: "top 70%", once: true },
          },
        );
      }

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((node) => {
        const target = Number(node.dataset["count"]);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: { trigger: node, start: "top 92%", once: true },
          onUpdate: () => {
            node.textContent = String(Math.round(obj.v));
          },
        });
      });
    }, el);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="about" className="relative h-screen overflow-hidden">
      <div className="mx-auto grid h-full max-w-[1500px] grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-12">
        <div className="relative hidden h-[74vh] overflow-hidden rounded-3xl bg-blush lg:block">
          <div className="absolute inset-0">
            {macroImages.map((m) => (
              <div key={m.label} data-macro className="relative size-full">
                <img
                  src={m.image}
                  alt={m.label}
                  loading="lazy"
                  width={1000}
                  height={1300}
                  className="size-full object-cover"
                />
                <span className="glass absolute bottom-6 left-6 rounded-full px-4 py-2 text-[0.65rem] tracking-[0.24em] uppercase">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p data-why-silk className="eyebrow text-gold">
            Why Aurelle
          </p>
          <h2
            data-why-silk
            className="mt-5 font-display text-[2.4rem] leading-[1.02] lg:text-[3.6rem]"
          >
            Craft you can <span className="italic">feel</span> before you unwrap it.
          </h2>
          <p data-why-silk className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Every piece is sourced from makers we visit, packed by hand in recycled ivory board,
            and shipped with insured express delivery.
          </p>

          <div data-why-silk className="mt-12 grid grid-cols-3 gap-6 border-y border-border py-9">
            {counters.map((c) => (
              <div key={c.label}>
                <p className="font-display text-3xl lg:text-4xl">
                  <span data-count={c.value}>0</span>
                  {c.suffix}
                </p>
                <p className="mt-2 text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
                  {c.label}
                </p>
              </div>
            ))}
          </div>

          <ul className="mt-10 space-y-6">
            {promises.map((p) => (
              <li key={p.title} data-why-silk className="flex items-start gap-5">
                <span className="hairline rounded-full p-3">
                  <p.icon className="size-4 text-gold" strokeWidth={1.4} />
                </span>
                <span>
                  <span className="block text-sm">{p.title}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{p.copy}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
