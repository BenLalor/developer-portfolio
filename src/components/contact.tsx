import { site } from "@/lib/site";
import { SectionHeading } from "./section-heading";

const contacts = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phoneDisplay, href: site.phoneHref },
  { label: "LinkedIn", value: "ben-lalor-1aab8997", href: site.linkedin },
  { label: "GitHub", value: "BenLalor", href: site.github },
  { label: "Web", value: "www.benlalor.com", href: site.url },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Personal channels only."
          description="These are the public personal contacts already on the résumé. Work phones, work email, and employer signature blocks are intentionally omitted."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-[1.2rem] border border-line bg-bg-elevated p-5 transition-colors hover:border-accent"
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">{item.label}</p>
              <p className="mt-2 text-lg">{item.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.resumePdf}
            download="BenLalor_Resume.pdf"
            className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg"
          >
            {site.resumePdfLabel}
          </a>
          <a
            href="/resume"
            className="inline-flex items-center rounded-full border border-line px-5 py-3 text-sm font-medium hover:border-accent hover:text-accent"
          >
            HTML résumé / print
          </a>
        </div>
      </div>
    </section>
  );
}
