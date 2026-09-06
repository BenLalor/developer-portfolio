# Ben Lalor — personal site (draft)

Modern rebuild of [benlalor.com](https://www.benlalor.com) as a Next.js App Router + TypeScript + Tailwind site.

This is a **draft for review**. It replaces the old Create React App / Material UI “developer-portfolio” fork.

## Do not deploy until Ben approves

**Do not** publish this branch, or any follow-up, to production.

That includes:

- `gh-pages` / GitHub Pages
- the custom domain `benlalor.com` / `www.benlalor.com`
- a Vercel **production** deployment
- merging to `main` / `master` as a live cutover

There is **no deploy script** in `package.json` on purpose. The old `npm run deploy` / `gh-pages` path has been removed so this cannot be shipped by habit.

Local preview and a **draft pull request** are the intended next steps. Wait for Ben’s written approval before anything goes live.

## Run locally

Requires Node 20+.

```bash
git clone https://github.com/BenLalor/developer-portfolio.git
cd developer-portfolio
git checkout <this-branch>
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful routes:

- `/` — homepage
- `/resume` — HTML résumé with a print stylesheet (`Print / save PDF` or the browser print dialog)

Other scripts:

```bash
npm run build   # production build, local only
npm run start   # serve the local build
npm run lint
```

## What’s in this draft

1. Homepage: hero, experience, selected work, talks & publications, education / skills, contact
2. `CONTENT.md` — sources, verified links, and open questions
3. Resume drafts (markdown only) under `content/resumes/`
4. October 2024 PDF at `public/resume/BenLalor_Resume.pdf`
5. Printable HTML résumé at `/resume`

Wattly is described as **prepared / not publicly released**. The site says **Wattly** only — never “Wattly Solutions” — and uses “independent creator,” not founder branding.

## Content rules (short)

- Personal contact only: `lalor.benjamin@gmail.com`, the LinkedIn and GitHub URLs in the footer, `www.benlalor.com`, phone `831-359-5762`
- Do not invent employers, degrees, dates, or publications
- Do not list Québec / eSim as confirmed talks
- Do not link a private CalBEM YouTube watch URL
- Prefer `CONTENT.md` when something is uncertain

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- `next/font` (Newsreader, Geist, Geist Mono)
- `next-themes` for dark / light
