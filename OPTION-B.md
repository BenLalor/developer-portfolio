# Option B — classic look, new content

Draft compiled for Ben’s review only. **Do not merge or deploy.** Leave [PR #4](https://github.com/BenLalor/developer-portfolio/pull/4) (`cursor/portfolio-redesign-902d`) untouched as Option A (Next.js redesign).

This branch keeps the live **CRA + Material UI** fork: army-green theme, Poppins / section illustrations, landing split, rounded cards, skills marquee, contact form chrome. It ports the **content and information architecture** from Option A.

## Local run

```bash
npm install
npm start
```

Production build check:

```bash
npm run build
```

Node may need the already-configured `NODE_OPTIONS=--openssl-legacy-provider` flag (wired into `npm start` / `npm run build`). Do **not** run `npm run deploy` or point this draft at benlalor.com / gh-pages / production Vercel.

## What was ported from Option A

| Area | Ported |
| --- | --- |
| Hero / positioning | Energy-code SME + full-stack builder; Denver / Arvada, CO |
| About | Daytime NORESCO Title 24 / XSD / data work; independent creator of Wattly |
| Experience | NORESCO Senior / III / II titles; EnergySoft **Energy Analyst** + Intern (not “Senior Nonresidential”) |
| Selected work | Wattly (name only; prepared / not public); Title 24 prescriptive tooling; compliance data + rulesets; NRCC-LTS form tool. Calculator and Stock Visualizer removed |
| Talks & publications | First-class section with verified links only |
| Education + skills | Same degrees (no invented years); skills marquee refreshed with a PDF-vs-current note |
| Contact | Personal gmail, LinkedIn, GitHub, benlalor.com, 831-359-5762 only. ZIP and Stack Overflow dropped |
| Resume | Oct 2024 PDF remains “current published”; three draft PDFs on `/resume`; in-app résumé page using classic header/card chrome |

## Guardrails kept

- Wattly only — never “Wattly Solutions”; independent creator; not a launch
- No Québec / eSim on the public site
- No private CalBEM watch URL
- ACEEE links the proceedings page, not a 404 PDF
- CABEC 2026 listed as **Upcoming** (conference page only)
- EnergySoft titles follow the 2026-09-06 brief, not the in-repo PDF “Senior Nonresidential” line
- No 7-figure contract claim on the homepage

## Remaining open questions (same as Option A `CONTENT.md`)

1. Which EnergySoft title set is canonical if the mailbox Oct 2024 PDF and the in-repo PDF disagree?
2. Stable ACEEE paper URL if one is published later
3. Public CalBEM YouTube URL when the Power Talk is released
4. Québec / eSim — speak or attend? Title, date, public link if yes
5. When Wattly is public, what may be said, and under which name?
6. Which résumé draft (software / energy-codes / hybrid), if any, replaces the Oct 2024 published PDF?

Fact source of truth: [`CONTENT.md`](./CONTENT.md).
