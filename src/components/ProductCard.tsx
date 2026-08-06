import { Heart, Star } from "lucide-react";
import { formatINR, type Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist, setQuickView } = useShop();
  const liked = wishlist.includes(product.id);

  return (
    <article data-silk className="group relative">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-blush">
        <button
          onClick={() => setQuickView(product)}
          aria-label={`Quick view ${product.name}`}
          className="absolute inset-0 z-10"
        />
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          width={1000}
          height={1300}
          className="size-full object-cover transition-all duration-[1100ms] ease-out group-hover:scale-110 group-hover:opacity-0"
        />
        <img
          src={product.images[1] ?? product.images[0]}
          alt=""
          aria-hidden
          loading="lazy"
          width={1000}
          height={1300}
          className="absolute inset-0 size-full scale-110 object-cover opacity-0 transition-all duration-[1100ms] ease-out group-hover:scale-100 group-hover:opacity-100"
        />

        {product.newArrival && (
          <span className="glass absolute top-4 left-4 z-20 rounded-full px-3 py-1 text-[0.6rem] tracking-[0.24em] uppercase">
            New
          </span>
        )}

        <button
          onClick={() => toggleWishlist(product.id)}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={liked}
          className="glass absolute top-4 right-4 z-20 rounded-full p-2.5 transition-transform duration-300 hover:scale-110"
        >
          <Heart
            className={`size-4 ${liked ? "fill-gold text-gold" : "text-foreground"}`}
            strokeWidth={1.4}
          />
        </button>

        <div className="absolute inset-x-3 bottom-3 z-20 translate-y-[130%] transition-transform duration-500 ease-out group-hover:translate-y-0">
          <button
            onClick={() => addToCart(product)}
            className="w-full rounded-full bg-primary py-3.5 text-[0.7rem] tracking-[0.22em] text-primary-foreground uppercase"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-5">
        <p className="eyebrow text-muted-foreground">{product.brand}</p>
        <h3 className="mt-2 font-display text-lg leading-snug">{product.name}</h3>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Star className="size-3.5 fill-gold text-gold" strokeWidth={0} />
          {product.rating} <span className="text-muted-foreground/70">({product.reviews})</span>
        </div>
        <div className="mt-3 flex items-baseline gap-3">
          <span className="text-[0.95rem]">{formatINR(product.price)}</span>
          <span className="text-xs text-muted-foreground line-through">
            {formatINR(product.mrp)}
          </span>
          <span className="text-xs text-success">{product.discount}% off</span>
        </div>
      </div>
    </article>
  );
}
