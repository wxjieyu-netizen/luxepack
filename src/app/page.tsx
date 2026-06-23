"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import images from "@/data/images";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Award, Globe, Layers, Zap, ShieldCheck, Leaf } from "lucide-react";
import { client, urlFor, hotProductsQuery, newProductsQuery, faqQuery, teamQuery, newsQuery, certsQuery } from "@/lib/sanity";

// ─── Fallback Static Data (Shown if Sanity is empty) ──────────────────────────

const fallbackHotProducts = [
  { title: "Velvet Drawstring Pouch",  category: "Pouch & Bag",    img: images.prod1 },
  { title: "Magnetic Gift Box",        category: "Box",             img: images.prod2 },
  { title: "Custom Cleaning Cloth",    category: "Cleaning Cloth",  img: images.prod3 },
  { title: "Satin Ribbon & Hangtag",   category: "Ribbon & Tags",   img: images.prod4 },
  { title: "Kraft Shopping Bag",       category: "Pouch & Bag",     img: images.prod5 },
  { title: "Drawer Slide Box",         category: "Box",             img: images.prod6 },
];

const fallbackNewProducts = [
  { title: "Frosted Rigid Box",        category: "Box",             img: images.giftBoxOpen },
  { title: "Eco Canvas Tote",          category: "Pouch & Bag",     img: images.kraftBag },
  { title: "Woven Logo Ribbon",        category: "Ribbon & Tags",   img: images.satinRibbon },
  { title: "Suede Jewelry Pouch",      category: "Pouch & Bag",     img: images.velvetPouch },
];

const coreValues = [
  { icon: Layers,     title: "One-Stop Solution",      desc: "Design, material R&D, sampling, mass production and global logistics — all under one roof." },
  { icon: Award,      title: "Premium Quality",        desc: "FSC-certified materials, SGS-tested inks, and rigorous QC at every production stage." },
  { icon: Globe,      title: "Global Reach",           desc: "Serving 500+ brands across 50+ countries with on-time delivery and competitive MOQs." },
  { icon: Zap,        title: "Fast Turnaround",        desc: "Samples in 7 days. Bulk orders fulfilled in 15–20 days with dedicated production lines." },
  { icon: ShieldCheck,title: "Brand Protection",       desc: "NDA-backed, fully confidential production with exclusive tooling for your brand." },
  { icon: Leaf,       title: "Eco Commitment",         desc: "Recyclable, biodegradable, and FSC-certified options available across all product lines." },
];

const services = [
  { title: "Custom Design & R&D",    desc: "In-house design studio with 3D mockups, material sourcing, and structural engineering." },
  { title: "OEM / ODM Production",   desc: "Full private-label manufacturing with your branding, colours, and specifications." },
  { title: "Quality Control",        desc: "Multi-stage inspection: materials, in-process, pre-shipment and third-party audits." },
  { title: "Global Logistics",       desc: "DDP, FOB, EXW shipping options with real-time tracking and customs documentation." },
  { title: "Low MOQ & Sampling",     desc: "Flexible MOQs starting from 500 pcs. Paid samples delivered within 7 business days." },
  { title: "After-Sale Support",     desc: "Dedicated account manager, reorder management, and continuous design iteration." },
];

const industries = [
  "Beauty & Cosmetics", "Fine Fragrance", "Luxury Fashion", "Jewellery & Watches",
  "Premium Skincare", "Gourmet & Food", "Electronics", "Wellness & Spa",
];

const partners = [ "CHANEL", "DIOR", "HERMÈS", "GUCCI", "YSL", "BURBERRY", "LOEWE", "CELINE" ];

