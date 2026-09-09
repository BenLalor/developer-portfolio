"use client";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="underline-offset-4 hover:underline">
      Print / save PDF
    </button>
  );
}
