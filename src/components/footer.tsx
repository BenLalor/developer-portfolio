import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="no-print border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {site.name}. Denver / Arvada, CO.</p>
        <p>Personal site draft. Do not deploy to production until approved.</p>
      </div>
    </footer>
  );
}