// ─── Components ───────────────────────────────────────────────────────────────

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-grey-mid">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-start w-full py-5 text-left gap-4 hover:text-brand-sage transition-colors"
      >
        <span className="font-semibold text-sm uppercase tracking-wide">{q}</span>
        <ChevronDown size={18} className={`flex-shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180 text-brand-sage" : ""}`} />
      </button>
      {open && (
        <p className="pb-5 text-brand-grey text-sm leading-relaxed font-light">{a}</p>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const [hotProducts, setHotProducts] = useState<any[]>([]);
  const [newProducts, setNewProducts] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);
  const [team, setTeam] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]);
  const [certs, setCerts] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from Sanity
    const fetchData = async () => {
      try {
        const [hotData, newData, faqData, teamData, newsData, certData] = await Promise.all([
          client.fetch(hotProductsQuery),
          client.fetch(newProductsQuery),
          client.fetch(faqQuery),
          client.fetch(teamQuery),
          client.fetch(newsQuery),
          client.fetch(certsQuery),
        ]);
        
        if (hotData?.length > 0) setHotProducts(hotData);
        if (newData?.length > 0) setNewProducts(newData);
        if (faqData?.length > 0) setFaqs(faqData);
        if (teamData?.length > 0) setTeam(teamData);
        if (newsData?.length > 0) setNews(newsData);
        if (certData?.length > 0) setCerts(certData);
      } catch (err) {
        console.error("Sanity fetch error:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-white font-montserrat">
      <Navbar />
      <Hero />

      {/* ② About Us */}
      <section id="about" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="section-label">About Us</span>
            <h2 className="font-playfair text-5xl md:text-7xl tracking-tight leading-tight">Factory Strength & Craftsmanship</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <FadeIn className="md:col-span-2 aspect-[16/9] overflow-hidden" delay={0.1}>
              <img src={images.factory} alt="Factory" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </FadeIn>
            <div className="flex flex-col gap-4">
              <FadeIn className="flex-1 overflow-hidden" delay={0.2}>
                <img src={images.craftsmanship} alt="Craftsmanship" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </FadeIn>
              <FadeIn className="flex-1 overflow-hidden" delay={0.3}>
                <img src={images.productFlatlay} alt="Products" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </FadeIn>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
            {[
              { v: "15+",    l: "Years of Excellence" },
              { v: "500+",   l: "Global Brand Clients" },
              { v: "50+",    l: "Countries Served" },
              { v: "200+",   l: "Skilled Artisans" },
            ].map((s) => (
              <FadeIn key={s.l}>
                <p className="font-playfair text-6xl text-brand-sage mb-2">{s.v}</p>
                <p className="text-xs uppercase tracking-widest text-brand-grey">{s.l}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mb-10">
            <span className="section-label">Our Partners</span>
            <h2 className="font-playfair text-5xl md:text-7xl tracking-tight leading-tight">Trusted by the World's Finest Brands</h2>
          </FadeIn>
          <FadeIn>
            <div className="relative overflow-hidden">
              <img
                src="https://sc02.alicdn.com/kf/Hc8e3ba7fa8e44c2d827b18643e6f1ea5Y.png"
                alt="Our Partner Brands"
                className="w-full object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ③ Why Choose Us */}
      <section id="why-us" className="py-28 px-6 bg-brand-grey-light">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="section-label">Why Choose Us</span>
            <h2 className="font-playfair text-5xl md:text-7xl tracking-tight leading-tight">Our Core Value Advantages</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="bg-white p-8 border border-brand-grey-mid hover:border-brand-sage transition-colors group h-full">
                  <div className="w-12 h-12 bg-brand-sage/10 flex items-center justify-center mb-6 group-hover:bg-brand-sage/20 transition-colors">
                    <Icon size={22} className="text-brand-sage" />
                  </div>
                  <h3 className="font-semibold uppercase tracking-widest text-sm mb-3 group-hover:text-brand-sage transition-colors">{title}</h3>
                  <p className="text-brand-grey text-sm font-light leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ④ Hot Products */}
      <section id="hot-products" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="section-label">Hot Products</span>
              <h2 className="font-playfair text-5xl md:text-7xl tracking-tight leading-tight">Bestselling Collections</h2>
            </div>
            <Link href="/products" className="btn-outline self-start md:self-auto">View All →</Link>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {(hotProducts.length > 0 ? hotProducts : fallbackHotProducts).map((p, i) => (
              <FadeIn key={p._id || p.title} delay={i * 0.07}>
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden bg-brand-grey-light mb-4 relative">
                    <img
                      src={p.image ? urlFor(p.image).width(600).url() : p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-sage/0 group-hover:bg-brand-sage/10 transition-colors duration-500" />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] uppercase tracking-widest px-3 py-1 text-brand-sage font-semibold">
                      {p.category}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm uppercase tracking-wide group-hover:text-brand-sage transition-colors">{p.title}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ Full-screen divider */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={images.lifestyle} alt="Lifestyle" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <FadeIn>
            <p className="text-white/70 uppercase tracking-[0.5em] text-xs mb-4">Our Promise</p>
            <h2 className="font-playfair text-white text-5xl md:text-7xl tracking-tight max-w-3xl">
              Every box tells your brand's story.
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* ⑥ New Arrivals */}
      <section id="new-products" className="py-28 px-6 bg-brand-grey-light">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="section-label">New Arrivals</span>
            <h2 className="font-playfair text-5xl md:text-7xl tracking-tight leading-tight">Latest Product Releases</h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(newProducts.length > 0 ? newProducts : fallbackNewProducts).map((p, i) => (
              <FadeIn key={p._id || p.title} delay={i * 0.08}>
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden bg-white mb-4 border border-brand-grey-mid group-hover:border-brand-sage transition-colors relative">
                    <img
                      src={p.image ? urlFor(p.image).width(500).url() : p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-0 right-0 bg-brand-sage text-white text-[9px] uppercase tracking-widest px-2 py-1 font-semibold">New</div>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-sage font-semibold block mb-1">{p.category}</span>
                  <h4 className="font-semibold text-sm uppercase tracking-wide group-hover:text-brand-sage transition-colors">{p.title}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ Our Services */}
      <section id="services" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <FadeIn className="sticky top-24">
            <span className="section-label">Our Services</span>
            <h2 className="font-playfair text-5xl md:text-7xl tracking-tight leading-tight mb-6">End-to-End Packaging Excellence</h2>
            <p className="text-brand-grey text-base font-light leading-relaxed mb-8">
              From the first sketch to your customer's doorstep — we handle every step of the packaging journey with precision and care.
            </p>
            <Link href="/contact" className="btn-primary inline-block">Discuss Your Project</Link>
          </FadeIn>

          <div className="space-y-0">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.07}>
                <div className="flex gap-6 py-6 border-b border-brand-grey-mid group hover:bg-brand-grey-light px-4 -mx-4 transition-colors">
                  <span className="font-playfair text-3xl text-brand-sage-light flex-shrink-0 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold uppercase tracking-wide text-sm mb-2 group-hover:text-brand-sage transition-colors">{s.title}</h3>
                    <p className="text-brand-grey text-sm font-light leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ⑧ Industries */}
      <section id="industries" className="py-28 px-6 bg-brand-sage">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <span className="text-white/60 uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">Industries We Serve</span>
            <h2 className="font-playfair text-white text-5xl md:text-7xl tracking-tight mb-16">Packaging for Every Premium Market</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <FadeIn key={ind} delay={i * 0.05}>
                <div className="border border-white/30 px-6 py-5 hover:bg-white/10 transition-colors group">
                  <span className="text-white uppercase tracking-widest text-xs font-semibold group-hover:text-white transition-colors">{ind}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ⑨ Our Team */}
      <section id="team" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="section-label">Our Team</span>
            <h2 className="font-playfair text-5xl md:text-7xl tracking-tight leading-tight">The People Behind the Craft</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {(team.length > 0 ? team : [
              { name: "Sarah Chen", role: "Head of Design" },
              { name: "James Liu", role: "Production Director" },
              { name: "Mia Zhang", role: "Quality Manager" },
              { name: "Tom Wang", role: "Global Sales Lead" }
            ]).map((m, i) => (
              <FadeIn key={m._id || m.name} delay={i * 0.08}>
                <div className="group text-center">
                  <div className="aspect-[3/4] bg-brand-grey-light mb-4 overflow-hidden border border-brand-grey-mid group-hover:border-brand-sage transition-colors flex items-center justify-center">
                    {m.photo ? (
                      <img src={urlFor(m.photo).width(400).url()} alt={m.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-brand-grey-mid text-center px-4">
                        <div className="w-16 h-16 rounded-full bg-brand-sage/20 mx-auto mb-3 flex items-center justify-center">
                          <span className="text-brand-sage font-playfair text-2xl">{m.name.charAt(0)}</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-brand-grey">Photo Placeholder</p>
                      </div>
                    )}
                  </div>
                  <h4 className="font-semibold uppercase tracking-wide text-sm group-hover:text-brand-sage transition-colors">{m.name}</h4>
                  <p className="text-brand-grey text-xs font-light mt-1">{m.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ⑩ Certifications */}
      <section id="certifications" className="py-28 px-6 bg-brand-grey-light">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="section-label">Certifications</span>
            <h2 className="font-playfair text-5xl md:text-7xl tracking-tight leading-tight">Verified Quality Standards</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {(certs.length > 0 ? certs : [
              { title: "FSC Certified", sub: "Forest Stewardship Council" },
              { title: "ISO 9001", sub: "Quality Management System" },
              { title: "ISO 14001", sub: "Environmental Management" },
              { title: "REACH Compliant", sub: "EU Chemical Safety" },
              { title: "SEDEX Member", sub: "Ethical Trade Audit" },
              { title: "SGS Tested", sub: "Third-Party Lab Verification" },
            ]).map((c, i) => (
              <FadeIn key={c._id || c.title} delay={i * 0.06}>
                <div className="bg-white border border-brand-grey-mid hover:border-brand-sage transition-colors p-6 text-center group aspect-square flex flex-col items-center justify-center">
                  {c.image ? (
                    <img src={urlFor(c.image).width(150).url()} alt={c.title} className="w-12 h-12 object-contain mb-4" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-brand-sage/10 flex items-center justify-center mb-4 group-hover:bg-brand-sage/20 transition-colors">
                      <Award size={20} className="text-brand-sage" />
                    </div>
                  )}
                  <p className="font-semibold text-xs uppercase tracking-wide mb-1 group-hover:text-brand-sage transition-colors">{c.title}</p>
                  <p className="text-[10px] text-brand-grey font-light text-center">{c.sub || c.subtitle}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ⑪ FAQ */}
      <section id="faq" className="py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="section-label">FAQ</span>
            <h2 className="font-playfair text-5xl md:text-7xl tracking-tight leading-tight">Frequently Asked Questions</h2>
          </FadeIn>
          <div>
            {(faqs.length > 0 ? faqs : [
              { question: "What is your minimum order quantity?", answer: "MOQ starts from 500 pcs for most products." },
              { question: "How long does sampling take?", answer: "Standard samples are ready within 7 business days." }
            ]).map((f) => (
              <FaqItem key={f._id || f.question} q={f.question} a={f.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ⑫ News */}
      <section id="news" className="py-28 px-6 bg-brand-grey-light">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="section-label">News & Articles</span>
              <h2 className="font-playfair text-5xl md:text-7xl tracking-tight leading-tight">Insights from ELAPACK</h2>
            </div>
            <button className="btn-outline self-start md:self-auto">View All Articles →</button>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(news.length > 0 ? news : [
              { category: "Trend", title: "Sage Green Takes Over Luxury Packaging", img: images.productFlatlay, date: "Jun 2025" }
            ]).map((n, i) => (
              <FadeIn key={n._id || n.title} delay={i * 0.1}>
                <article className="bg-white group cursor-pointer border border-brand-grey-mid hover:border-brand-sage transition-colors">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={n.coverImage ? urlFor(n.coverImage).width(600).url() : n.img}
                      alt={n.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] bg-brand-sage/10 text-brand-sage px-2 py-1 uppercase tracking-widest font-semibold">{n.category}</span>
                      <span className="text-[10px] text-brand-grey uppercase tracking-widest">{n.publishedAt || n.date}</span>
                    </div>
                    <h3 className="font-semibold text-sm uppercase tracking-wide leading-snug group-hover:text-brand-sage transition-colors">{n.title}</h3>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ⑬ Final CTA */}
      <section className="py-24 px-6 bg-brand-black text-white text-center">
        <FadeIn>
          <span className="text-brand-sage uppercase tracking-[0.4em] text-xs font-semibold mb-6 block">Ready to Start?</span>
          <h2 className="font-playfair text-5xl md:text-7xl tracking-tight mb-8 max-w-3xl mx-auto">Let's Build Your Perfect Packaging.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            <a href="https://wa.me/8613801514296" target="_blank" rel="noopener noreferrer" className="btn-white flex items-center justify-center gap-2">WhatsApp Us</a>
          </div>
        </FadeIn>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
