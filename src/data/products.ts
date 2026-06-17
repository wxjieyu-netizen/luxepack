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
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1200",
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
    image: "https://images.unsplash.com/photo-1549462184-b09ad0a4af40?q=80&w=1200",
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
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=1200",
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
    image: "https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?q=80&w=1200",
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
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800",
    materials: ["Greyboard", "Art paper", "Magnetic closure"],
    applications: ["Luxury cosmetics", "Fine jewelry", "Premium gifts"],
  },
  {
    id: "gb-002",
    categoryId: "gift-boxes",
    name: "Two-Piece Lid & Base Box",
    description: "Timeless lid and base design with custom inserts for organized presentation.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800",
    materials: ["Rigid board", "Specialty paper", "EVA foam inserts"],
    applications: ["Perfume sets", "Watch packaging", "Electronics"],
  },
  {
    id: "gb-003",
    categoryId: "gift-boxes",
    name: "Drawer-Style Gift Box",
    description: "Sophisticated drawer box with ribbon pull, ideal for luxury apparel and accessories.",
    image: "https://images.unsplash.com/photo-1584305650130-911293a1df88?q=80&w=800",
    materials: ["Greyboard", "Textured paper", "Satin ribbon"],
    applications: ["Fashion accessories", "Scarves", "Leather goods"],
  },

  // Luxury Bags
  {
    id: "lb-001",
    categoryId: "luxury-bags",
    name: "Recycled Kraft Shopping Bag",
    description: "Eco-conscious kraft bag with twisted cotton handles, perfect for sustainable brands.",
    image: "https://images.unsplash.com/photo-1549462184-b09ad0a4af40?q=80&w=800",
    materials: ["Recycled kraft paper", "Cotton rope handles"],
    applications: ["Retail stores", "Boutiques", "Eco-friendly brands"],
  },
  {
    id: "lb-002",
    categoryId: "luxury-bags",
    name: "Coated Paper Luxury Bag",
    description: "Premium coated paper bag with satin handles and reinforced base for luxury retail.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800",
    materials: ["Coated art paper", "Satin handles", "Reinforced base"],
    applications: ["Luxury fashion", "Department stores", "High-end retail"],
  },
  {
    id: "lb-003",
    categoryId: "luxury-bags",
    name: "Flat Bottom Paper Bag",
    description: "Sturdy flat bottom bag with full-color printing, ideal for food and beverage brands.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800",
    materials: ["Food-grade paper", "Twisted handles"],
    applications: ["Gourmet food", "Beverages", "Artisanal products"],
  },

  // Custom Ribbons
  {
    id: "cr-001",
    categoryId: "custom-ribbons",
    name: "Satin Ribbon with Logo",
    description: "Luxurious satin ribbon with custom logo printing for premium packaging.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800",
    materials: ["Polyester satin", "Eco-friendly ink"],
    applications: ["Gift boxes", "Wedding packaging", "Branding"],
  },
  {
    id: "cr-002",
    categoryId: "custom-ribbons",
    name: "Grosgrain Ribbon",
    description: "Textured grosgrain ribbon with custom embroidery and heat-cut edges.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800",
    materials: ["Polyester grosgrain", "Embroidery thread"],
    applications: ["Apparel tags", "Boutique branding", "Event decor"],
  },
  {
    id: "cr-003",
    categoryId: "custom-ribbons",
    name: "Custom Hangtags",
    description: "Premium hangtags with foil stamping and embossing for retail products.",
    image: "https://images.unsplash.com/photo-1584305650130-911293a1df88?q=80&w=800",
    materials: ["Cardstock", "Foil stamping", "Cotton string"],
    applications: ["Clothing tags", "Jewelry tags", "Retail products"],
  },

  // Textile Pouches
  {
    id: "tp-001",
    categoryId: "textile-pouches",
    name: "Velvet Drawstring Pouch",
    description: "Luxurious velvet pouch with drawstring closure, perfect for jewelry and cosmetics.",
    image: "https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?q=80&w=800",
    materials: ["Velvet fabric", "Cotton drawstring"],
    applications: ["Jewelry", "Cosmetics", "Small gifts"],
  },
  {
    id: "tp-002",
    categoryId: "textile-pouches",
    name: "Cotton Canvas Bag",
    description: "Durable cotton canvas bag with custom printing for reusable packaging.",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800",
    materials: ["Organic cotton", "Eco-friendly ink"],
    applications: ["Reusable bags", "Tote bags", "Eco packaging"],
  },
  {
    id: "tp-003",
    categoryId: "textile-pouches",
    name: "Silk Lined Jewelry Box",
    description: "Elegant silk-lined pouch with zipper closure for premium jewelry storage.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800",
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
