import images from "./images";

export type ProductCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
};

export type Product = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  image: string;
  materials: string[];
  applications: string[];
};

export const categories: ProductCategory[] = [
  {
    id: "gift-boxes",
    name: "Bespoke Gift Boxes",
    slug: "gift-boxes",
    description: "Premium rigid boxes crafted with precision. Perfect for luxury beauty, fragrance, and fashion brands seeking to elevate their unboxing experience.",
    image: images.giftBoxes,
    features: [
      "Magnetic closure options",
      "Custom inserts and dividers",
      "Hot foil stamping & embossing",
      "Ribbon and magnet attachments",
      "Window cutouts and die-cut designs",
    ],
  },
  {
    id: "luxury-bags",
    name: "Eco-Luxury Shopping Bags",
    slug: "luxury-bags",
    description: "Sophisticated paper bags that combine elegance with sustainability. Made from recycled materials with premium finishing techniques.",
    image: images.luxuryBags,
    features: [
      "Recycled kraft and coated paper",
      "Twisted cotton and satin handles",
      "Reinforced bases and gussets",
      "Full-color printing with UV coating",
      "Custom sizing and branding",
    ],
  },
  {
    id: "custom-ribbons",
    name: "Custom Ribbons & Tags",
    slug: "custom-ribbons",
    description: "Branded ribbons and tags that add the perfect finishing touch. Available in satin, grosgrain, and woven varieties.",
    image: images.customRibbons,
    features: [
      "Satin and grosgrain textures",
      "Custom color matching (Pantone)",
      "Logo printing and embroidery",
      "Heat-cut and woven edges",
      "Hangtags with foil stamping",
    ],
  },
  {
    id: "textile-pouches",
    name: "Textile & Velvet Pouches",
    slug: "textile-pouches",
    description: "Luxurious fabric pouches for jewelry, cosmetics, and delicate items. Crafted from premium textiles with attention to detail.",
    image: images.textilePouches,
    features: [
      "Velvet, silk, and cotton options",
      "Drawstring and zipper closures",
      "Custom embroidery and printing",
      "Lined interiors for protection",
      "Reusable and eco-friendly",
    ],
  },
];

export const products: Product[] = [
  // Gift Boxes
  {
    id: "gb-001",
    categoryId: "gift-boxes",
    name: "Classic Magnetic Closure Box",
    description: "Elegant rigid box with magnetic closure, perfect for premium cosmetics and jewelry.",
    image: images.giftBoxOpen,
    materials: ["Greyboard", "Art paper", "Magnetic closure"],
    applications: ["Luxury cosmetics", "Fine jewelry", "Premium gifts"],
  },
  {
    id: "gb-002",
    categoryId: "gift-boxes",
    name: "Two-Piece Lid & Base Box",
    description: "Timeless lid and base design with custom inserts for organized presentation.",
    image: images.giftBoxes,
    materials: ["Rigid board", "Specialty paper", "EVA foam inserts"],
    applications: ["Perfume sets", "Watch packaging", "Electronics"],
  },
  {
    id: "gb-003",
    categoryId: "gift-boxes",
    name: "Drawer-Style Gift Box",
    description: "Sophisticated drawer box with ribbon pull, ideal for luxury apparel and accessories.",
    image: images.packagingSet,
    materials: ["Greyboard", "Textured paper", "Satin ribbon"],
    applications: ["Fashion accessories", "Scarves", "Leather goods"],
  },

  // Luxury Bags
  {
    id: "lb-001",
    categoryId: "luxury-bags",
    name: "Recycled Kraft Shopping Bag",
    description: "Eco-conscious kraft bag with twisted cotton handles, perfect for sustainable brands.",
    image: images.kraftBag,
    materials: ["Recycled kraft paper", "Cotton rope handles"],
    applications: ["Retail stores", "Boutiques", "Eco-friendly brands"],
  },
  {
    id: "lb-002",
    categoryId: "luxury-bags",
    name: "Coated Paper Luxury Bag",
    description: "Premium coated paper bag with satin handles and reinforced base for luxury retail.",
    image: images.luxuryBags,
    materials: ["Coated art paper", "Satin handles", "Reinforced base"],
    applications: ["Luxury fashion", "Department stores", "High-end retail"],
  },
  {
    id: "lb-003",
    categoryId: "luxury-bags",
    name: "Flat Bottom Paper Bag",
    description: "Sturdy flat bottom bag with full-color printing, ideal for food and beverage brands.",
    image: images.boutiqueDisplay,
    materials: ["Food-grade paper", "Twisted handles"],
    applications: ["Gourmet food", "Beverages", "Artisanal products"],
  },

  // Custom Ribbons
  {
    id: "cr-001",
    categoryId: "custom-ribbons",
    name: "Satin Ribbon with Logo",
    description: "Luxurious satin ribbon with custom logo printing for premium packaging.",
    image: images.satinRibbon,
    materials: ["Polyester satin", "Eco-friendly ink"],
    applications: ["Gift boxes", "Wedding packaging", "Branding"],
  },
  {
    id: "cr-002",
    categoryId: "custom-ribbons",
    name: "Grosgrain Ribbon",
    description: "Textured grosgrain ribbon with custom embroidery and heat-cut edges.",
    image: images.customRibbons,
    materials: ["Polyester grosgrain", "Embroidery thread"],
    applications: ["Apparel tags", "Boutique branding", "Event decor"],
  },
  {
    id: "cr-003",
    categoryId: "custom-ribbons",
    name: "Custom Hangtags",
    description: "Premium hangtags with foil stamping and embossing for retail products.",
    image: images.packagingSet,
    materials: ["Cardstock", "Foil stamping", "Cotton string"],
    applications: ["Clothing tags", "Jewelry tags", "Retail products"],
  },

  // Textile Pouches
  {
    id: "tp-001",
    categoryId: "textile-pouches",
    name: "Velvet Drawstring Pouch",
    description: "Luxurious velvet pouch with drawstring closure, perfect for jewelry and cosmetics.",
    image: images.velvetPouch,
    materials: ["Velvet fabric", "Cotton drawstring"],
    applications: ["Jewelry", "Cosmetics", "Small gifts"],
  },
  {
    id: "tp-002",
    categoryId: "textile-pouches",
    name: "Cotton Canvas Bag",
    description: "Durable cotton canvas bag with custom printing for reusable packaging.",
    image: images.textilePouches,
    materials: ["Organic cotton", "Eco-friendly ink"],
    applications: ["Reusable bags", "Tote bags", "Eco packaging"],
  },
  {
    id: "tp-003",
    categoryId: "textile-pouches",
    name: "Silk Lined Jewelry Box",
    description: "Elegant silk-lined pouch with zipper closure for premium jewelry storage.",
    image: images.sustainable,
    materials: ["Silk fabric", "Zipper closure", "Cotton lining"],
    applications: ["Fine jewelry", "Watches", "Luxury accessories"],
  },
];

export const getCategoryBySlug = (slug: string) => {
  return categories.find((cat) => cat.slug === slug);
};

export const getProductsByCategory = (categoryId: string) => {
  return products.filter((product) => product.categoryId === categoryId);
};
