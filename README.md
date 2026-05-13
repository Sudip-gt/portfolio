# Sudip's Portfolio

A modern, single-page developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. All content is data-driven through a single typed module so the site can be customized without touching components.

## Highlights

- Fully responsive dark UI with indigo / violet accent palette
- Sections: Hero, About, Tech Stack, Projects, Experience, **Documentation**, Contact
- Floating navbar with scroll progress + active-section tracking
- ⌘K command palette for jumping to sections and projects
- Contact form: React Hook Form + Zod, server-validated, email via [Resend](https://resend.com)
- SEO-ready: Open Graph, Twitter card, canonical URL, sitemap-friendly metadata

## Tech Stack

| Area        | Stack                                                     |
| ----------- | --------------------------------------------------------- |
| Framework   | Next.js 16 (App Router), React 19, TypeScript 5           |
| Styling     | Tailwind CSS v4, CSS variables, Geist font                |
| Animation   | Framer Motion 12                                          |
| Forms       | React Hook Form 7, Zod 4, `@hookform/resolvers`           |
| Email       | Resend                                                    |
| Tooling     | ESLint 9 (`eslint-config-next`), mise for Node pinning    |

## Getting Started

This project uses [mise](https://mise.jdx.dev/) to pin the local Node.js runtime (see `mise.toml`).

```bash
mise trust
mise install
npm install
```

Create a `.env.local` file at the project root:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
PERSONAL_EMAIL=you@example.com
PERSONAL_NAME=Your Name
```

Start the dev server:

```bash
npm run dev
# or: mise run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description                            |
| ---------------- | -------------------------------------- |
| `npm run dev`    | Start the Next.js dev server           |
| `npm run lint`   | Run ESLint with the Next.js config     |
| `npm run build`  | Produce a production build             |
| `npm start`      | Serve the production build             |

`mise run dev | lint | build` are equivalent shortcuts.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout, metadata, fonts, Navbar, Footer, CommandPalette
│   ├── page.tsx             # Home — composes all sections in order
│   ├── globals.css          # Tailwind v4 entry + theme tokens
│   └── api/contact/route.ts # POST handler — Zod validation + Resend send
├── components/
│   ├── Navbar.tsx           # Floating nav, scroll progress, active section
│   ├── Footer.tsx
│   ├── CommandPalette.tsx   # ⌘K palette
│   ├── CommandPaletteProvider.tsx
│   ├── SkillCarousel.tsx
│   ├── animations.tsx       # Reusable motion helpers (CountUp, etc.)
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── TechStack.tsx
│       ├── Projects.tsx
│       ├── Experience.tsx
│       ├── Documentation.tsx
│       └── Contact.tsx
├── data/
│   └── portfolio.ts         # Single source of truth for all site content
├── hooks/
│   └── useContactForm.ts
└── lib/
    ├── contactSchema.ts     # Shared client/server Zod schema
    └── utils.ts             # `cn()` (clsx + tailwind-merge)
```

## Customizing Content

Open `src/data/portfolio.ts` and edit the exported objects:

- `personalInfo` — name, title, tagline, bio, email, social URLs, CV link
- `techStack` — grouped `frontend / backend / database / tools` entries
- `projects` — `{ id, title, description, techStack, githubUrl, liveUrl, category }`
- `experience` — chronological roles with `highlights`
- `documentation` — drives the in-app Documentation section
- `navLinks` — visible navbar entries (must match section `id`s)

Save and the UI updates instantly — no component edits required.

## Contact API

`POST /api/contact` — body validated against `contactSchema`:

```ts
{ name: string; email: string; message: string }
```

The handler re-validates server-side, then sends a styled HTML email through Resend. If `RESEND_API_KEY` is missing the route will return a 500; configure environment variables before testing locally.

## Deployment

Designed for [Vercel](https://vercel.com), but works on any host supporting Node 20+ and Next.js 16.

1. Push to GitHub.
2. Import the repo into Vercel.
3. Add the environment variables (`RESEND_API_KEY`, `PERSONAL_EMAIL`, `PERSONAL_NAME`).
4. Set the production domain and update `metadataBase` in `src/app/layout.tsx` so Open Graph and canonical URLs resolve correctly.

## License

Personal project — feel free to fork and adapt for your own portfolio.
