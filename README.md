# Coached By Debs

A premium, modern fitness coaching website built with Next.js, React, and Tailwind CSS.

## Overview

Coached By Debs is a high-end personal training and online coaching brand website featuring a luxury black, white, and warm gold/brown color palette. The site is designed to communicate strength, confidence, professionalism, and sustainable results.

## Features

- **Premium Design**: Luxury black background with warm gold/brown accents
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Modern Tech Stack**: Built with Next.js 16, React, TypeScript, and Tailwind CSS
- **Smooth Animations**: Hover effects and scroll animations for premium feel
- **Accessible**: High contrast design with semantic HTML
- **SEO Optimized**: Proper meta tags and semantic structure

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Geist Sans

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
coached-by-debs/
├── app/
│   ├── globals.css       # Global styles and Tailwind config
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Homepage
├── components/
│   ├── Header.tsx        # Top header with CTAs
│   ├── Navigation.tsx    # Gold navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── TrustSignals.tsx  # Trust indicators
│   ├── Services.tsx      # Coaching services
│   ├── ClientResults.tsx # Testimonials and stats
│   ├── About.tsx         # About Debs section
│   ├── Pricing.tsx       # Pricing packages
│   ├── FAQ.tsx           # FAQ accordion
│   ├── FinalCTA.tsx      # Final call-to-action
│   └── Footer.tsx        # Footer with links
└── public/               # Static assets

```

## Color Palette

- **Black**: `#000000` - Main background
- **White**: `#FFFFFF` - Primary text
- **Gold**: `#C9A961` - Primary accent
- **Gold Dark**: `#B8954E` - Hover states
- **Gold Light**: `#D4B876` - Highlights
- **Brown**: `#8B7355` - Secondary accent

## Sections

1. **Header** - Logo and CTA buttons
2. **Navigation** - Gold bar with menu items
3. **Hero** - Main headline with image
4. **Trust Signals** - Credentials and features
5. **Services** - Online coaching and personal training
6. **Client Results** - Testimonials and statistics
7. **About** - Personal story and approach
8. **Pricing** - Package options
9. **FAQ** - Common questions
10. **Final CTA** - Conversion section
11. **Footer** - Links and contact hours

## Customization

To customize the brand colors, edit `app/globals.css`:

```css
:root {
  --gold: #C9A961;
  --gold-dark: #B8954E;
  --gold-light: #D4B876;
  --brown: #8B7355;
}
```

## Deployment

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

Deploy to Vercel:

```bash
vercel deploy
```

## License

© 2025 Coached By Debs. All rights reserved.

IOM Registry: 031470B
