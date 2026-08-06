import { createFileRoute } from "@tanstack/react-router";
import { ShopProvider } from "@/context/ShopContext";
import { LenisProvider } from "@/components/LenisProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { NewArrivals } from "@/components/NewArrivals";
import { ShopByCategory } from "@/components/ShopByCategory";
import { WhyShopWithUs } from "@/components/WhyShopWithUs";
import { TrendingCollections } from "@/components/TrendingCollections";
import { Testimonials } from "@/components/Testimonials";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { InstagramMarquee } from "@/components/InstagramMarquee";
import { NewsletterFooter } from "@/components/NewsletterFooter";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductModal } from "@/components/ProductModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURELLE — Luxury Shopping, Curated Worldwide" },
      {
        name: "description",
        content:
          "AURELLE is a luxury e-commerce house curating fashion, electronics, beauty, home and lifestyle from the world's finest makers.",
      },
      { property: "og:title", content: "AURELLE — Luxury Shopping, Curated Worldwide" },
      {
        property: "og:description",
        content:
          "Discover extraordinary. Premium fashion, gadgets, beauty and home objects, curated and shipped worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ShopProvider>
      <LenisProvider>
        <div id="top">
          <Navbar />
          <main>
            <Hero />
            <FeaturedCollections />
            <div id="new-arrivals">
              <NewArrivals />
            </div>
            <ShopByCategory />
            <WhyShopWithUs />
            <TrendingCollections />
            <Testimonials />
            <BrandsMarquee />
            <InstagramMarquee />
          </main>
          <NewsletterFooter />
          <CartDrawer />
          <ProductModal />
        </div>
      </LenisProvider>
    </ShopProvider>
  );
}
