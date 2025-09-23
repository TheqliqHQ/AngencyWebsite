# Theqliq — Website (Next.js 14 + Tailwind + Contentlayer)

A responsive, SEO‑friendly scaffold that mirrors the shared references and Theqliq brand tone.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (design tokens via CSS variables)
- Framer Motion (installed; not used heavily yet)
- Contentlayer + MDX for blog
- next-seo ready (metadata configured in layout)
- Vercel‑ready

## Quick start
```bash
pnpm i   # or npm i / yarn
pnpm dev
```
Build:
```bash
pnpm build && pnpm start
```

## Where to edit
- `app/page.tsx` — assembles sections
- `src/components/*` — individual sections (Hero, Clients, Services, Process, About, Testimonials, FAQ, BlogPreview, CTA, Footer)
- `content/blog/*.mdx` — blog posts (Contentlayer)

## Notes
- The Hero includes a YouTube **privacy-enhanced** embed with lazy load; replace the `youtubeId` in `Hero.tsx`.
- The Clients section rotates 8 logos showing 4 at a time.
- CTA uses a rotating word (`cool → real → structured → impactful`). Edit in `RotatingWord.tsx`.
- Colors/tokens are in `app/globals.css`.

## To Do (optional next steps)
- Replace placeholder images and text with final copy.
- Wire newsletter form to your provider (Resend/Mailchimp/Beehiiv).
