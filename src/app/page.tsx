import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Bespoke Gift Boxes",
    category: "Rigid Box",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800",
  },
  {
    title: "Eco-Luxury Bags",
    category: "Recycled Paper",
    image: "https://images.unsplash.com/photo-1549462184-b09ad0a4af40?q=80&w=800",
  },
  {
    title: "Velvet Pouches",
    category: "Textile",
    image: "https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?q=80&w=800",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-8">The Philosophy</h2>
          <p className="text-3xl md:text-5xl font-playfair leading-tight tracking-tight">
            We believe that packaging is not just a container, but the first tactile encounter between a brand and its audience.
          </p>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 px-6 bg-brand-grey">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Our Matrix</h2>
              <h3 className="text-4xl font-playfair tracking-tight">Signature Collections</h3>
            </div>
            <button className="hidden md:flex items-center text-sm uppercase tracking-widest font-medium hover:text-brand-gold transition-colors">
              View All <ArrowRight className="ml-2" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden bg-gray-200 mb-6 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 block">{item.category}</span>
                <h4 className="text-xl font-playfair tracking-tight">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Highlight */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="aspect-square bg-gray-100 overflow-hidden relative">
               <img 
                 src="https://images.unsplash.com/photo-1584305650130-911293a1df88?q=80&w=1200" 
                 className="w-full h-full object-cover" 
                 alt="R&D Lab"
               />
               <div className="absolute top-10 right-10 bg-white/90 backdrop-blur p-8 max-w-[200px] shadow-2xl">
                  <p className="text-3xl font-playfair mb-2">15+</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">Years of Craftsmanship</p>
               </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6">One-Stop Solution</h2>
            <h3 className="text-4xl md:text-6xl font-playfair leading-tight tracking-tight mb-8">
              From Creative Design to Lean Production.
            </h3>
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
              Our end-to-end service encompasses initial conceptualization, material R&D, and precision manufacturing. We specialize in creating cohesive brand identities through unified packaging sets.
            </p>
            <ul className="space-y-4 mb-12">
              {['Creative Strategy', 'Material R&D', 'Prototyping', 'Global Logistics'].map((text) => (
                <li key={text} className="flex items-center text-sm uppercase tracking-widest">
                  <span className="w-2 h-[1px] bg-brand-gold mr-4"></span> {text}
                </li>
              ))}
            </ul>
            <button className="btn-luxury">Explore Solutions</button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-brand-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-playfair tracking-tight mb-10">Ready to redefine your brand's unboxing experience?</h2>
          <button className="btn-luxury border border-white hover:bg-white hover:text-brand-black">Get a Custom Quote</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
