"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "ELAPACK delivered exactly what we needed — minimal design, perfect material quality, and on-time delivery. The unboxing experience has become one of our biggest brand differentiators.",
    author: "Sophie Laurent",
    role: "Brand Director",
    company: "Maison Lumière, France",
    category: "Fragrance Packaging",
  },
  {
    quote: "We've worked with many packaging suppliers, but ELAPACK stands out for their attention to detail and understanding of luxury aesthetics. Our velvet pouches have received incredible feedback from customers.",
    author: "James Whitfield",
    role: "Head of Operations",
    company: "Aura Beauty, United Kingdom",
    category: "Velvet Pouches",
  },
  {
    quote: "The custom rigid boxes exceeded our expectations — the foil stamping and soft-touch lamination looked premium and felt incredibly high-end. Samples arrived in 7 days as promised.",
    author: "Isabella Marchetti",
    role: "Creative Director",
    company: "Eleganza Milano, Italy",
    category: "Gift Boxes",
  },
  {
    quote: "Reliable partner for our European launches. Communication is clear, quality is consistent, and they understand our market requirements without back and forth.",
    author: "Marcus Bröder",
    role: "Procurement Manager",
    company: "Nordhaus Retail, Germany",
    category: "Luxury Bags",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="py-28 px-6 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-brand-sage uppercase tracking-[0.4em] text-xs font-semibold mb-3 block">
              Client Testimonials
            </span>
            <h2 className="section-title text-white">
              Trusted by brands that<br className="hidden md:block" /> demand the best.
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-brand-sage hover:text-brand-sage transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-brand-sage hover:text-brand-sage transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
          >
            {/* Quote */}
            <div className="md:col-span-2">
              <p className="font-playfair text-2xl md:text-3xl leading-relaxed text-white/90 mb-10">
                "{testimonials[active].quote}"
              </p>
              <div>
                <p className="font-semibold text-sm uppercase tracking-wide text-white">
                  {testimonials[active].author}
                </p>
                <p className="text-white/40 text-xs font-light mt-1">
                  {testimonials[active].role} — {testimonials[active].company}
                </p>
              </div>
            </div>

            {/* Meta */}
            <div className="border-l border-white/10 pl-12 hidden md:block">
              <span className="text-brand-sage uppercase tracking-widest text-xs font-semibold mb-6 block">
                Product Category
              </span>
              <p className="font-playfair text-2xl text-white mb-12">
                {testimonials[active].category}
              </p>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-8 h-[2px] transition-colors ${i === active ? "bg-brand-sage" : "bg-white/20"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile dots */}
        <div className="flex gap-2 mt-8 md:hidden">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-8 h-[2px] transition-colors ${i === active ? "bg-brand-sage" : "bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
