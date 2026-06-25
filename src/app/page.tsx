"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import images from "@/data/images";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { client, urlFor, hotProductsQuery, newProductsQuery, faqQuery, teamQuery, newsQuery, certsQuery } from "@/lib/sanity";

// ─── Static fallback data ─────────────────────────────────────────────────────

const stats = [
  { value: "500+",  label: "B2B Clients Worldwide" },
  { value: "15+",   label: "Years of Excellence" },
  { value: "95%+",  label: "Client Satisfaction" },
  { value: "50+",   label: "Countries Served" },
];

const whyUs = [
  { num: "01", title: "Trade + Factory Integration",    desc: "Efficient communication, flexible production, reliable costing, and faster response from sample to bulk delivery." },
  { num: "02", title: "One-Stop Custom Service",        desc: "Creative design, structure engineering, materials, printing, finishing, assembly, and export coordination in one workflow." },
  { num: "03", title: "European & US Market Taste",     desc: "Minimal, refined, and internationally aligned visual direction for beauty, fragrance, fashion, and lifestyle categories." },
  { num: "04", title: "Multi-Category Supply",          desc: "Gift boxes, luxury paper bags, textile pouches, ribbons, labels, inserts, and complete brand packaging sets." },
  { num: "05", title: "Premium Materials & Craft",      desc: "Advanced finishing, tactile paper, fabric, foil stamping, embossing, debossing, lamination, and sustainable options." },
  { num: "06", title: "Quality Detail Control",         desc: "Strict inspection across color accuracy, structure, surface finishing, packaging protection, and export shipping standards." },
];

const challenges = [
  { title: "Brand Dilution",       desc: "Does your current packaging truly reflect the premium quality of your product, or does it get lost in a sea of sameness?" },
  { title: "Logistics Risk",       desc: "Are preventable shipping damages eroding your profit margins and your brand's reputation for quality?" },
  { title: "Missed Connection",    desc: "Is your unboxing experience a forgettable moment, or a powerful opportunity to forge a lasting emotional connection?" },
];

const services = [
  { title: "Packaging Design Optimization", desc: "Improve product display, premium perception, and online conversion with market-aligned structure and visuals." },
  { title: "Material & Craft Development",  desc: "Paper, textile, ribbon, coating, lamination, embossing, foil, handles, closures, and sustainable alternatives." },
  { title: "Smart Packaging & IoT",         desc: "Integrated tracking and logistics-focused packaging concepts to protect products and reduce supply-chain loss." },
  { title: "B2B Account Support",           desc: "Clear communication, tailored recommendations, sampling guidance, production follow-up, and delivery updates." },
];

const industries = [
  { name: "Beauty",    desc: "Skincare, cosmetics, beauty devices, PR kits, and retail launch sets." },
  { name: "Fragrance", desc: "Perfume boxes, fragrance gift sets, sleeves, inserts, bags, and ribbons." },
  { name: "Fashion",   desc: "Luxury shopping bags, garment packaging, textile pouches, labels, and tags." },
  { name: "Lifestyle", desc: "Consumer electronics, e-commerce, food gifts, accessories, and premium retail." },
];

const teamRoles = [
  { role: "Design",      sub: "Visual + Structure" },
  { role: "R&D",         sub: "Materials + Craft" },
  { role: "Production",  sub: "Precision + Scale" },
  { role: "QC",          sub: "Detail Control" },
];

const fallbackHotProducts = [
  { title: "Velvet Drawstring Pouch",  category: "Pouch & Bag",   img: images.prod1 },
  { title: "Magnetic Gift Box",        category: "Box",            img: images.prod2 },
  { title: "Custom Cleaning Cloth",    category: "Cleaning Cloth", img: images.prod3 },
  { title: "Satin Ribbon & Hangtag",   category: "Ribbon & Tags",  img: images.prod4 },
  { title: "Kraft Shopping Bag",       category: "Pouch & Bag",    img: images.prod5 },
  { title: "Drawer Slide Box",         category: "Box",            img: images.prod6 },
];

