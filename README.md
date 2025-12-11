# Beep Landing Page

Landing page for Beep, a modern open-source alternative to Discord.

## Structure

### Modular Architecture

```
src/
├── components/          # Reusable components
│   ├── Hero.astro              # Main hero section
│   ├── WhyBeep.astro           # "Why Beep?" section
│   ├── HowToContribute.astro   # Contribution section
│   ├── JoinCommunity.astro     # Join section
│   └── Footer.astro            # Footer
├── layouts/             # Base layouts
│   └── BaseLayout.astro        # Common HTML structure
├── pages/               # Site pages
│   └── index.astro             # Homepage
└── styles/              # Global styles
    └── global.css              # Global CSS and Tailwind
```

### Components

- **BaseLayout** : Base HTML structure with head, meta tags and scripts
- **Hero** : Welcome section with title, description and discover button
- **WhyBeep** : Key advantages of Beep (Open Source, Modern, Community)
- **HowToContribute** : Guide for developers and community
- **JoinCommunity** : Links to GitHub and Discord
- **Footer** : Project information and important links (Github)

## Development

### Prereqquisites

- Node.js 18+
- pnpm

### Installation

```bash
pnpm i
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

## Technologies

- [Astro](https://astro.build) - SEO friendly, SSR/SSG franmework
- [Tailwind CSS](https://tailwindcss.com) - CSS Framework
- Typescript
- Astro Icons - Icons integration
- Iconify - Icons library