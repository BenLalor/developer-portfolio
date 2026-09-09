import { education, skillGroups, skillNote } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function EducationSkills() {
  return (
    <section id="background" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Education & skills"
          title="Two degrees. One through-line: codes and software."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            {education.map((item) => (
              <article key={item.school} className="rounded-[1.2rem] border border-line bg-bg-elevated p-6">
                <h3 className="font-display text-2xl tracking-tight">{item.school}</h3>
                <p className="mt-2 text-forest">{item.degree}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{item.notes}</p>
              </article>
            ))}
          </div>

          <div>
            <div className="grid gap-6 sm:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">{group.label}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm leading-6 text-muted">{skillNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
