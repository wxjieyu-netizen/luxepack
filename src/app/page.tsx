"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import images from "@/data/images";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    titleKey: "products.giftBoxes.name",
    categoryKey: "products.giftBoxes.category",
    image: images.giftBoxes,
  },
  {
    titleKey: "products.luxuryBags.name",
    categoryKey: "products.luxuryBags.category",
    image: images.luxuryBags,
  },
  {
    titleKey: "products.textilePouches.name",
    categoryKey: "products.textilePouches.category",
    image: images.textilePouches,
  },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-8">
            {t("philosophy.title") !== "philosophy.title" ? t("philosophy.title") : "Our Philosophy"}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t("philosophy.description") !== "philosophy.description" ? t("philosophy.description") : "We believe packaging is not just a container—it's the first tactile encounter between a brand and its audience."}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair mb-4">
              {t("products.title") !== "products.title" ? t("products.title") : "Our Collections"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden bg-gray-200 mb-6 relative">
                  <img
                    src={product.image}
                    alt={t(product.titleKey) !== product.titleKey ? t(product.titleKey) : product.titleKey}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 block">
                  {t(product.categoryKey) !== product.categoryKey ? t(product.categoryKey) : product.categoryKey}
                </span>
                <h4 className="text-xl font-playfair tracking-tight">
                  {t(product.titleKey) !== product.titleKey ? t(product.titleKey) : product.titleKey}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair mb-4">
              {t("video.title") !== "video.title" ? t("video.title") : "Watch Our Craft"}
            </h2>
            <p className="text-lg text-gray-600">
              {t("video.description") !== "video.description" ? t("video.description") : "Experience the Art of Luxury Packaging"}
            </p>
          </div>
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden group cursor-pointer">
            <img
              src={images.hero}
              alt="Video thumbnail"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-lg font-light">
                {t("video.caption") !== "video.caption" ? t("video.caption") : "From Design to Delivery: Our Manufacturing Excellence"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair mb-6">
                {t("solutions.title") !== "solutions.title" ? t("solutions.title") : "One-Stop Solution"}
              </h2>
              <h3 className="text-2xl md:text-3xl font-playfair mb-6 text-brand-gold">
                {t("solutions.heading") !== "solutions.heading" ? t("solutions.heading") : "From Creative Design to Lean Production"}
              </h3>
              <p className="text-gray-600 mb-8">
                {t("solutions.description") !== "solutions.description" ? t("solutions.description") : "Our end-to-end service encompasses initial conceptualization, material R&D, and precision manufacturing. We specialize in creating cohesive brand identities through unified packaging sets."}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span>{t("solutions.services.creativeStrategy") !== "solutions.services.creativeStrategy" ? t("solutions.services.creativeStrategy") : "Creative Strategy"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span>{t("solutions.services.materialRD") !== "solutions.services.materialRD" ? t("solutions.services.materialRD") : "Material R&D"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span>{t("solutions.services.prototyping") !== "solutions.services.prototyping" ? t("solutions.services.prototyping") : "Prototyping"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span>{t("solutions.services.globalLogistics") !== "solutions.services.globalLogistics" ? t("solutions.services.globalLogistics") : "Global Logistics"}</span>
                </div>
              </div>
              <button className="btn-luxury">
                {t("cta.button") !== "cta.button" ? t("cta.button") : "Get a Custom Quote"}
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden">
                <img
                  src={images.craftsmanship}
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-gold text-white p-8 text-center">
                <div className="text-4xl font-playfair mb-2">15+</div>
                <div className="text-xs uppercase tracking-widest">
                  {t("solutions.years") !== "solutions.years" ? t("solutions.years") : "Years of Craftsmanship"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-black text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair mb-8">
            {t("cta.title") !== "cta.title" ? t("cta.title") : "Ready to redefine your brand's unboxing experience?"}
          </h2>
          <button className="btn-luxury">
            {t("cta.button") !== "cta.button" ? t("cta.button") : "Get a Custom Quote"}
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
