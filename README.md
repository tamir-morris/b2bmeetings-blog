# B2Bmeetings.com Blog

SEO-optimized blog for [B2Bmeetings.com](https://b2bmeetings.com). Built with Next.js 15, Tailwind CSS 4, and markdown.

Posts are drafted by Mira (AI Marketing Manager), approved by Tamir in Slack, then committed here via GitHub API. Vercel auto-deploys on push.

## Stack

- **Next.js 15** — Static generation for fast page loads + SEO
- **Tailwind CSS 4** — B2Bmeetings brand styling
- **Markdown + gray-matter** — Blog posts with YAML frontmatter
- **Auto-generated** sitemap.xml, robots.txt, JSON-LD structured data, Open Graph tags

## Structure

- `blog/` — Markdown blog posts (naming: `YYYY-MM-DD-slug.md`)
- `src/app/` — Next.js app router pages
- `src/lib/blog.ts` — Markdown parsing and post utilities

## Development

```bash
npm install
npm run dev
```
