import Image from "next/image";
import Link from "next/link";
import { about, hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div className="reveal">
          <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">{hero.eyebrow}</p>
          <h1 className="font-display mt-4 text-5xl leading-[1.05] tracking-tight text-pretty sm:text-6xl lg:text-7xl">
            {hero.name}
          </h1>
          <p className="font-display mt-5 text-2xl text-pretty text-forest italic sm:text-3xl">{hero.headline}</p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{hero.lede}</p>
          <div className="mt-6 space-y-4 text-base leading-7 text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              download={hero.primaryCta.download}
              className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {hero.primaryCta.label}
            </a>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: "120ms" }}>
          <div className="absolute -inset-3 rounded-[2rem] border border-accent/40" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-line bg-bg-elevated shadow-[var(--shadow)]">
            <Image
              src="/images/ben-lalor.jpeg"
              alt="Portrait of Ben Lalor"
              width={1124}
              height={1074}
              priority
              sizes="(min-width: 1024px) 420px, 80vw"
              className="aspect-[4/5] w-full object-cover object-[50%_18%]"
            />
          </div>
          <p className="mt-4 font-mono text-xs tracking-wide text-muted">
            Full-stack developer · Title 24 / BEM
          </p>
        </div>
      </div>
    </section>
  );
}
