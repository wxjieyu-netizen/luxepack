"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Image Placeholder with Overlay */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black/80" />
        {/* You can replace this with a high-quality luxury packaging video or image later */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2000')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-brand-gold uppercase tracking-[0.4em] text-xs font-medium mb-6 block"
        >
          Elevating Brand Experience
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white text-5xl md:text-8xl font-playfair mb-8 tracking-tighter leading-tight"
        >
          Aesthetics of <br /> Luxury Packaging
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-brand-grey/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          One-stop bespoke packaging solutions for global high-end beauty, fragrance, and fashion brands. Simple, premium, and distinctive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <button className="btn-luxury bg-white text-brand-black border border-white hover:bg-transparent hover:text-white">
            Explore Collection
          </button>
          <button className="btn-luxury border border-white/30 text-white hover:border-brand-gold">
            Custom Solution
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-white/20 mx-auto" />
      </motion.div>
    </section>
  );
}
