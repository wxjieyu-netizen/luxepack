import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const milestones = [
  { year: "2008", title: "Founded", description: "Started as a small workshop specializing in luxury gift boxes." },
  { year: "2012", title: "Expansion", description: "Expanded to 5,000 sqm facility and introduced automated production lines." },
  { year: "2015", title: "Global Reach", description: "Began serving European and American luxury brands." },
  { year: "2018", title: "Sustainability Focus", description: "Launched eco-friendly product lines and achieved FSC certification." },
  { year: "2022", title: "Innovation Hub", description: "Established R&D center for material science and design innovation." },
  { year: "2026", title: "Future Forward", description: "Carbon-neutral operations and industry-leading sustainable packaging solutions." },
];

const values = [
  {
    title: "Craftsmanship",
    description: "Every detail matters. From material selection to finishing touches, we uphold the highest standards of quality.",
  },
  {
    title: "Innovation",
    description: "We continuously push boundaries, exploring new materials, techniques, and design possibilities.",
  },
  {
    title: "Sustainability",
    description: "Environmental responsibility is embedded in our DNA, guiding every decision we make.",
  },
  {
    title: "Partnership",
    description: "We build long-term relationships with our clients, becoming an extension of their brand vision.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-brand-grey">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6">
            Our Story
          </h1>
          <h2 className="text-5xl md:text-7xl font-playfair tracking-tighter leading-tight mb-6">
            Crafting Excellence Since 2008
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-light">
            We are a team of passionate artisans, designers, and engineers dedicated to creating packaging that tells stories and elevates brands.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-3xl md:text-4xl font-playfair leading-tight tracking-tight">
            To be the trusted partner for global luxury brands, delivering innovative, sustainable, and aesthetically superior packaging solutions.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-brand-grey">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-playfair tracking-tight mb-16 text-center">
            Our Journey
          </h2>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8 items-start"
              >
                <div className="text-center md:text-right">
                  <p className="text-5xl font-playfair text-brand-gold">
                    {milestone.year}
                  </p>
                </div>
                <div className="border-l-2 border-gray-200 pl-8 py-4">
                  <h3 className="text-2xl font-playfair mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">
              Our Values
            </h2>
            <h3 className="text-4xl font-playfair tracking-tight">
              What Drives Us
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-12 border border-gray-100 hover:border-brand-gold transition-colors"
              >
                <h4 className="text-2xl font-playfair mb-4">{value.title}</h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6">
              Our Team
            </h2>
            <h3 className="text-4xl md:text-5xl font-playfair tracking-tight mb-8">
              200+ Skilled Artisans
            </h3>
            <p className="text-gray-300 text-lg font-light leading-relaxed mb-6">
              Our team comprises experienced designers, engineers, and production specialists who share a passion for excellence and attention to detail.
            </p>
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              We invest in continuous training and foster a culture of innovation, ensuring our team stays at the forefront of packaging technology and design trends.
            </p>
          </div>
          <div className="aspect-square overflow-hidden bg-gray-800">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200"
              alt="Our team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6">
            Global Presence
          </h2>
          <h3 className="text-4xl font-playfair tracking-tight mb-16">
            Serving Brands Worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { region: "North America", countries: "USA, Canada" },
              { region: "Europe", countries: "UK, France, Germany, Italy" },
              { region: "Asia Pacific", countries: "Japan, Australia, Singapore" },
              { region: "Middle East", countries: "UAE, Saudi Arabia" },
            ].map((item) => (
              <div key={item.region} className="p-8 border border-gray-100">
                <p className="text-xl font-playfair mb-2">{item.region}</p>
                <p className="text-sm text-gray-600 font-light">
                  {item.countries}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-grey text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair tracking-tight mb-8">
            Ready to partner with us?
          </h2>
          <p className="text-gray-600 text-lg mb-10 font-light">
            Let's create something extraordinary together.
          </p>
          <Link href="/contact" className="btn-luxury">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
