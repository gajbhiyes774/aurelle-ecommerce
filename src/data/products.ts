import heroImg from "@/assets/hero.jpg";
import colFashion from "@/assets/col-fashion.jpg";
import colGadgets from "@/assets/col-gadgets.jpg";
import colHome from "@/assets/col-home.jpg";
import colLifestyle from "@/assets/col-lifestyle.jpg";
import catFashion from "@/assets/cat-fashion.jpg";
import catElectronics from "@/assets/cat-electronics.jpg";
import catBeauty from "@/assets/cat-beauty.jpg";
import catHome from "@/assets/cat-home.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import catFootwear from "@/assets/cat-footwear.jpg";
import catLifestyle from "@/assets/cat-lifestyle.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  images: string[];
  price: number;
  mrp: number;
  discount: number;
  rating: number;
  reviews: number;
  stock: number;
  sizes?: string[];
  colors?: string[];
  variants?: string[];
  featured: boolean;
  newArrival: boolean;
};

export type Category = {
  id: string;
  name: string;
  count: number;
  image: string;
  span: string;
};

export type Collection = {
  id: string;
  title: string;
  description: string;
  image: string;
  productId: string;
  tint: string;
};

const d = (price: number, mrp: number) => Math.round(((mrp - price) / mrp) * 100);

export const products: Product[] = [
  {
    id: "p1",
    name: "Cashmere Wrap Coat",
    category: "Fashion",
    brand: "Maison Vell",
    description:
      "Hand-finished double-faced cashmere with a fluid drape and hidden placket. Cut in Florence, made to outlive seasons.",
    images: [colFashion, catFashion],
    price: 42900,
    mrp: 56000,
    discount: d(42900, 56000),
    rating: 4.9,
    reviews: 214,
    stock: 12,
    sizes: ["XS", "S", "M", "L"],
    colors: ["#C9A24B", "#1C1512", "#E8DCCF"],
    variants: ["Camel", "Espresso", "Ivory"],
    featured: true,
    newArrival: true,
  },
  {
    id: "p2",
    name: "Aurum Wireless Headphones",
    category: "Electronics",
    brand: "Kestrel Audio",
    description:
      "Machined titanium cups, adaptive spatial audio and 40-hour playback. Sound engineered to disappear around you.",
    images: [colGadgets, catElectronics],
    price: 28900,
    mrp: 34500,
    discount: d(28900, 34500),
    rating: 4.8,
    reviews: 987,
    stock: 40,
    colors: ["#1C1512", "#C9A24B"],
    variants: ["Graphite", "Champagne"],
    featured: true,
    newArrival: true,
  },
  {
    id: "p3",
    name: "Sculpted Ceramic Vessel",
    category: "Home & Living",
    brand: "Atelier Nord",
    description:
      "Thrown by hand in stoneware with a matte sand glaze. Every piece carries the maker's fingerprint.",
    images: [colHome, catHome],
    price: 8900,
    mrp: 11500,
    discount: d(8900, 11500),
    rating: 4.7,
    reviews: 132,
    stock: 25,
    colors: ["#E8DCCF", "#C9A24B"],
    variants: ["Sand", "Ochre"],
    featured: true,
    newArrival: false,
  },
  {
    id: "p4",
    name: "Everyday Leather Folio",
    category: "Lifestyle",
    brand: "Cormo",
    description:
      "Full-grain vegetable-tanned leather, saddle-stitched by hand. Ages into a patina that is entirely yours.",
    images: [colLifestyle, catLifestyle],
    price: 12400,
    mrp: 15900,
    discount: d(12400, 15900),
    rating: 4.9,
    reviews: 411,
    stock: 18,
    colors: ["#8A4B2A", "#1C1512"],
    variants: ["Cognac", "Black"],
    featured: true,
    newArrival: true,
  },
  {
    id: "p5",
    name: "Renewal Gold Serum",
    category: "Beauty",
    brand: "Solene",
    description:
      "A weightless overnight concentrate with cold-pressed botanicals and encapsulated retinal.",
    images: [catBeauty, colLifestyle],
    price: 6800,
    mrp: 8200,
    discount: d(6800, 8200),
    rating: 4.8,
    reviews: 2043,
    stock: 60,
    variants: ["30ml", "50ml"],
    featured: false,
    newArrival: true,
  },
  {
    id: "p6",
    name: "Meridian Gold Watch",
    category: "Accessories",
    brand: "Halvard",
    description:
      "Swiss automatic movement, sapphire crystal and a hand-burnished calf strap. Quietly exceptional.",
    images: [catAccessories, colGadgets],
    price: 68900,
    mrp: 79000,
    discount: d(68900, 79000),
    rating: 5.0,
    reviews: 88,
    stock: 6,
    colors: ["#C9A24B", "#8A4B2A"],
    variants: ["Gold / Tan", "Gold / Black"],
    featured: false,
    newArrival: true,
  },
  {
    id: "p7",
    name: "Atelier Low Sneaker",
    category: "Footwear",
    brand: "Vento",
    description:
      "Italian nappa uppers on a hand-lasted cup sole. Featherweight structure, zero break-in.",
    images: [catFootwear, colFashion],
    price: 19900,
    mrp: 24500,
    discount: d(19900, 24500),
    rating: 4.6,
    reviews: 322,
    stock: 30,
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: ["#E8DCCF", "#8A4B2A"],
    variants: ["Chalk", "Cognac"],
    featured: false,
    newArrival: true,
  },
  {
    id: "p8",
    name: "Silk Editorial Scarf",
    category: "Fashion",
    brand: "Maison Vell",
    description:
      "Twill silk, hand-rolled edges, printed in a limited run of two hundred from an original gouache.",
    images: [colLifestyle, catFashion],
    price: 9800,
    mrp: 13000,
    discount: d(9800, 13000),
    rating: 4.7,
    reviews: 156,
    stock: 22,
    colors: ["#C9A24B", "#1C1512", "#F3E6E0"],
    variants: ["Saffron", "Noir", "Blush"],
    featured: false,
    newArrival: true,
  },
];

