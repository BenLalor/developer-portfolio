import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(root, "../../public/resume/drafts");

const jobs = [
  { html: "software.html", pdf: "BenLalor_Resume_Software.pdf" },
  { html: "energy-codes.html", pdf: "BenLalor_Resume_EnergyCodes.pdf" },
  { html: "hybrid.html", pdf: "BenLalor_Resume_Hybrid.pdf" },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

for (const job of jobs) {
  const htmlPath = path.join(root, job.html);
  const pdfPath = path.join(outDir, job.pdf);
  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle" });
  await page.pdf({
    path: pdfPath,
    format: "Letter",
    printBackground: true,
    preferCSSPageSize: false,
    margin: { top: "0.45in", right: "0.55in", bottom: "0.42in", left: "0.55in" },
  });
  console.log(`wrote ${path.relative(process.cwd(), pdfPath)}`);
}

await browser.close();
