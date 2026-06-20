import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories, getProductsByCategory } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name} | ELAPACK`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);

  if (!cat) {
    notFound();
  }

  const products = getProductsByCategory(cat.id);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <Link
            href="/products"
            className="text-white/70 text-xs uppercase tracking-widest hover:text-brand-gold transition-colors mb-6 inline-block"
          >
            ← Back to Collections
          </Link>
          <h1 className="text-white text-5xl md:text-7xl font-playfair tracking-tighter mb-6">
            {cat.name}
          </h1>
          <p className="text-white/90 text-lg font-light max-w-2xl mx-auto">
            {cat.description}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-brand-grey">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {cat.features.map((feature) => (
              <div
                key={feature}
                className="text-center p-6 bg-white border border-gray-100"
              >
                <p className="text-sm font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-playfair tracking-tight mb-16">
            Product Range
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-6 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl font-playfair tracking-tight mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm font-light mb-4">
                  {product.description}
                </p>
                <div className="mb-4">
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">
                    Materials
                  </p>
                  <p className="text-sm text-gray-700 font-light">
                    {product.materials.join(", ")}
                  </p>
                </div>
                <div className="mb-6">
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">
                    Applications
                  </p>
                  <p className="text-sm text-gray-700 font-light">
                    {product.applications.join(", ")}
                  </p>
                </div>
                <button className="text-sm uppercase tracking-widest font-medium hover:text-brand-gold transition-colors">
                  Request Quote →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair tracking-tight mb-8">
            Ready to elevate your packaging?
          </h2>
          <p className="text-gray-300 text-lg mb-10 font-light">
            Get a custom quote tailored to your brand's unique needs.
          </p>
          <Link href="/contact" className="btn-luxury border border-white hover:bg-white hover:text-brand-black">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