const fallbackNewProducts = [
  { title: "Frosted Rigid Box",    category: "Box",           img: images.giftBoxOpen },
  { title: "Eco Canvas Tote",      category: "Pouch & Bag",   img: images.kraftBag },
  { title: "Woven Logo Ribbon",    category: "Ribbon & Tags", img: images.satinRibbon },
  { title: "Suede Jewelry Pouch",  category: "Pouch & Bag",   img: images.velvetPouch },
];

const fallbackFaqs = [
  { question: "What packaging categories can you customize?",   answer: "We customize rigid gift boxes, luxury paper bags, textile pouches, cotton and velvet bags, ribbons, labels, inserts, sleeves, and complete brand packaging sets." },
  { question: "Do you support design and material development?", answer: "Yes. We provide creative direction, structure suggestions, material recommendations, finishing options, sampling, and production optimization for premium brand presentation." },
  { question: "Can you serve European and US market requirements?", answer: "Yes. Our visual direction, communication process, quality control, packaging protection, and export coordination are developed for international B2B buyers." },
  { question: "Do you offer sustainable packaging solutions?",   answer: "We can recommend recyclable paper, reusable textile packaging, reduced-plastic structures, and eco-conscious packaging systems based on your project needs." },
  { question: "What is your minimum order quantity?",           answer: "MOQ starts from 500 pcs for most products. For custom projects we recommend starting with a paid sample." },
  { question: "How long does sampling take?",                   answer: "Standard samples are ready within 7 business days. Complex custom dies or special materials may take 10–14 days." },
];

const fallbackNews = [
  { category: "Trend",  title: "Sage Green Takes Over Luxury Packaging in 2025",        img: images.productFlatlay, date: "Jun 2025" },
  { category: "Guide",  title: "How to Choose the Right Packaging MOQ for Your Brand",  img: images.craftsmanship,  date: "May 2025" },
  { category: "News",   title: "ELAPACK Achieves ISO 14001 Environmental Certification", img: images.sustainable,    date: "Apr 2025" },
];

