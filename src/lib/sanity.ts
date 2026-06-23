import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// ── Queries ──────────────────────────────────────────────────────────────────

export const hotProductsQuery = `
  *[_type == "product" && isHot == true] | order(order asc) {
    _id, title, category, image, isNew
  }
`;

export const newProductsQuery = `
  *[_type == "product" && isNew == true] | order(order asc)[0...4] {
    _id, title, category, image
  }
`;

export const faqQuery = `
  *[_type == "faq"] | order(order asc) {
    _id, question, answer
  }
`;

export const teamQuery = `
  *[_type == "teamMember"] | order(order asc) {
    _id, name, role, photo
  }
`;

export const newsQuery = `
  *[_type == "news"] | order(publishedAt desc)[0...3] {
    _id, title, category, publishedAt, coverImage, excerpt, slug
  }
`;

export const certsQuery = `
  *[_type == "certification"] | order(order asc) {
    _id, title, subtitle, image
  }
`;

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    contactEmail, whatsapp, officeAddress, businessHours,
    heroTitle, heroSubtitle, heroImage, partnerImage, stats
  }
`;
