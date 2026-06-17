# LUXEPACK — Luxury Packaging B2B Website

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
