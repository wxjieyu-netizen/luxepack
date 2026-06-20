"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-playfair mb-6 tracking-tighter">ELAPACK</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
            {t("footer.description") !== "footer.description" ? t("footer.description") : "Crafting premium packaging solutions for brands that value aesthetics, quality, and sustainability. Based in the heart of manufacturing, serving the world."}
          </p>
        </div>

        <div>
          <h3 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-6">{t("footer.expertise") !== "footer.expertise" ? t("footer.expertise") : "Expertise"}</h3>
          <ul className="space-y-4 text-sm text-gray-400 font-light">
            <li><Link href="/products/gift-boxes" className="hover:text-white transition-colors">{t("footer.giftBoxes") !== "footer.giftBoxes" ? t("footer.giftBoxes") : "Gift Boxes"}</Link></li>
            <li><Link href="/products/luxury-bags" className="hover:text-white transition-colors">{t("footer.luxuryBags") !== "footer.luxuryBags" ? t("footer.luxuryBags") : "Luxury Bags"}</Link></li>
            <li><Link href="/products/custom-ribbons" className="hover:text-white transition-colors">{t("footer.customRibbons") !== "footer.customRibbons" ? t("footer.customRibbons") : "Custom Ribbons"}</Link></li>
            <li><Link href="/products/textile-pouches" className="hover:text-white transition-colors">{t("footer.textilePouches") !== "footer.textilePouches" ? t("footer.textilePouches") : "Textile Pouches"}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-6">{t("footer.company") !== "footer.company" ? t("footer.company") : "Company"}</h3>
          <ul className="space-y-4 text-sm text-gray-400 font-light">
            <li><Link href="/about" className="hover:text-white transition-colors">{t("footer.ourStory") !== "footer.ourStory" ? t("footer.ourStory") : "Our Story"}</Link></li>
            <li><Link href="/sustainability" className="hover:text-white transition-colors">{t("common.nav.sustainability") !== "common.nav.sustainability" ? t("common.nav.sustainability") : "Sustainability"}</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">{t("footer.contactUs") !== "footer.contactUs" ? t("footer.contactUs") : "Contact Us"}</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">{t("footer.privacy") !== "footer.privacy" ? t("footer.privacy") : "Privacy Policy"}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-6">{t("footer.connect") !== "footer.connect" ? t("footer.connect") : "Connect"}</h3>
          <p className="text-gray-400 text-sm mb-4 font-light">{t("footer.inquireAbout") !== "footer.inquireAbout" ? t("footer.inquireAbout") : "Inquire about your project"}</p>
          <p className="text-xl font-playfair hover:text-brand-gold transition-colors underline underline-offset-8">
            hello@elapack.com
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
        <p>{t("footer.copyright") !== "footer.copyright" ? t("footer.copyright") : "© 2026 ELAPACK. All Rights Reserved."}</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
