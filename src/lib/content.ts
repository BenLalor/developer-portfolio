import { site } from "./site";

export const nav = [
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/#talks", label: "Talks" },
  { href: "/#background", label: "Background" },
  { href: "/resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
] as const;

export const hero = {
  eyebrow: "Denver / Arvada, CO",
  name: site.name,
  headline: "Energy-code specialist and full-stack builder.",
  lede: "I lead software that digitizes California Title 24, Part 6 compliance — and I build the tools around it. About a decade in building energy codes, now spent mostly on product, data, and the rulesets underneath.",
  primaryCta: { href: site.resumePdf, label: "Download resume", download: "BenLalor_Resume.pdf" },
  secondaryCta: { href: "/#contact", label: "Get in touch" },
};

export const about = {
  paragraphs: [
    "During the day I lead a team building full-stack tooling for Title 24 Part 6 prescriptive compliance, maintain the XSD ruleset used as central infrastructure for California compliance tools, and run the data systems that inform CASE, CEC, and CPUC work.",
    "Independently, I am the creator of Wattly — Title 24 BEM and compliance software for California, currently prepared and not yet publicly released.",
  ],
};

export type Role = {
  title: string;
  dates: string;
};

export type Experience = {
  company: string;
  dates: string;
  roles: Role[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "NORESCO",
    dates: "2019 — Present",
    roles: [
      { title: "Senior Energy Analyst", dates: "2024 — Present" },
      { title: "Energy Analyst III", dates: "2021 — 2024" },
      { title: "Energy Analyst II", dates: "2019 — 2021" },
    ],
    bullets: [
      "Lead a team building a full-stack web application for Title 24, Part 6 prescriptive compliance.",
      "Develop a SQL database that collects public and private California compliance-software data to support CASE teams, the CEC, and the CPUC with actionable insights.",
      "Develop and maintain the XSD ruleset used as central infrastructure for public and private California compliance tools.",
      "Build a secure API for efficient transmission of large-scale building data.",
      "Work with CEC, local governments, IOUs, and CPUC Codes & Standards participants; support Reach Code adoption; serve as a CASE subject-matter expert for the 2022, 2025, and 2028 code cycles.",
    ],
  },
  {
    company: "EnergySoft",
    dates: "2014 — 2019",
    roles: [
      { title: "Energy Analyst", dates: "2015 — 2019" },
      { title: "Energy Analyst Intern", dates: "2014 — 2015" },
    ],
    bullets: [
      "Built and ran building energy models for projects including Apple Park.",
      "Developed life-cycle cost analyses for nonresidential design options in EnergyPro.",
      "Managed consultants and delegated project work.",
    ],
  },
];

export type WorkItem = {
  title: string;
  kicker: string;
  status?: string;
  description: string;
  points: string[];
  tags: string[];
  href?: string;
  hrefLabel?: string;
};

export const work: WorkItem[] = [
  {
    title: "Wattly",
    kicker: "Independent creator",
    status: "Prepared — not publicly released",
    description:
      "Title 24 BEM and compliance software for California, covering performance and prescriptive workflows. Built for energy consultants who need modern product craft instead of dated desktop friction.",
    points: [
      "Independent work in preparation. Not launched, not available for download, and not listed here as a public product.",
      "Direction: simpler building energy modeling, desktop and web, performance plus prescriptive compliance.",
    ],
    tags: ["Title 24", "BEM", "C# / .NET", "React", "Performance + prescriptive"],
  },
  {
    title: "Title 24 prescriptive compliance tooling",
    kicker: "NORESCO",
    description:
      "Lead the team building the full-stack web application used to demonstrate California Title 24, Part 6 prescriptive compliance — digitizing a process that used to live in paper forms and fragmented tools.",
    points: [
      "Full-stack product work with energy-code subject-matter depth.",
      "Stakeholders across CEC, local government, IOUs, and CPUC Codes & Standards.",
    ],
    tags: ["Title 24 Part 6", "Full-stack", "Prescriptive compliance"],
  },
  {
    title: "Compliance data & ruleset infrastructure",
    kicker: "NORESCO",
    description:
      "SQL systems that collect public and private California compliance-software data, plus the XSD ruleset that sits underneath public and private tools — and a secure API for large-scale building data.",
    points: [
      "Built so CASE, CEC, and CPUC work can use real compliance data, not anecdotes.",
      "The ruleset is shared infrastructure, not a one-off schema.",
    ],
    tags: ["SQL", "XSD", "API", "CEC / CASE / CPUC"],
  },
  {
    title: "Energy Code form completion tool",
    kicker: "Personal project",
    description:
      "A public full-stack experiment for completing NRCC-LTS energy code forms: register, save, revisit, and check requirements. Previously hosted on Azure; source remains on GitHub.",
    points: [
      "Earlier personal work in the same domain as the later NORESCO and Wattly work.",
    ],
    tags: ["Python", "Flask", "JavaScript", "MySQL", "Azure"],
    href: "https://github.com/BenLalor/LTS_ComplianceSoftware_VanillaJavascript",
    hrefLabel: "Source on GitHub",
  },
];

export type Talk = {
  year: string;
  venue: string;
  title: string;
  detail: string;
  upcoming?: boolean;
  links: { label: string; href: string }[];
};

export const talks: Talk[] = [
  {
    year: "2026",
    venue: "CABEC Conference",
    title: "AI for Energy Consultants",
    detail:
      "Upcoming. Conference is September 15–17, 2026 in Petaluma. Session page not published separately — this listing is the talk title only.",
    upcoming: true,
    links: [{ label: "CABEC 2026 conference", href: "https://cabec.org/conference2026/" }],
  },
  {
    year: "2025",
    venue: "CalBEM",
    title: "Capturing the Value of BEM Data for Policy and Programs",
    detail:
      "Power Talk. A recording exists on the CalBEM YouTube channel; public release is pending, so no watch URL is listed here.",
    links: [
      { label: "2025 agenda", href: "https://calbem.ibpsa.us/2025-agenda/" },
      { label: "CalBEM 2025 recap", href: "https://calbem.ibpsa.us/2025/12/09/calbem-2025/" },
      { label: "CalBEM YouTube", href: "https://www.youtube.com/@CalBEM" },
    ],
  },
  {
    year: "2024",
    venue: "ACEEE Summer Study",
    title: "21st Century Compliance: Data-Driven Solutions for Decarbonization and Equity",
    detail: "Paper and presentation. Coauthors Sally Blair and Jill Marver. Link the proceedings page; a stable public PDF was not available as of this draft.",
    links: [
      {
        label: "2024 proceedings",
        href: "https://www.aceee.org/summer-study-2024-proceedings",
      },
    ],
  },
  {
    year: "2024",
    venue: "CABEC Conference",
    title: "California Energy Code compliance software framework",
    detail: "Conference presentation. No separate public session URL found.",
    links: [{ label: "CABEC", href: "https://cabec.org/" }],
  },
  {
    year: "2022",
    venue: "CABEC Conference",
    title: "What’s new with the 2022 Nonresidential energy code",
    detail: "Conference presentation. No separate public session URL found.",
    links: [{ label: "CABEC", href: "https://cabec.org/" }],
  },
];

export const engagements = [
  {
    title: "CEC Commissioner technical briefing",
    detail:
      "Led a technical briefing for Commissioner Andrew McAllister and senior technical staff on the compliance database built by NORESCO’s Codes and Standards team. No public recording.",
  },
];

export const education = [
  {
    school: "Colorado State University",
    degree: "B.S. Computer Science",
    notes: "Software development, database management, software engineering, computer architecture.",
  },
  {
    school: "Sonoma State University",
    degree: "B.S. Energy Management and Design",
    notes: "Thermal energy management, renewable energy systems, electrical energy management.",
  },
];

export const skillGroups = [
  {
    label: "Software",
    items: ["C# / .NET", "React", "TypeScript", "Python", "SQL", "HTML / CSS", "Git / GitHub"],
  },
  {
    label: "Platforms",
    items: ["Azure", "APIs", "XSD / rulesets"],
  },
  {
    label: "Domain",
    items: ["Title 24, Part 6", "BEM", "Prescriptive + performance compliance", "CASE / Reach Codes"],
  },
];

export const skillNote =
  "Site skills reflect current work, including independent Wattly / .NET development. The October 2024 résumé PDF lists a narrower set (HTML/CSS/JS/React/Bootstrap; Python/Flask/Django/MySQL/SQLAlchemy; Azure/GitHub/Git/NPM). See CONTENT.md.";
