import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/data/products";

export type CartLine = { product: Product; qty: number; variant?: string | undefined };

type Coupon = { code: string; percent: number };
const COUPONS: Coupon[] = [
  { code: "AURELLE10", percent: 10 },
  { code: "GOLD20", percent: 20 },
];

type ShopState = {
  cart: CartLine[];
  wishlist: string[];
  cartOpen: boolean;
  quickView: Product | null;
  coupon: Coupon | null;
  couponError: string;
  cartCount: number;
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  addToCart: (p: Product, variant?: string) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  toggleWishlist: (id: string) => void;
  setCartOpen: (v: boolean) => void;
  setQuickView: (p: Product | null) => void;
  applyCoupon: (code: string) => void;
};

const ShopContext = createContext<ShopState | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [coupon, setCoupon] = useState<Coupon | null>(null);
  const [couponError, setCouponError] = useState("");

  const addToCart = useCallback((p: Product, variant?: string) => {
    setCart((prev) => {
      const found = prev.find((l) => l.product.id === p.id && l.variant === variant);
      if (found) {
        return prev.map((l) =>
          l === found ? { ...l, qty: Math.min(l.qty + 1, l.product.stock) } : l,
        );
      }
      return [...prev, { product: p, qty: 1, variant }];
    });
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((l) => l.product.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((l) => l.product.id !== id)
        : prev.map((l) => (l.product.id === id ? { ...l, qty } : l)),
    );
  }, []);

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]));
  }, []);

  const applyCoupon = useCallback((code: string) => {
    const match = COUPONS.find((c) => c.code === code.trim().toUpperCase());
    if (match) {
      setCoupon(match);
      setCouponError("");
    } else {
      setCoupon(null);
      setCouponError("That code isn't valid.");
    }
  }, []);

  const value = useMemo<ShopState>(() => {
    const cartCount = cart.reduce((s, l) => s + l.qty, 0);
    const subtotal = cart.reduce((s, l) => s + l.product.price * l.qty, 0);
    const discount = coupon ? Math.round((subtotal * coupon.percent) / 100) : 0;
    const tax = Math.round((subtotal - discount) * 0.18);
    return {
      cart,
      wishlist,
      cartOpen,
      quickView,
      coupon,
      couponError,
      cartCount,
      subtotal,
      discount,
      tax,
      total: subtotal - discount + tax,
      addToCart,
      removeFromCart,
      setQty,
      toggleWishlist,
      setCartOpen,
      setQuickView,
      applyCoupon,
    };
  }, [
    cart,
    wishlist,
    cartOpen,
    quickView,
    coupon,
    couponError,
    addToCart,
    removeFromCart,
    setQty,
    toggleWishlist,
    applyCoupon,
  ]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}

export const allProducts = products;
