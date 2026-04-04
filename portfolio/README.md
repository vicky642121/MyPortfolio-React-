# Vignesh Pandian — Portfolio

A one-page personal portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Stack
- **Next.js 14** — App Router
- **Tailwind CSS** — all styling, custom config with design tokens
- **Framer Motion** — all animations (fade-in, slide-up, stagger, hover)
- **GSAP** — (optional, installed for future use)
- **TypeScript** — full type safety

## Design
- **Theme**: Dark (deep navy/black) with purple + cyan + pink gradient accents
- **Fonts**: Outfit (display) + Plus Jakarta Sans (body) + JetBrains Mono (code)
- **Animations**: Particle canvas on hero, floating orbs, marquee tech strip, scroll-triggered reveals, hover effects
- **Sections**: Hero → Skills → Experience → Projects → About → Contact

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Customization

All content is in the component files under `/components/`:
- `Hero.tsx` — headline, bio, stats
- `Skills.tsx` — skill categories and pills
- `Experience.tsx` — work history
- `Projects.tsx` — project cards
- `About.tsx` — personal info
- `Contact.tsx` — contact links

Colors and design tokens are in `tailwind.config.ts`.
