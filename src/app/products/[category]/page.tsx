import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories, getProductsByCategory } from "@/data/products";
import { categoryKeywords } from "@/lib/seo-keywords";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const seo = categoryKeywords[category];
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};

  const base = "https://www.elapack.com";
  return {
    title: seo?.title || `${cat.name} | ELAPACK`,
    description: seo?.description || cat.description,
    keywords: seo?.keywords || [],
    alternates: { canonical: `${base}/products/${category}` },
    openGraph: {
      title: seo?.title || cat.name,
      description: seo?.description || cat.description,
      url: `${base}/products/${category}`,
      images: [{ url: cat.image, width: 1200, height: 630, alt: cat.name }],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const products = getProductsByCategory(cat.id);
  const seo = categoryKeywords[category];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: cat.name,
    description: seo?.description || cat.description,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.description,
        image: p.image,
        brand: { "@type": "Brand", name: "ELAPACK" },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "ELAPACK" },
        },
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-brand-grey-light border-b border-brand-grey-mid overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Link
              href="/products"
              className="text-[11px] uppercase tracking-widest text-brand-grey hover:text-brand-sage transition-colors mb-6 inline-flex items-center gap-1"
            >
              ← All Collections
            </Link>
            <span className="section-label">{cat.name}</span>
            <h1 className="section-title mb-6">
              {seo?.h1 || cat.name}
            </h1>
            <p className="text-brand-grey text-sm font-light leading-relaxed mb-8 max-w-lg">
              {seo?.intro || cat.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/contact?product=${cat.slug}`}
                className="btn-primary gap-2"
              >
                Request Free Sample <ChevronRight size={14} />
              </Link>
              <Link href="/contact" className="btn-outline gap-2">
                Get a Quote <ChevronRight size={14} />
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      {seo?.benefits && (
        <section className="py-16 px-6 bg-white border-b border-brand-grey-mid">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-brand-grey font-semibold mb-8">
              Key Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-brand-grey-mid">
              {seo.benefits.map((b, i) => (
                <div
                  key={i}
                  className="border-r border-b border-brand-grey-mid p-6 hover:bg-brand-grey-light transition-colors group"
                >
                  <span className="font-playfair text-2xl text-brand-grey-mid group-hover:text-brand-sage transition-colors block mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-brand-black font-medium leading-snug">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-20 px-6 bg-brand-grey-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest text-brand-grey font-semibold mb-10">
            Product Range — {products.length} Items
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-grey-mid">
            {products.map((product) => (
              <div key={product.id} className="bg-white group">
                <div className="aspect-[4/5] overflow-hidden bg-brand-grey-light">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 border-t border-brand-grey-mid">
                  <h3 className="font-semibold text-sm uppercase tracking-wide mb-3 group-hover:text-brand-sage transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-brand-grey text-xs font-light leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-[10px] uppercase tracking-widest text-brand-grey font-semibold">
                      Materials
                    </p>
                    <p className="text-xs text-brand-black font-light">
                      {product.materials.join(" · ")}
                    </p>
                  </div>
                  <div className="space-y-2 mb-6">
                    <p className="text-[10px] uppercase tracking-widest text-brand-grey font-semibold">
                      Applications
                    </p>
                    <p className="text-xs text-brand-black font-light">
                      {product.applications.join(" · ")}
                    </p>
                  </div>
                  <Link
                    href={`/contact?product=${product.name}`}
                    className="text-[11px] uppercase tracking-widest font-semibold text-brand-sage hover:text-brand-sage-dark transition-colors inline-flex items-center gap-1"
                  >
                    Request Sample <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <section className="py-20 px-6 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-sage uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">
              Start Your Project
            </span>
            <h2 className="section-title mb-4">
              Ready to customize {cat.name.toLowerCase()} for your brand?
            </h2>
            <p className="text-white/50 text-sm font-light leading-relaxed">
              Share your requirements — quantity, size, material, print, and reference images. Our team provides a detailed quote within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { label: "Request Free Sample", href: `/contact?product=${cat.slug}&type=sample`, primary: true },
              { label: "Get a Custom Quote", href: `/contact?product=${cat.slug}&type=quote`, primary: false },
              { label: "WhatsApp Us Now", href: "https://wa.me/8613801514296?text=Hi%20ELAPACK%2C%20I%27m%20interested%20in%20a%20custom%20packaging%20quote.", primary: false },
            ].map((b) => (
              <Link
                key={b.label}
                href={b.href}
                className={b.primary ? "btn-primary gap-2" : "btn-white gap-2"}
                {...(b.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {b.label} <ChevronRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Product schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </main>
  );
}
