"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 px-6 font-montserrat">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-playfair mb-4 tracking-tighter">ELAPACK</h2>
          <p className="text-gray-400 text-xs leading-relaxed mb-6 font-light uppercase tracking-wide">
            Premium Packaging Solutions
          </p>
          <p className="text-gray-400 text-sm leading-relaxed font-light">
            One-stop bespoke packaging for global luxury beauty, fragrance, and fashion brands.
          </p>
          {/* WhatsApp */}
          <a
            href="https://wa.me/8613801514296"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs text-gray-400 hover:text-brand-sage transition-colors uppercase tracking-widest"
          >
            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            +86 138 0151 4296
          </a>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-brand-sage uppercase tracking-widest text-xs font-bold mb-6">Products</h3>
          <ul className="space-y-3 text-xs text-gray-400 font-light uppercase tracking-widest">
            <li><Link href="/products/luxury-bags"    className="hover:text-brand-sage transition-colors">Pouch & Bag</Link></li>
            <li><Link href="/products/gift-boxes"     className="hover:text-brand-sage transition-colors">Box</Link></li>
            <li><Link href="/products/cleaning-cloth" className="hover:text-brand-sage transition-colors">Cleaning Cloth</Link></li>
            <li><Link href="/products/custom-ribbons" className="hover:text-brand-sage transition-colors">Ribbon & Tags</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-brand-sage uppercase tracking-widest text-xs font-bold mb-6">Company</h3>
          <ul className="space-y-3 text-xs text-gray-400 font-light uppercase tracking-widest">
            <li><Link href="/about"          className="hover:text-brand-sage transition-colors">About Us</Link></li>
            <li><Link href="/sustainability"  className="hover:text-brand-sage transition-colors">Sustainability</Link></li>
            <li><Link href="/contact"         className="hover:text-brand-sage transition-colors">Contact</Link></li>
            <li><Link href="/#certifications" className="hover:text-brand-sage transition-colors">Certifications</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-brand-sage uppercase tracking-widest text-xs font-bold mb-6">Contact</h3>
          <div className="space-y-4 text-xs text-gray-400 font-light">
            <div>
              <p className="uppercase tracking-widest mb-1 text-gray-500">Email</p>
              <a href="mailto:tina@elapack.com" className="hover:text-brand-sage transition-colors">
                tina@elapack.com
              </a>
            </div>
            <div>
              <p className="uppercase tracking-widest mb-1 text-gray-500">WhatsApp</p>
              <a href="https://wa.me/8613801514296" target="_blank" rel="noopener noreferrer" className="hover:text-brand-sage transition-colors">
                +86 138 0151 4296
              </a>
            </div>
            <div>
              <p className="uppercase tracking-widest mb-1 text-gray-500">Hours</p>
              <p>Mon–Fri 09:00–18:00 GMT+8</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
        <p>© 2026 ELAPACK. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-sage transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-brand-sage transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-sage transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
