import { useState, useEffect } from "react";
import { X, Star, Heart } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { formatINR } from "@/data/products";

export function ProductModal() {
  const { quickView, setQuickView, addToCart, toggleWishlist, wishlist } = useShop();
  const [variant, setVariant] = useState<string | undefined>(undefined);

  useEffect(() => {
    setVariant(quickView?.variants?.[0]);
  }, [quickView]);

  if (!quickView) return null;
  const liked = wishlist.includes(quickView.id);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <button
        aria-label="Close quick view"
        onClick={() => setQuickView(null)}
        className="absolute inset-0 backdrop-blur-md"
        style={{ background: "oklch(0.201 0.011 45 / 0.4)" }}
      />
      <div
        role="dialog"
        aria-label={quickView.name}
        className="relative grid max-h-[88vh] w-full max-w-4xl grid-cols-1 overflow-y-auto rounded-3xl bg-ivory shadow-float sm:grid-cols-2"
      >
        <img
          src={quickView.images[0]}
          alt={quickView.name}
          width={1000}
          height={1300}
          className="h-64 w-full object-cover sm:h-full"
        />
        <div className="p-9 lg:p-12">
          <button
            onClick={() => setQuickView(null)}
            aria-label="Close"
            className="absolute top-5 right-5 rounded-full bg-background/70 p-2"
          >
            <X className="size-4" strokeWidth={1.4} />
          </button>

          <p className="eyebrow text-muted-foreground">{quickView.brand}</p>
          <h3 className="mt-3 font-display text-3xl leading-tight">{quickView.name}</h3>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Star className="size-3.5 fill-gold text-gold" strokeWidth={0} />
            {quickView.rating} ({quickView.reviews} reviews)
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {quickView.description}
          </p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-2xl">{formatINR(quickView.price)}</span>
            <span className="text-sm text-muted-foreground line-through">
              {formatINR(quickView.mrp)}
            </span>
            <span className="text-xs text-success">{quickView.discount}% off</span>
          </div>

          {quickView.sizes && (
            <div className="mt-6">
              <p className="eyebrow text-muted-foreground">Size</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {quickView.sizes.map((s) => (
                  <span key={s} className="hairline rounded-full px-4 py-1.5 text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {quickView.variants && (
            <div className="mt-6">
              <p className="eyebrow text-muted-foreground">Variant</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {quickView.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`rounded-full px-4 py-1.5 text-xs transition-colors ${
                      variant === v ? "bg-primary text-primary-foreground" : "hairline"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-9 flex items-center gap-3">
            <button
              onClick={() => {
                addToCart(quickView, variant);
                setQuickView(null);
              }}
              className="flex-1 rounded-full bg-primary py-4 text-[0.72rem] tracking-[0.22em] text-primary-foreground uppercase"
            >
              Add to Cart
            </button>
            <button
              onClick={() => toggleWishlist(quickView.id)}
              aria-label="Toggle wishlist"
              className="hairline rounded-full p-4"
            >
              <Heart
                className={`size-4 ${liked ? "fill-gold text-gold" : ""}`}
                strokeWidth={1.4}
              />
            </button>
          </div>
          <p className="mt-4 text-[0.7rem] text-muted-foreground">
            {quickView.stock} in stock — ships within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}
