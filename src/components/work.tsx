import { work } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Work() {
  const [featured, ...rest] = work;

  return (
    <section id="work" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title="Energy-code software, not toy demos."
          description="Calculator and stock-visualizer experiments from the old site are retired here. The work below is Title 24 compliance software — employer work and independent preparation."
        />

        <article className="rounded-[1.6rem] border border-line bg-bg-elevated p-6 shadow-[var(--shadow)] sm:p-10">
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">{featured.kicker}</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
            <h3 className="font-display text-3xl tracking-tight sm:text-4xl">{featured.title}</h3>
            {featured.status ? (
              <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-ink">{featured.status}</span>
            ) : null}
          </div>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{featured.description}</p>
          <ul className="mt-6 max-w-3xl space-y-2 text-base leading-7 text-muted">
            {featured.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2">
            {featured.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                {tag}
              </li>
            ))}
          </ul>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {rest.map((item) => (
            <article key={item.title} className="flex flex-col rounded-[1.3rem] border border-line bg-bg-elevated p-6">
              <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">{item.kicker}</p>
              <h3 className="font-display mt-3 text-2xl tracking-tight">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">{item.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted">
                    {tag}
                  </li>
                ))}
              </ul>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-5 text-sm text-accent underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.hrefLabel}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
