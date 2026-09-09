import { site } from "@/lib/site";

export function ResumeDrafts({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "" : "mt-8 rounded-[1.2rem] border border-line bg-bg-elevated p-5 sm:p-6"}>
      <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Resume drafts for review</p>
      <p className="mt-2 text-sm leading-6 text-muted">
        Three variants for Ben to choose from. These are drafts, not the published download. Keep using the October 2024
        PDF until a winner is picked.
      </p>
      <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {site.resumeDrafts.map((draft) => (
          <li key={draft.href}>
            <a
              href={draft.href}
              download={draft.filename}
              className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm hover:border-accent hover:text-accent"
            >
              {draft.label} PDF
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
