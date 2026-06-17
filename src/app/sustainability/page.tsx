import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import images from "@/data/images";

const initiatives = [
  {
    title: "Recycled Materials",
    description: "We prioritize FSC-certified papers and post-consumer recycled fibers, reducing waste and supporting circular economies.",
    icon: "♻️",
  },
  {
    title: "Eco-Friendly Inks",
    description: "Soy-based and vegetable inks replace petroleum-derived alternatives, delivering vibrant colors with lower VOC emissions.",
    icon: "🌿",
  },
  {
    title: "Energy-Efficient Production",
    description: "Our facilities use solar power and energy-efficient machinery, reducing our carbon footprint by 40% since 2020.",
    icon: "⚡",
  },
  {
    title: "Biodegradable Options",
    description: "Compostable films, plant-based adhesives, and biodegradable coatings ensure end-of-life sustainability.",
    icon: "🌱",
  },
  {
    title: "Minimalist Design",
    description: "We help brands reduce material usage through intelligent structural design without compromising luxury aesthetics.",
    icon: "✨",
  },
  {
    title: "Global Certifications",
    description: "Our products meet ISO 14001, FSC, and REACH standards, ensuring compliance with international environmental regulations.",
    icon: "🏆",
  },
];

const stats = [
  { number: "40%", label: "Carbon Reduction" },
  { number: "85%", label: "Recycled Content" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Global Partners" },
];

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-brand-grey">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6">
            Sustainability
          </h1>
          <h2 className="text-5xl md:text-7xl font-playfair tracking-tighter leading-tight mb-6">
            Luxury Without Compromise
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-light">
            We believe that exceptional packaging should not come at the expense of the planet. Our commitment to sustainability drives every decision we make.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl font-playfair mb-3">{stat.number}</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">
              Our Initiatives
            </h2>
            <h3 className="text-4xl font-playfair tracking-tight">
              Building a Greener Future
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((item) => (
              <div
                key={item.title}
                className="p-8 border border-gray-100 hover:border-brand-gold transition-colors group"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h4 className="text-xl font-playfair mb-4 group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-24 px-6 bg-brand-grey">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6">
              Material Innovation
            </h2>
            <h3 className="text-4xl md:text-5xl font-playfair tracking-tight mb-8">
              Redefining Sustainable Luxury
            </h3>
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
              Our R&D team continuously explores new materials and techniques to push the boundaries of eco-friendly packaging. From mushroom-based foams to seaweed-derived films, we're at the forefront of material innovation.
            </p>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              Every material we select undergoes rigorous testing to ensure it meets our standards for durability, aesthetics, and environmental impact.
            </p>
          </div>
          <div className="aspect-square overflow-hidden bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200"
              alt="Sustainable materials"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6">
            Certifications
          </h2>
          <h3 className="text-4xl font-playfair tracking-tight mb-16">
            Recognized Standards
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["FSC Certified", "ISO 14001", "REACH Compliant", "Carbon Neutral"].map(
              (cert) => (
                <div key={cert} className="p-8 border border-gray-100">
                  <p className="text-lg font-playfair mb-2">{cert}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">
                    Verified
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair tracking-tight mb-8">
            Partner with us for a sustainable future
          </h2>
          <p className="text-gray-300 text-lg mb-10 font-light">
            Let's create packaging that's beautiful, functional, and environmentally responsible.
          </p>
          <Link href="/contact" className="btn-luxury border border-white hover:bg-white hover:text-brand-black">
            Discuss Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
