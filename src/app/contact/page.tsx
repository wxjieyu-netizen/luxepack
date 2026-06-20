"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-brand-grey">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h1 className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6">
              {t("contact.title") !== "contact.title" ? t("contact.title") : "Contact Us"}
            </h1>
            <h2 className="text-5xl md:text-7xl font-playfair tracking-tighter leading-tight mb-8">
              {t("contact.heading") !== "contact.heading" ? t("contact.heading") : "Let's create something extraordinary."}
            </h2>
            <p className="text-gray-600 text-xl font-light leading-relaxed mb-12">
              {t("contact.description") !== "contact.description" ? t("contact.description") : "Our specialists are ready to help you navigate the complexities of luxury packaging. Whether you have a clear vision or need creative guidance, we're here to assist."}
            </p>
            
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">
                  {t("contact.office") !== "contact.office" ? t("contact.office") : "Office"}
                </p>
                <p className="text-lg font-playfair">
                  {t("contact.officeAddress") !== "contact.officeAddress" ? t("contact.officeAddress") : "Global Design Hub, Building 8, Creative District, Shenzhen, China"}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">
                  {t("contact.inquiries") !== "contact.inquiries" ? t("contact.inquiries") : "General Inquiries"}
                </p>
                <p className="text-lg font-playfair">hello@elapack.com</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">
                  {t("contact.hours") !== "contact.hours" ? t("contact.hours") : "Business Hours"}
                </p>
                <p className="text-lg font-playfair">
                  {t("contact.hoursValue") !== "contact.hoursValue" ? t("contact.hoursValue") : "Mon — Fri: 09:00 - 18:00 (GMT+8)"}
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
