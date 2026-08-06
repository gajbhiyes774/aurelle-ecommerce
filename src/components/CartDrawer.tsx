import { useState } from "react";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { formatINR } from "@/data/products";

export function CartDrawer() {
  const {
    cart,
    cartOpen,
    setCartOpen,
    setQty,
    removeFromCart,
    subtotal,
    discount,
    tax,
    total,
    applyCoupon,
    coupon,
    couponError,
  } = useShop();
  const [code, setCode] = useState("");

  return (
    <div
      className={`fixed inset-0 z-[60] ${cartOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!cartOpen}
    >
      <button
        aria-label="Close cart"
        onClick={() => setCartOpen(false)}
        className={`absolute inset-0 backdrop-blur-md transition-opacity duration-500 ${
          cartOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "oklch(0.201 0.011 45 / 0.35)" }}
      />

      <aside
        className={`absolute inset-y-0 right-0 flex w-full max-w-[440px] flex-col bg-ivory shadow-float transition-transform duration-700 ease-out ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-border px-7 py-6">
          <p className="eyebrow">Your Bag ({cart.length})</p>
          <button onClick={() => setCartOpen(false)} aria-label="Close cart" className="p-1">
            <X className="size-5" strokeWidth={1.4} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-7 py-6">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag className="size-8 text-muted-foreground" strokeWidth={1} />
              <p className="text-sm text-muted-foreground">Your bag is beautifully empty.</p>
            </div>
          ) : (
            <ul className="space-y-7">
              {cart.map((line) => (
                <li key={line.product.id + (line.variant ?? "")} className="flex gap-4">
                  <img
                    src={line.product.images[0]}
                    alt={line.product.name}
                    loading="lazy"
                    width={200}
                    height={260}
                    className="size-24 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="eyebrow text-muted-foreground">{line.product.brand}</p>
                    <p className="mt-1 font-display text-base">{line.product.name}</p>
                    {line.variant && (
                      <p className="mt-0.5 text-xs text-muted-foreground">{line.variant}</p>
                    )}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="hairline flex items-center gap-3 rounded-full px-3 py-1.5">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => setQty(line.product.id, line.qty - 1)}
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-4 text-center text-xs">{line.qty}</span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => setQty(line.product.id, line.qty + 1)}
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      <span className="text-sm">{formatINR(line.product.price * line.qty)}</span>
                    </div>
                  </div>
                  <button
                    aria-label={`Remove ${line.product.name}`}
                    onClick={() => removeFromCart(line.product.id)}
                    className="self-start p-1 text-muted-foreground transition-colors hover:text-destructive"
                  >
                    <Trash2 className="size-4" strokeWidth={1.4} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <footer className="border-t border-border px-7 py-6">
            <div className="flex gap-2">
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Coupon code"
                aria-label="Coupon code"
                className="hairline flex-1 rounded-full bg-background px-5 py-3 text-xs outline-none focus:ring-1 focus:ring-ring"
              />
              <button
                onClick={() => applyCoupon(code)}
                className="hairline rounded-full px-5 py-3 text-[0.65rem] tracking-[0.2em] uppercase transition-colors hover:bg-blush"
              >
                Apply
              </button>
            </div>
            {couponError && <p className="mt-2 text-[0.7rem] text-destructive">{couponError}</p>}
            {coupon && (
              <p className="mt-2 text-[0.7rem] text-success">
                {coupon.code} applied — {coupon.percent}% off
              </p>
            )}

            <dl className="mt-6 space-y-2 text-xs">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd>{formatINR(subtotal)}</dd>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-success">
                  <dt>Discount</dt>
                  <dd>−{formatINR(discount)}</dd>
                </div>
              )}
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Tax (18% GST)</dt>
                <dd>{formatINR(tax)}</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-3 text-sm">
                <dt>Total</dt>
                <dd className="font-display text-lg">{formatINR(total)}</dd>
              </div>
            </dl>

            <button className="mt-6 w-full rounded-full bg-primary py-4 text-[0.72rem] tracking-[0.22em] text-primary-foreground uppercase">
              Checkout with Razorpay
            </button>
            <p className="mt-3 text-center text-[0.65rem] text-muted-foreground">
              Secure payments — UPI, cards, netbanking
            </p>
          </footer>
        )}
      </aside>
    </div>
  );
}
