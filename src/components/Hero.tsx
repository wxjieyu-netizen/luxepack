"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import images from "@/data/images";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Full-screen background */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero}
          alt="ELAPACK Luxury Packaging"
          className="w-full h-full object-cover"
        />
        {/* Subtle dark gradient overlay — top & bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Centre content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-brand-sage-light uppercase tracking-[0.5em] text-xs font-semibold mb-6"
        >
          Premium Packaging Solutions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white font-playfair text-5xl md:text-8xl tracking-tight leading-tight mb-6 max-w-5xl"
        >
          Where Craft Meets <br className="hidden md:block" /> Luxury Packaging
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-10 font-light leading-relaxed"
        >
          From bespoke gift boxes to premium pouches — one-stop packaging for the world's finest brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/products" className="btn-primary shadow-lg">
            Explore Products
          </Link>
          <Link href="/contact" className="btn-white shadow-lg">
            Get a Quote
          </Link>
        </motion.div>
      </div>

      {/* ── Liquid Glass Footer bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="glass-dark">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Quick stats */}
            <div className="flex items-center gap-8 md:gap-12">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Brand Clients" },
                { value: "50+", label: "Countries Served" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-white font-playfair text-xl md:text-2xl">{s.value}</p>
                  <p className="text-white/50 text-[10px] uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-10 bg-white/20" />

            {/* Quick links */}
            <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest text-white/70">
              {["Pouch & Bag", "Box", "Ribbon & Tags", "Cleaning Cloth"].map((name) => (
                <Link
                  key={name}
                  href="/products"
                  className="hover:text-brand-sage-light transition-colors hidden md:block"
                >
                  {name}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-10 bg-white/20" />

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/8613801514296"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 glass px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-white/80 text-[11px] uppercase tracking-widest">
                +86 138 0151 4296
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-10 bg-white/30 mx-auto" />
      </motion.div>
    </section>
  );
}
