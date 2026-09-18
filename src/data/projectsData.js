import wattlyLogo from "../assets/svg/projects/wattly.svg";
import prescriptiveGraphic from "../assets/svg/projects/prescriptive.svg";
import dataSchemaGraphic from "../assets/svg/projects/data-schema.svg";

export const wattlyUrl = "https://wattlysolutions.com";

export const projectsData = [
  {
    id: 1,
    projectName: "Wattly",
    projectDesc:
      "Title 24 BEM and compliance software for California, covering performance and prescriptive work. Releasing in private beta.",
    tags: [],
    code: "",
    demo: wattlyUrl,
    image: wattlyLogo,
    kicker: "Founder",
  },
  {
    id: 2,
    projectName: "Virtual Compliance Assistant",
    projectDesc:
      "Lead an interdisciplinary team of software developers and subject matter experts to build Title 24 Part 6 prescriptive compliance software. It digitized a process that used to be hand-filled paper forms and fragmented tools.",
    tags: [],
    code: "",
    demo: "",
    image: prescriptiveGraphic,
    kicker: "NORESCO",
  },
  {
    id: 3,
    projectName: "Compliance data",
    projectDesc:
      "Built and maintain a data pipeline and schema used to inform future policy decisions for building energy codes.",
    tags: [],
    code: "",
    demo: "",
    image: dataSchemaGraphic,
    kicker: "NORESCO",
  },
];
