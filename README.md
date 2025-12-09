# Clinic Landing Page

A modern, SEO-optimized landing page built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ⚡ **Next.js 16** with App Router
- 🎨 **Tailwind CSS v4** with custom color scheme
- 🎭 **Framer Motion** for smooth animations
- 🔍 **SEO Optimized** with next-seo and sitemap generation
- 📝 **TypeScript** for type safety
- 🎯 **ESLint & Prettier** for code quality
- 🪝 **Husky** pre-commit hooks with commitlint
- 🏗️ **Clean Architecture** with separated logic and UI concerns

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Set up environment variables:

```bash
cp .env.example .env.local
```

Update `NEXT_PUBLIC_SITE_URL` with your domain.

3. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
web/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Landing page
│   ├── robots.ts          # Robots.txt generation
│   └── sitemap.ts         # Sitemap generation
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── sections/         # Page sections
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configs
│   ├── config/          # Configuration files
│   └── utils/           # Utility functions
└── public/              # Static assets
```

## Color Scheme

- **Background**: `#17171c`
- **Primary**: `#9c5cf6`
- **Foreground**: `#ffffff`

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (includes sitemap generation)
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## SEO Configuration

The project includes comprehensive SEO setup:

- Dynamic metadata generation via `lib/config/seo.ts`
- Automatic sitemap generation (`app/sitemap.ts`)
- Robots.txt configuration (`app/robots.ts`)
- Open Graph and Twitter Card support
- Structured data ready

Update `lib/config/site.ts` with your site information.

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) enforced by Husky and commitlint:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## Best Practices

- **Separation of Concerns**: Logic is separated from UI components
- **Type Safety**: All components and functions are fully typed
- **Component Reusability**: UI components are designed to be reusable
- **Performance**: Optimized images, code splitting, and lazy loading
- **Accessibility**: Semantic HTML and ARIA attributes where needed

## License

Private project - All rights reserved
