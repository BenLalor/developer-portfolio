import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { ResumeDrafts } from "@/components/resume-drafts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Printable HTML résumé for Ben Lalor. Draft that may diverge from the October 2024 PDF.",
};

export default function ResumePage() {
  return (
    <main id="main" className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
      <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-3 text-sm">
        <Link href="/" className="text-accent underline-offset-4 hover:underline">
          Back to site
        </Link>
        <div className="flex gap-3">
          <a href={site.resumePdf} download="BenLalor_Resume.pdf" className="underline-offset-4 hover:underline">
            {site.resumePdfLabel}
          </a>
          <PrintButton />
        </div>
      </div>

      <ResumeDrafts />

      <header className="mt-10 border-b border-line pb-6">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Draft HTML résumé</p>
        <h1 className="font-display mt-2 text-5xl tracking-tight">{site.name}</h1>
        <p className="mt-3 text-lg text-muted">{site.location}</p>
        <p className="mt-3 text-sm text-muted">
          {site.email} · {site.phoneDisplay} · {site.url.replace("https://", "")} · GitHub / LinkedIn
        </p>
      </header>

      <section className="mt-8">
        <h2 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Summary</h2>
        <p className="mt-3 leading-7 text-muted">
          I build software for California energy codes. At NORESCO I lead full-stack Title 24, Part 6
          prescriptive compliance tooling, the XSD ruleset under public and private tools, and the data
          systems CASE, CEC, and CPUC use. Independently I create Wattly, Title 24 BEM and compliance
          software that is prepared and not yet public.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Experience</h2>

        <article className="mt-5">
          <div className="flex flex-wrap justify-between gap-2">
            <h3 className="text-lg font-medium">NORESCO</h3>
            <p className="font-mono text-xs text-muted">2019 to present</p>
          </div>
          <p className="text-sm text-muted">
            Senior Energy Analyst, 2024 to present. Energy Analyst III, 2021 to 2024. Energy Analyst II,
            2019 to 2021.
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Software</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
            <li>Lead a development team on a full-stack web app for Title 24 Part 6 prescriptive compliance.</li>
            <li>SQL database of public and private CA compliance-software data.</li>
            <li>XSD ruleset shared across compliance tools.</li>
            <li>Secure API for large-scale building data.</li>
          </ul>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            Codes and stakeholders
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
            <li>CEC, local government, IOUs, CPUC Codes and Standards.</li>
            <li>Reach Code support for local governments.</li>
            <li>CASE SME for the 2022, 2025, and 2028 cycles.</li>
          </ul>
        </article>

        <article className="mt-5">
          <div className="flex flex-wrap justify-between gap-2">
            <h3 className="text-lg font-medium">EnergySoft</h3>
            <p className="font-mono text-xs text-muted">2014 to 2019</p>
          </div>
          <p className="text-sm text-muted">Energy Analyst, 2015 to 2019. Intern, 2014 to 2015.</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
            <li>Apple Park and other nonresidential energy models.</li>
            <li>EnergyPro LCCA. Consultant management.</li>
          </ul>
        </article>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Selected work</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
          <li>
            Wattly. Independent creator. Title 24 BEM and compliance, performance and prescriptive.
            Prepared, not public.
          </li>
          <li>Prescriptive compliance web app. Lead, NORESCO.</li>
          <li>Compliance data and XSD infrastructure. Developer and maintainer, NORESCO.</li>
          <li>NRCC-LTS form tool. Personal. Public source, no longer hosted.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Talks and publications</h2>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
          <li>CABEC 2026, upcoming. AI for Energy Consultants.</li>
          <li>CalBEM 2025. Capturing the Value of BEM Data for Policy and Programs, Power Talk.</li>
          <li>
            ACEEE Summer Study 2024. 21st Century Compliance: Data-Driven Solutions for Decarbonization
            and Equity, Blair and Marver.
          </li>
          <li>CABEC 2024. California Energy Code compliance software framework.</li>
          <li>CABEC 2022. What is new with the 2022 Nonresidential energy code.</li>
          <li>
            CEC briefing. Commissioner McAllister technical staff on the NORESCO compliance database. No
            recording.
          </li>
        </ul>
      </section>

      <section className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Education</h2>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-muted">
            <li>
              <p className="text-ink">B.S. Computer Science</p>
              <p>Colorado State University</p>
            </li>
            <li>
              <p className="text-ink">B.S. Energy Management and Design</p>
              <p>Sonoma State University</p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Skills</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
            <li>
              <span className="text-ink">Current:</span> C#, .NET, React, TypeScript, Python, SQL, Azure,
              APIs, XSD, Title 24, BEM.
            </li>
            <li>
              <span className="text-ink">As of the Oct 2024 PDF:</span> HTML, CSS, JS, React, Bootstrap,
              Python, Flask, Django, MySQL, SQLAlchemy, Azure, GitHub, Git, NPM.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
