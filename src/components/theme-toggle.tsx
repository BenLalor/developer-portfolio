"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg-elevated text-ink transition-colors hover:border-accent hover:text-accent"
      aria-label="Toggle light and dark theme"
      onClick={() => {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "light" : "dark");
      }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="hidden h-4 w-4 dark:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="block h-4 w-4 dark:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z" />
      </svg>
    </button>
  );
}
