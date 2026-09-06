import { experience } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="Experience"
          title="Building the software behind California energy-code compliance."
          description="Titles and dates follow the October 2024 résumé. EnergySoft is listed as Energy Analyst, not a senior nonresidential title."
        />

        <ol className="space-y-12">
          {experience.map((job) => (
            <li key={job.company} className="grid gap-6 border-l border-line pl-6 md:grid-cols-[220px_1fr] md:border-l-0 md:pl-0">
              <div>
                <h3 className="font-display text-2xl tracking-tight">{job.company}</h3>
                <p className="mt-1 font-mono text-xs text-muted">{job.dates}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {job.roles.map((role) => (
                    <li key={role.title}>
                      <span className="text-ink">{role.title}</span>
                      <span className="block font-mono text-xs">{role.dates}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="space-y-3 text-base leading-7 text-muted">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-5 before:absolute before:top-2.5 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent">
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