export const collections: Collection[] = [
  {
    id: "c1",
    title: "Luxury Fashion",
    description:
      "Slow-made tailoring and rare fibres, sourced from ateliers that still count in decades.",
    image: colFashion,
    productId: "p1",
    tint: "oklch(0.955 0.017 60)",
  },
  {
    id: "c2",
    title: "Smart Gadgets",
    description:
      "Objects of engineering restraint — machined, quiet, and built to sit beautifully on a desk.",
    image: colGadgets,
    productId: "p2",
    tint: "oklch(0.928 0.024 35)",
  },
  {
    id: "c3",
    title: "Home Collection",
    description:
      "Warm minimalism for the rooms you live in. Stone, clay, linen and unhurried light.",
    image: colHome,
    productId: "p3",
    tint: "oklch(0.945 0.02 75)",
  },
  {
    id: "c4",
    title: "Lifestyle Essentials",
    description:
      "The small daily companions — leather, glass and brass — refined until nothing is left to remove.",
    image: colLifestyle,
    productId: "p4",
    tint: "oklch(0.935 0.018 50)",
  },
];

export const categories: Category[] = [
  { id: "fashion", name: "Fashion", count: 1240, image: catFashion, span: "md:col-span-2 md:row-span-2" },
  { id: "electronics", name: "Electronics", count: 860, image: catElectronics, span: "md:col-span-1" },
  { id: "beauty", name: "Beauty", count: 540, image: catBeauty, span: "md:col-span-1" },
  { id: "home", name: "Home & Living", count: 720, image: catHome, span: "md:col-span-2" },
  { id: "accessories", name: "Accessories", count: 410, image: catAccessories, span: "md:col-span-1" },
  { id: "lifestyle", name: "Lifestyle", count: 380, image: catLifestyle, span: "md:col-span-1" },
  { id: "footwear", name: "Footwear", count: 295, image: catFootwear, span: "md:col-span-2" },
];

export const trending = [
  { id: "t1", image: colFashion, title: "The Camel Study", meta: "Fashion — 12 pieces" },
  { id: "t2", image: catBeauty, title: "Golden Hour Ritual", meta: "Beauty — 8 pieces" },
  { id: "t3", image: colGadgets, title: "Machined Quiet", meta: "Gadgets — 14 pieces" },
  { id: "t4", image: catHome, title: "Rooms of Light", meta: "Home — 21 pieces" },
  { id: "t5", image: catFootwear, title: "Sand & Sole", meta: "Footwear — 9 pieces" },
  { id: "t6", image: colLifestyle, title: "Everyday Objects", meta: "Lifestyle — 16 pieces" },
];

export const instagramImages = [
  catFashion,
  colGadgets,
  catBeauty,
  colHome,
  catAccessories,
  catFootwear,
  colLifestyle,
  heroImg,
];

export const macroImages = [
  { image: colFashion, label: "Materials" },
  { image: catBeauty, label: "Packaging" },
  { image: colHome, label: "Craftsmanship" },
  { image: catAccessories, label: "Finishing" },
];

export const brands = [
  "MAISON VELL",
  "KESTREL",
  "ATELIER NORD",
  "CORMO",
  "SOLENE",
  "HALVARD",
  "VENTO",
  "LUMIÈRE",
];

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export { heroImg };
