import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { education, experience, skillGroups, talks } from "@/lib/content";
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
            October 2024 PDF
          </a>
          <PrintButton />
        </div>
      </div>

      <header className="border-b border-line pb-6">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Draft HTML résumé</p>
        <h1 className="font-display mt-2 text-5xl tracking-tight">{site.name}</h1>
        <p className="mt-3 text-lg text-muted">
          Full-stack developer and building energy codes specialist · {site.location}
        </p>
        <p className="mt-3 text-sm text-muted">
          {site.email} · {site.phoneDisplay} · {site.url.replace("https://", "")} · GitHub / LinkedIn
        </p>
      </header>

      <section className="mt-8">
        <h2 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Summary</h2>
        <p className="mt-3 leading-7 text-muted">
          Full-stack developer with about a decade in building energy codes and compliance software. Leads Title 24,
          Part 6 prescriptive compliance tooling at NORESCO. Independent creator of Wattly, Title 24 BEM / compliance
          software for California, currently prepared and not publicly released.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Experience</h2>
        {experience.map((job) => (
          <article key={job.company} className="mt-5">
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="text-lg font-medium">{job.company}</h3>
              <p className="font-mono text-xs text-muted">{job.dates}</p>
            </div>
            <p className="text-sm text-muted">{job.roles.map((role) => `${role.title} (${role.dates})`).join(" · ")}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Selected work</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
          <li>Wattly — independent Title 24 BEM / compliance software for California. Prepared; not publicly released.</li>
          <li>Title 24 Part 6 prescriptive compliance web application (NORESCO) and shared XSD / compliance-data infrastructure.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Talks & publications</h2>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
          {talks.map((talk) => (
            <li key={talk.title}>
              <span className="text-ink">
                {talk.year} · {talk.venue}
                {talk.upcoming ? " (Upcoming)" : ""}
              </span>
              {" — "}
              {talk.title}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Education</h2>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-muted">
            {education.map((item) => (
              <li key={item.school}>
                <p className="text-ink">{item.degree}</p>
                <p>{item.school}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Skills</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
            {skillGroups.map((group) => (
              <li key={group.label}>
                <span className="text-ink">{group.label}:</span> {group.items.join(", ")}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs leading-5 text-muted">
            This HTML draft includes current Wattly / .NET skills and may diverge from the October 2024 PDF.
          </p>
        </div>
      </section>
    </main>
  );
}
