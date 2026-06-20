# ELAPACK — Luxury Packaging B2B Website

A professional, high-end B2B website for a bespoke luxury packaging company targeting European and American mid-to-high-end brands.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages

## Brand Identity

- **Typography**: Playfair Display (headings) + Inter (body)
- **Palette**: Rich Black `#0A0A0A` · Champagne Gold `#C5A059` · Minimalist Grey `#F5F5F7`
- **Philosophy**: Simple · Premium · Luxury

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
npm run start
```

## Contact Form Integration

The contact form uses [Formspree](https://formspree.io/) for email delivery.

### Setup Steps:

1. Create a free account at [formspree.io](https://formspree.io/)
2. Create a new form and copy your unique form ID
3. Update `src/components/ContactForm.tsx` at line 82:
   ```typescript
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
4. The form will now send enquiries to your specified email address

### Form Fields:
- First Name (required)
- Last Name (required)
- Email Address (required, validated)
- Brand Name (required)
- Project Details (required, min 20 characters)

The form includes client-side validation, loading states, and success/error feedback.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. Go to **Cloudflare Dashboard** → Workers & Pages → Create application → Pages → Connect to Git.
3. Configure the build settings:
   - **Framework preset**: `Next.js`
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Environment variable**: `NODE_VERSION = 20`
4. Click **Save and Deploy**.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── contact/
│   │   └── page.tsx      # Contact & Enquiry
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   └── Footer.tsx
└── lib/
    └── utils.ts
```
