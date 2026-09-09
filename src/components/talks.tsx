import { engagements, talks } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Talks() {
  return (
    <section id="talks" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Talks & publications"
          title="Papers, power talks, and code-cycle briefings."
          description="Only verified appearances are listed. Québec / eSim speaking is not confirmed and is held in CONTENT.md."
        />

        <ul className="divide-y divide-line border-y border-line">
          {talks.map((talk) => (
            <li key={`${talk.year}-${talk.title}`} className="grid gap-4 py-8 md:grid-cols-[88px_1fr]">
              <p className="font-mono text-sm text-accent">{talk.year}</p>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm text-muted">{talk.venue}</p>
                  {talk.upcoming ? (
                    <span className="rounded-full bg-forest-soft px-2.5 py-0.5 font-mono text-[11px] text-forest">
                      Upcoming
                    </span>
                  ) : null}
                </div>
                <h3 className="font-display mt-2 text-2xl tracking-tight text-pretty">{talk.title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{talk.detail}</p>
                {talk.links.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {talk.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} className="text-accent underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-[1.2rem] border border-line bg-bg-elevated p-6">
          <h3 className="font-display text-xl">Industry engagement</h3>
          {engagements.map((item) => (
            <div key={item.title} className="mt-3">
              <p className="text-sm font-medium">{item.title}</p>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
