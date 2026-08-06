import { useEffect, useState } from "react";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { useShop } from "@/context/ShopContext";

const links = ["Home", "Shop", "Collections", "Categories", "Deals", "About"];

export function Navbar() {
  const { cartCount, wishlist, setCartOpen } = useShop();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "glass py-3 shadow-soft" : "border-b border-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 lg:px-12">
        <a href="#top" className="font-display text-2xl tracking-[0.18em] text-foreground">
          AURELLE
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="relative text-[0.8rem] tracking-[0.14em] text-foreground/75 uppercase transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 sm:gap-3">
          <button aria-label="Search" className="rounded-full p-2.5 transition-colors hover:bg-blush">
            <Search className="size-[18px]" strokeWidth={1.4} />
          </button>
          <button
            aria-label="Wishlist"
            className="relative hidden rounded-full p-2.5 transition-colors hover:bg-blush sm:block"
          >
            <Heart className="size-[18px]" strokeWidth={1.4} />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 size-1.5 rounded-full bg-gold" />
            )}
          </button>
          <button
            aria-label="Account"
            className="hidden rounded-full p-2.5 transition-colors hover:bg-blush sm:block"
          >
            <User className="size-[18px]" strokeWidth={1.4} />
          </button>
          <button
            aria-label={`Cart, ${cartCount} items`}
            onClick={() => setCartOpen(true)}
            className="relative rounded-full p-2.5 transition-colors hover:bg-blush"
          >
            <ShoppingBag className="size-[18px]" strokeWidth={1.4} />
            <span className="absolute -top-0.5 -right-0.5 flex size-[18px] items-center justify-center rounded-full bg-gold text-[10px] font-medium text-accent-foreground">
              {cartCount}
            </span>
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2.5 transition-colors hover:bg-blush lg:hidden"
          >
            {open ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mt-3 lg:hidden">
          <ul className="flex flex-col px-8 py-6">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm tracking-[0.18em] uppercase"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
