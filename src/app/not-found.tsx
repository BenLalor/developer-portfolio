import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">404</p>
      <h1 className="font-display mt-3 text-4xl tracking-tight">This page is not on the site.</h1>
      <p className="mt-4 text-muted">The old template routes are gone. Head back to the homepage.</p>
      <Link href="/" className="mt-8 inline-flex text-accent underline-offset-4 hover:underline">
        Back home
      </Link>
    </main>
  );
}
