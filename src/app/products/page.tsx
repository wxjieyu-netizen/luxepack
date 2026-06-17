import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/products";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-brand-grey">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6">
            Our Collections
          </h1>
          <h2 className="text-5xl md:text-7xl font-playfair tracking-tighter leading-tight mb-6">
            Signature Product Lines
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Discover our comprehensive range of luxury packaging solutions, meticulously crafted for brands that demand excellence.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="group block"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-8 relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
              </div>
              <div>
                <h3 className="text-3xl font-playfair tracking-tight mb-4 group-hover:text-brand-gold transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="text-[10px] uppercase tracking-widest text-gray-500 border border-gray-200 px-3 py-1"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <span className="text-sm uppercase tracking-widest font-medium group-hover:text-brand-gold transition-colors">
                  Explore Collection →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-playfair tracking-tight mb-8">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-300 text-lg mb-10 font-light">
            We specialize in custom solutions. Let's discuss your unique packaging needs.
          </p>
          <Link href="/contact" className="btn-luxury border border-white hover:bg-white hover:text-brand-black">
            Request Custom Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
