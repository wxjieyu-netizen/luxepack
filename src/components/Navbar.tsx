"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const productCategories = [
  {
    name: "Pouch & Bag",
    href: "/products/luxury-bags",
    description: "Eco-luxury shopping bags & textile pouches",
  },
  {
    name: "Box",
    href: "/products/gift-boxes",
    description: "Bespoke rigid gift boxes",
  },
  {
    name: "Cleaning Cloth",
    href: "/products/cleaning-cloth",
    description: "Premium branded microfibre cloths",
  },
  {
    name: "Ribbon & Tags",
    href: "/products/custom-ribbons",
    description: "Custom satin ribbons & hangtags",
  },
];

const navLinks = [
  { nameKey: "common.nav.sustainability", href: "/sustainability", fallback: "Sustainability" },
  { nameKey: "common.nav.about", href: "/about", fallback: "About" },
  { nameKey: "common.nav.contact", href: "/contact", fallback: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isProductActive = pathname.startsWith("/products");

  const linkColor = (active: boolean) =>
    cn(
      "text-sm uppercase tracking-widest font-medium transition-colors relative",
      isHome && !isScrolled
        ? "text-white hover:text-brand-gold"
        : "text-brand-black hover:text-brand-gold",
      active && "text-brand-gold"
    );

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500 px-6 py-4",
        isScrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "text-2xl font-playfair tracking-tighter font-bold transition-colors",
            isHome && !isScrolled ? "text-white" : "text-brand-black"
          )}
        >
          ELAPACK
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 items-center">

          {/* Products with dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              onMouseEnter={() => setProductsOpen(true)}
              className={cn(
                "flex items-center gap-1 text-sm uppercase tracking-widest font-medium transition-colors",
                isHome && !isScrolled
                  ? "text-white hover:text-brand-gold"
                  : "text-brand-black hover:text-brand-gold",
                isProductActive && "text-brand-gold"
              )}
            >
              {t("common.nav.products") !== "common.nav.products" ? t("common.nav.products") : "Products"}
              <ChevronDown
                size={14}
                className={cn("transition-transform duration-300", productsOpen && "rotate-180")}
              />
              {isProductActive && (
                <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-brand-gold" />
              )}
            </button>

            {/* Dropdown panel */}
            {productsOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white shadow-2xl border-t-2 border-brand-gold"
                onMouseLeave={() => setProductsOpen(false)}
              >
                {/* Arrow */}
                <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t-2 border-l-2 border-brand-gold rotate-45" />

                <div className="py-2">
                  {productCategories.map((cat, i) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={() => setProductsOpen(false)}
                      className={cn(
                        "flex flex-col px-6 py-4 hover:bg-brand-grey group transition-colors",
                        i !== productCategories.length - 1 && "border-b border-gray-100"
                      )}
                    >
                      <span className="text-xs uppercase tracking-widest font-bold text-brand-black group-hover:text-brand-gold transition-colors">
                        {cat.name}
                      </span>
                      <span className="text-[11px] text-gray-400 mt-1 font-light">
                        {cat.description}
                      </span>
                    </Link>
                  ))}

                  {/* View All */}
                  <Link
                    href="/products"
                    onClick={() => setProductsOpen(false)}
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-brand-black text-white hover:bg-brand-gold transition-colors text-xs uppercase tracking-widest font-bold"
                  >
                    View All Collections →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Other nav links */}
          {navLinks.map((link) => (
            <Link
              key={link.nameKey}
              href={link.href}
              className={linkColor(pathname === link.href)}
            >
              {t(link.nameKey) !== link.nameKey ? t(link.nameKey) : link.fallback}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-brand-gold" />
              )}
            </Link>
          ))}

          <LanguageSwitcher />

          <Link
            href="/contact"
            className={cn(
              "px-6 py-2 border text-xs uppercase tracking-widest transition-all duration-300",
              isHome && !isScrolled
                ? "border-white/70 text-white hover:bg-white hover:text-brand-black"
                : "border-brand-black text-brand-black hover:bg-brand-black hover:text-white"
            )}
          >
            Inquire
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden transition-colors",
            isHome && !isScrolled ? "text-white" : "text-brand-black"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 flex flex-col md:hidden shadow-lg max-h-[80vh] overflow-y-auto">

          {/* Mobile Products accordion */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex items-center justify-between w-full px-6 py-4 text-lg font-playfair hover:text-brand-gold transition-colors"
            >
              <span className={isProductActive ? "text-brand-gold" : ""}>
                {t("common.nav.products") !== "common.nav.products" ? t("common.nav.products") : "Products"}
              </span>
              <ChevronDown
                size={18}
                className={cn("transition-transform duration-300", mobileProductsOpen && "rotate-180")}
              />
            </button>

            {mobileProductsOpen && (
              <div className="bg-brand-grey">
                {productCategories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    onClick={() => { setIsOpen(false); setMobileProductsOpen(false); }}
                    className="flex flex-col px-8 py-3 border-b border-gray-200 hover:text-brand-gold transition-colors"
                  >
                    <span className="text-xs uppercase tracking-widest font-bold">
                      {cat.name}
                    </span>
                    <span className="text-[11px] text-gray-400 mt-0.5 font-light">
                      {cat.description}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/products"
                  onClick={() => { setIsOpen(false); setMobileProductsOpen(false); }}
                  className="block px-8 py-3 text-xs uppercase tracking-widest font-bold text-brand-gold"
                >
                  View All →
                </Link>
              </div>
            )}
          </div>

          {/* Other links */}
          {navLinks.map((link) => (
            <Link
              key={link.nameKey}
              href={link.href}
              className={cn(
                "px-6 py-4 text-lg font-playfair hover:text-brand-gold transition-colors border-b border-gray-100",
                pathname === link.href && "text-brand-gold"
              )}
              onClick={() => setIsOpen(false)}
            >
              {t(link.nameKey) !== link.nameKey ? t(link.nameKey) : link.fallback}
            </Link>
          ))}

          <div className="px-6 py-4 border-b border-gray-100">
            <LanguageSwitcher />
          </div>

          <Link
            href="/contact"
            className="btn-luxury text-center mx-6 my-4"
            onClick={() => setIsOpen(false)}
          >
            Inquire Now
          </Link>
        </div>
      )}
    </nav>
  );
}
