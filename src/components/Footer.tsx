import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-playfair mb-6 tracking-tighter">LUXEPACK</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
            Crafting premium packaging solutions for brands that value aesthetics, quality, and sustainability. Based in the heart of manufacturing, serving the world.
          </p>
        </div>

        <div>
          <h3 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-6">Expertise</h3>
          <ul className="space-y-4 text-sm text-gray-400 font-light">
            <li><Link href="/solutions" className="hover:text-white transition-colors">Gift Boxes</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition-colors">Luxury Bags</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition-colors">Custom Ribbons</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition-colors">Textile Packaging</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-6">Company</h3>
          <ul className="space-y-4 text-sm text-gray-400 font-light">
            <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-6">Connect</h3>
          <p className="text-gray-400 text-sm mb-4 font-light">Inquire about your project</p>
          <p className="text-xl font-playfair hover:text-brand-gold transition-colors underline underline-offset-8">
            hello@luxepack.com
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
        <p>© 2026 LUXEPACK. All Rights Reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
