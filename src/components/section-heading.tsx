export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
        {index} / {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-3xl tracking-tight text-pretty sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{description}</p> : null}
    </div>
  );
}
