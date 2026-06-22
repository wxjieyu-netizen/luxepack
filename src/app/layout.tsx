import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elapack.com"),
  title: {
    default: "ELAPACK | Custom Luxury Packaging Manufacturer — Gift Boxes, Pouches, Ribbons",
    template: "%s | ELAPACK Luxury Packaging",
  },
  description:
    "ELAPACK is a premium B2B packaging manufacturer supplying luxury gift boxes, velvet pouches, satin ribbons, cleaning cloths and eco shopping bags to beauty, fragrance and fashion brands worldwide. FSC certified, ISO 9001.",
  keywords: [
    "luxury packaging manufacturer",
    "custom gift boxes",
    "velvet pouches wholesale",
    "satin ribbon custom",
    "premium packaging supplier China",
    "B2B packaging solutions",
    "eco luxury bags",
    "cleaning cloth custom",
    "cosmetics packaging OEM",
    "fragrance packaging supplier",
    "fashion brand packaging",
    "rigid box manufacturer",
    "packaging factory Shenzhen",
    "FSC certified packaging",
  ],
  authors: [{ name: "ELAPACK", url: "https://www.elapack.com" }],
  creator: "ELAPACK",
  publisher: "ELAPACK",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.elapack.com",
    siteName: "ELAPACK Luxury Packaging",
    title: "ELAPACK | Custom Luxury Packaging Manufacturer",
    description:
      "One-stop premium packaging solutions for global beauty, fragrance and fashion brands. Gift boxes, pouches, ribbons, cleaning cloths. FSC certified. Request a free sample.",
    images: [
      {
        url: "https://sc02.alicdn.com/kf/Ac2205b78d92149f287bd578ba0469673j.png",
        width: 1200,
        height: 630,
        alt: "ELAPACK Luxury Packaging Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELAPACK | Custom Luxury Packaging Manufacturer",
    description:
      "Premium B2B packaging: gift boxes, velvet pouches, satin ribbons, cleaning cloths. Trusted by L'Oréal, Shiseido, Clinique & 500+ global brands.",
    images: ["https://sc02.alicdn.com/kf/Ac2205b78d92149f287bd578ba0469673j.png"],
  },
  alternates: {
    canonical: "https://www.elapack.com",
    languages: {
      "en-US": "https://www.elapack.com",
      "zh-CN": "https://www.elapack.com/zh",
    },
  },
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ELAPACK",
  url: "https://www.elapack.com",
  logo: "https://www.elapack.com/logo.png",
  description:
    "ELAPACK is a premium B2B luxury packaging manufacturer based in Shenzhen, China, specialising in custom gift boxes, velvet pouches, satin ribbons, cleaning cloths and eco shopping bags for beauty, fragrance and fashion brands worldwide.",
  foundingDate: "2008",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 200 },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shenzhen",
    addressCountry: "CN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "tina@elapack.com",
      telephone: "+86-138-0151-4296",
      availableLanguage: ["English", "Chinese"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/elapack",
    "https://www.instagram.com/elapack",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Luxury Packaging Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Custom Gift Boxes" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Velvet Pouches" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Satin Ribbons & Tags" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Cleaning Cloths" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Eco Shopping Bags" } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ELAPACK",
  url: "https://www.elapack.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.elapack.com/products?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased bg-white text-brand-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
