"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Products", href: "/products" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const transparentLink = (href: string) =>
    cn(
      "text-sm uppercase tracking-widest font-medium transition-colors relative",
      isHome && !isScrolled ? "text-white hover:text-brand-gold" : "text-brand-black hover:text-brand-gold",
      pathname === href && "text-brand-gold"
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
        <Link
          href="/"
          className={cn(
            "text-2xl font-playfair tracking-tighter font-bold transition-colors",
            isHome && !isScrolled ? "text-white" : "text-brand-black"
          )}
        >
          LUXEPACK
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={transparentLink(link.href)}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-brand-gold" />
              )}
            </Link>
          ))}
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
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 flex flex-col p-6 space-y-4 md:hidden shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-lg font-playfair hover:text-brand-gold transition-colors",
                pathname === link.href && "text-brand-gold"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-luxury text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Inquire Now
          </Link>
        </div>
      )}
    </nav>
  );
}
