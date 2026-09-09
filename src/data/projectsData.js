import LTSImage from "../assets/svg/projects/LTSImage.svg";
import ProjectOne from "../assets/svg/projects/one.svg";
import ProjectSix from "../assets/svg/projects/six.svg";
import ProjectFour from "../assets/svg/projects/four.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Wattly",
    projectDesc:
      "Independent creator. Title 24 BEM and compliance software for California (performance + prescriptive). Prepared — not publicly released. Not a product launch and not listed as Wattly Solutions.",
    tags: ["Title 24", "BEM", "C# / .NET", "React"],
    code: "",
    demo: "",
    image: ProjectOne,
    kicker: "Independent creator",
    status: "Prepared — not publicly released",
  },
  {
    id: 2,
    projectName: "Title 24 prescriptive compliance tooling",
    projectDesc:
      "Lead the team building the full-stack web application used to demonstrate California Title 24, Part 6 prescriptive compliance — digitizing a process that used to live in paper forms and fragmented tools.",
    tags: ["Title 24 Part 6", "Full-stack", "Prescriptive"],
    code: "",
    demo: "",
    image: ProjectSix,
    kicker: "NORESCO",
  },
  {
    id: 3,
    projectName: "Compliance data & ruleset infrastructure",
    projectDesc:
      "SQL systems that collect public and private California compliance-software data, plus the XSD ruleset underneath public and private tools — and a secure API for large-scale building data.",
    tags: ["SQL", "XSD", "API", "CEC / CASE / CPUC"],
    code: "",
    demo: "",
    image: ProjectFour,
    kicker: "NORESCO",
  },
  {
    id: 4,
    projectName: "Energy Code form completion tool",
    projectDesc:
      "A public full-stack experiment for completing NRCC-LTS energy code forms: register, save, revisit, and check requirements. Previously hosted on Azure; source remains on GitHub.",
    tags: ["Python", "Flask", "JavaScript", "MySQL"],
    code: "https://github.com/BenLalor/LTS_ComplianceSoftware_VanillaJavascript",
    demo: "https://github.com/BenLalor/LTS_ComplianceSoftware_VanillaJavascript",
    image: LTSImage,
    kicker: "Personal project",
  },
];