const fallbackCerts = [
  { title: "FSC Certified",    subtitle: "Forest Stewardship Council" },
  { title: "ISO 9001",         subtitle: "Quality Management System" },
  { title: "ISO 14001",        subtitle: "Environmental Management" },
  { title: "REACH Compliant",  subtitle: "EU Chemical Safety" },
  { title: "SEDEX Member",     subtitle: "Ethical Trade Audit" },
  { title: "SGS Tested",       subtitle: "Third-Party Lab Verification" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.65, delay }}
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
        className="flex justify-between items-center w-full py-5 text-left gap-6 group"
      >
        <span className="text-sm font-semibold uppercase tracking-wide group-hover:text-brand-sage transition-colors">{q}</span>
        <span className={`text-xl font-light flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45 text-brand-sage" : ""}`}>+</span>
      </button>
      {open && (
        <p className="pb-5 text-brand-grey text-sm leading-relaxed font-light">{a}</p>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [hotProducts, setHotProducts] = useState<any[]>([]);
  const [newProducts, setNewProducts] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]);
  const [certs, setCerts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hotData, newData, faqData, newsData, certData] = await Promise.all([
          client.fetch(hotProductsQuery),
          client.fetch(newProductsQuery),
          client.fetch(faqQuery),
          client.fetch(newsQuery),
          client.fetch(certsQuery),
        ]);
        if (hotData?.length)  setHotProducts(hotData);
        if (newData?.length)  setNewProducts(newData);
        if (faqData?.length)  setFaqs(faqData);
        if (newsData?.length) setNews(newsData);
        if (certData?.length) setCerts(certData);
      } catch (e) { /* use fallbacks */ }
    };
    fetchData();
  }, []);

  const displayHot  = hotProducts.length  ? hotProducts  : fallbackHotProducts;
  const displayNew  = newProducts.length  ? newProducts  : fallbackNewProducts;
  const displayFaqs = faqs.length         ? faqs         : fallbackFaqs;
  const displayNews = news.length         ? news         : fallbackNews;
  const displayCerts= certs.length        ? certs        : fallbackCerts;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ① Hero */}
      <Hero />

      {/* ② Stats Bar */}
      <section className="border-b border-brand-grey-mid bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-grey-mid">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.07} className="py-10 px-8 text-center">
              <p className="font-playfair text-4xl md:text-5xl text-brand-black mb-2">{s.value}</p>
              <p className="text-[11px] uppercase tracking-widest text-brand-grey font-medium">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ③ About Us */}
      <section id="about" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="section-label">About Us</span>
            <h2 className="section-title mb-6">
              Packaging aesthetics built by integrated design and manufacturing.
            </h2>
            <p className="text-brand-grey text-sm leading-relaxed font-light mb-8 max-w-lg">
              We are a trade-and-manufacturing integrated packaging partner serving premium brands in Europe and North America. Our strength combines creative design, material development, precision production, and stable delivery.
            </p>
            <Link href="/about" className="btn-outline gap-2">
              Learn More <ChevronRight size={14} />
            </Link>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4">
            <FadeIn delay={0.1} className="aspect-[4/5] overflow-hidden">
              <img src={images.factory} alt="Factory" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </FadeIn>
            <div className="flex flex-col gap-4">
              <FadeIn delay={0.2} className="aspect-square overflow-hidden">
                <img src={images.craftsmanship} alt="Craftsmanship" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </FadeIn>
              <FadeIn delay={0.3} className="aspect-square overflow-hidden">
                <img src={images.productFlatlay} alt="Products" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ④ Brand Showcase */}
      <section className="py-16 px-6 bg-brand-grey-light border-y border-brand-grey-mid">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-10">
            <span className="section-eyebrow">Brand Showcase</span>
            <h3 className="section-subtitle">Refined packaging systems for premium brands.</h3>
          </FadeIn>
          <FadeIn>
            <img
              src="https://sc02.alicdn.com/kf/Hc8e3ba7fa8e44c2d827b18643e6f1ea5Y.png"
              alt="Partner Brands"
              className="w-full object-contain"
            />
          </FadeIn>
        </div>
      </section>

      {/* ⑤ Why Choose Us */}
      <section id="why-us" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title max-w-2xl">Core value advantages for international B2B brands.</h2>
          </FadeIn>
          <p className="text-brand-grey text-sm font-light leading-relaxed max-w-2xl mb-16">
            From refined textile handling to premium finishing details, we transform brand concepts into elegant, consistent, and export-ready packaging solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-brand-grey-mid">
            {whyUs.map(({ num, title, desc }, i) => (
              <FadeIn key={num} delay={i * 0.06}
                className="border-r border-b border-brand-grey-mid p-8 group hover:bg-brand-grey-light transition-colors"
              >
                <span className="font-playfair text-4xl text-brand-grey-mid group-hover:text-brand-sage transition-colors mb-6 block">{num}</span>
                <h3 className="font-semibold text-sm uppercase tracking-wide mb-3 group-hover:text-brand-sage transition-colors">{title}</h3>
                <p className="text-brand-grey text-xs font-light leading-relaxed">{desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ Hot Products */}
      <section id="hot-products" className="py-28 px-6 bg-brand-grey-light">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="section-label">Hot Product</span>
              <h2 className="section-title">Bestselling Collections</h2>
            </div>
            <Link href="/contact" className="btn-outline gap-2 self-start">
              Request Samples <ChevronRight size={14} />
            </Link>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-brand-grey-mid">
            {displayHot.map((p, i) => (
              <FadeIn key={p._id || p.title} delay={i * 0.05} className="bg-white group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden bg-brand-grey-light relative">
                  <img
                    src={p.image ? urlFor(p.image).width(600).url() : p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>
                <div className="p-5">
                  <span className="text-[10px] uppercase tracking-widest text-brand-sage font-semibold block mb-1">{p.category}</span>
                  <h4 className="font-semibold text-sm uppercase tracking-wide group-hover:text-brand-sage transition-colors">{p.title}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ Brand Narrative full-width */}
      <section className="relative h-[55vh] overflow-hidden">
        <img src={images.lifestyle} alt="Brand Narrative" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-dark/60 flex flex-col items-center justify-center text-center px-6">
          <FadeIn>
            <span className="text-white/50 uppercase tracking-[0.5em] text-[11px] font-medium mb-5 block">Brand Narrative Through Detail</span>
            <h2 className="section-title text-white max-w-3xl mx-auto">
              Minimal lines. Refined structure. Memorable tactile value.
            </h2>
            <p className="text-white/60 text-sm font-light mt-6 max-w-xl mx-auto leading-relaxed">
              Every box, bag, pouch, ribbon, and label is developed to align with your brand identity, market positioning, sustainability goals, and premium customer experience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ⑧ New Products */}
      <section id="new-products" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <span className="section-label">New Product</span>
            <h2 className="section-title">Fresh packaging concepts for premium launches.</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-grey-mid">
            {displayNew.map((p, i) => (
              <FadeIn key={p._id || p.title} delay={i * 0.07} className="bg-white group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={p.image ? urlFor(p.image).width(500).url() : p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-0 right-0 bg-brand-sage text-white text-[9px] uppercase tracking-widest px-2 py-1 font-semibold">New</div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-xs uppercase tracking-wide group-hover:text-brand-sage transition-colors">{p.title}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ⑨ Challenges vs Mission */}
      <section className="py-28 px-6 bg-brand-grey-light">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="section-eyebrow">Our Mission & Your Challenges</span>
            <h2 className="section-title max-w-3xl mx-auto">Your Brand is Exceptional. Your Packaging Should Be, Too.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Challenges */}
            <div>
              <h3 className="font-semibold uppercase tracking-widest text-xs text-brand-grey mb-8">We Understand Your Challenges</h3>
              <div className="space-y-6">
                {challenges.map((c, i) => (
                  <FadeIn key={c.title} delay={i * 0.08}>
                    <div className="border-l-2 border-brand-sage pl-6">
                      <h4 className="font-semibold text-sm uppercase tracking-wide mb-2">{c.title}</h4>
                      <p className="text-brand-grey text-xs font-light leading-relaxed">{c.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            {/* Mission */}
            <FadeIn delay={0.1}>
              <div className="bg-white p-10 h-full">
                <h3 className="font-semibold uppercase tracking-widest text-xs text-brand-grey mb-6">Our Mission is Your Solution</h3>
                <p className="text-brand-grey text-sm font-light leading-relaxed mb-8">
                  Our mission is to empower high-end brands to tell their story with elegance and impact. We believe packaging is the silent brand ambassador that speaks volumes before the product is even revealed.
                </p>
                <div className="space-y-5">
                  {services.map((s, i) => (
                    <div key={s.title} className="flex gap-4 group">
                      <span className="font-playfair text-brand-sage text-lg flex-shrink-0">{String(i+1).padStart(2,"0")}</span>
                      <div>
                        <h4 className="font-semibold text-xs uppercase tracking-wide mb-1 group-hover:text-brand-sage transition-colors">{s.title}</h4>
                        <p className="text-brand-grey text-xs font-light leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ⑩ Industries */}
      <section id="industries" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <span className="section-label">Industries We Serve</span>
            <h2 className="section-title">Built for brands where presentation defines value.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-grey-mid">
            {industries.map(({ name, desc }, i) => (
              <FadeIn key={name} delay={i * 0.07} className="bg-white p-8 group hover:bg-brand-sage hover:text-white transition-colors">
                <h3 className="font-playfair text-2xl mb-4 group-hover:text-white transition-colors">{name}</h3>
                <p className="text-brand-grey text-xs font-light leading-relaxed group-hover:text-white/80 transition-colors">{desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ⑪ Team */}
      <section id="team" className="py-28 px-6 bg-brand-grey-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="section-label">Our Team</span>
            <h2 className="section-title mb-6">Professional teams across design, engineering, production, and export.</h2>
            <p className="text-brand-grey text-sm font-light leading-relaxed">
              Our cross-functional team turns brand ideas into scalable packaging products with stable quality, controlled detail, and globally aligned execution.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 gap-px bg-brand-grey-mid">
            {teamRoles.map(({ role, sub }, i) => (
              <FadeIn key={role} delay={i * 0.08} className="bg-white p-8 group hover:bg-brand-black hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-brand-sage/20 flex items-center justify-center mb-4 group-hover:bg-brand-sage/30 transition-colors">
                  <span className="text-brand-sage font-playfair text-lg">{role.charAt(0)}</span>
                </div>
                <h4 className="font-semibold text-sm uppercase tracking-wide mb-1 group-hover:text-white transition-colors">{role}</h4>
                <p className="text-brand-grey text-xs font-light group-hover:text-white/60 transition-colors">{sub}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ⑫ Certifications */}
      <section id="certifications" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="section-label">Certificates</span>
            <h2 className="section-title">Quality, responsibility, and export-ready compliance.</h2>
            <p className="text-brand-grey text-sm font-light mt-4 max-w-xl mx-auto">
              Certificate display area for factory qualifications, quality systems, sustainability documents, and material compliance reports.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-brand-grey-mid">
            {displayCerts.map((c, i) => (
              <FadeIn key={c._id || c.title} delay={i * 0.05} className="bg-white p-6 text-center group hover:bg-brand-grey-light transition-colors">
                {c.image ? (
                  <img src={urlFor(c.image).width(120).url()} alt={c.title} className="w-12 h-12 object-contain mx-auto mb-4" />
                ) : (
                  <div className="w-12 h-12 bg-brand-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-brand-sage text-xs font-bold uppercase">{c.title.slice(0,3)}</span>
                  </div>
                )}
                <p className="font-semibold text-xs uppercase tracking-wide mb-1 group-hover:text-brand-sage transition-colors">{c.title}</p>
                <p className="text-[10px] text-brand-grey font-light">{c.subtitle || c.sub}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ⑬ FAQ */}
      <section id="faq" className="py-28 px-6 bg-brand-grey-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn className="sticky top-24 self-start">
            <span className="section-label">FAQ</span>
            <h2 className="section-title mb-6">Frequently asked questions.</h2>
            <p className="text-brand-grey text-sm font-light leading-relaxed mb-8">
              Can't find what you're looking for? Our team is happy to help with any packaging enquiry.
            </p>
            <Link href="/contact" className="btn-outline gap-2">
              Contact Us <ChevronRight size={14} />
            </Link>
          </FadeIn>
          <div>
            {displayFaqs.map((f) => (
              <FaqItem key={f._id || f.question} q={f.question} a={f.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ⑭ News */}
      <section id="news" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="section-label">News & Articles</span>
              <h2 className="section-title">Market insights for smarter packaging decisions.</h2>
            </div>
            <button className="btn-outline self-start gap-2">Read More <ChevronRight size={14} /></button>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-grey-mid">
            {displayNews.map((n, i) => (
              <FadeIn key={n._id || n.title} delay={i * 0.1} className="bg-white group cursor-pointer">
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
                    <span className="text-[10px] text-brand-grey">{n.publishedAt || n.date}</span>
                  </div>
                  <h3 className="font-semibold text-sm uppercase tracking-wide leading-snug group-hover:text-brand-sage transition-colors">{n.title}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ⑮ CTA */}
      <section className="py-28 px-6 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="text-brand-sage uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">Start A Premium Packaging Project</span>
            <h2 className="section-title mb-6">Ready to build a packaging system that elevates your brand?</h2>
            <p className="text-white/50 text-sm font-light leading-relaxed">
              Share your product category, target market, quantity, material direction, and visual references. Our team will turn your brand intent into refined, production-ready packaging.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary gap-2">
              Email Us <ChevronRight size={14} />
            </Link>
            <a
              href="https://wa.me/8613801514296?text=Hi%20ELAPACK%2C%20I%27m%20interested%20in%20your%20packaging%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white gap-2"
            >
              WhatsApp Us <ChevronRight size={14} />
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
      <ExitIntentPopup />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: displayFaqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
    </main>
  );
}
}
      />
    </main>
  );
}
})),
          }),
        }}
      />
    </main>
  );
}
