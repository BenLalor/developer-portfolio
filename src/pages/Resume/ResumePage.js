import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineHome } from "react-icons/ai";

import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { resumeData } from "../../data/resumeData";
import { contactsData } from "../../data/contactsData";

import "./ResumePage.css";

function ResumePage() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    home: {
      color: theme.secondary,
      position: "absolute",
      top: 25,
      left: 25,
      padding: "7px",
      borderRadius: "50%",
      boxSizing: "content-box",
      fontSize: "2rem",
      cursor: "pointer",
      boxShadow:
        theme.type === "dark"
          ? "3px 3px 6px #ffffff40, -3px -3px 6px #00000050"
          : "3px 3px 6px #ffffff40, -3px -3px 6px #00000050",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        color: theme.tertiary,
        transform: "scale(1.1)",
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "1.8rem",
      },
    },
    panel: {
      backgroundColor: theme.primary30,
    },
  }));

  const classes = useStyles();

  return (
    <div className="resumePage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>{headerData.name} | Resume</title>
      </Helmet>
      <div
        className="resumePage-header"
        style={{ backgroundColor: theme.primary }}
      >
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: theme.secondary }}>Resume</h1>
      </div>
      <div className="resumePage-container">
        <section className={`resume-downloads ${classes.panel}`}>
          <h2 style={{ color: theme.primary }}>Downloads</h2>
          <p style={{ color: theme.tertiary80 }}>
            The October 2024 PDF remains the current published résumé until a
            draft is chosen. The three variants below are unslopped drafts for
            review only.
          </p>
          <div className="resume-download-list">
            <a
              href={resumeData.published.href}
              download={resumeData.published.filename}
              style={{ color: theme.primary }}
            >
              {resumeData.published.label}
            </a>
            {resumeData.drafts.map((draft) => (
              <a
                key={draft.filename}
                href={draft.href}
                download={draft.filename}
                style={{ color: theme.primary }}
              >
                Draft — {draft.label}
              </a>
            ))}
          </div>
        </section>

        <section className={`resume-section ${classes.panel}`}>
          <h2 style={{ color: theme.primary }}>{headerData.name}</h2>
          <p className="resume-meta" style={{ color: theme.tertiary80 }}>
            {headerData.location}
          </p>
          <p className="resume-meta" style={{ color: theme.tertiary80 }}>
            {contactsData.email} · {contactsData.phone} · benlalor.com · GitHub
            / LinkedIn
          </p>
          <p style={{ color: theme.tertiary80 }}>{resumeData.summary}</p>
        </section>

        <section className={`resume-section ${classes.panel}`}>
          <h2 style={{ color: theme.primary }}>Experience</h2>

          <article>
            <h3 style={{ color: theme.tertiary }}>NORESCO</h3>
            <p className="resume-meta" style={{ color: theme.tertiary80 }}>
              2019 to present
            </p>
            <p className="resume-meta" style={{ color: theme.tertiary80 }}>
              Senior Energy Analyst, 2024 to present. Energy Analyst III, 2021
              to 2024. Energy Analyst II, 2019 to 2021.
            </p>
            <p className="resume-subhead" style={{ color: theme.primary }}>
              Software
            </p>
            <ul>
              <li style={{ color: theme.tertiary80 }}>
                Lead a development team on a full-stack web app for Title 24
                Part 6 prescriptive compliance.
              </li>
              <li style={{ color: theme.tertiary80 }}>
                SQL database of public and private CA compliance-software data.
              </li>
              <li style={{ color: theme.tertiary80 }}>
                XSD ruleset shared across compliance tools.
              </li>
              <li style={{ color: theme.tertiary80 }}>
                Secure API for large-scale building data.
              </li>
            </ul>
            <p className="resume-subhead" style={{ color: theme.primary }}>
              Codes and stakeholders
            </p>
            <ul>
              <li style={{ color: theme.tertiary80 }}>
                CEC, local government, IOUs, CPUC Codes and Standards.
              </li>
              <li style={{ color: theme.tertiary80 }}>
                Reach Code support for local governments.
              </li>
              <li style={{ color: theme.tertiary80 }}>
                CASE SME for the 2022, 2025, and 2028 cycles.
              </li>
            </ul>
          </article>

          <article>
            <h3 style={{ color: theme.tertiary }}>EnergySoft</h3>
            <p className="resume-meta" style={{ color: theme.tertiary80 }}>
              2014 to 2019
            </p>
            <p className="resume-meta" style={{ color: theme.tertiary80 }}>
              Energy Analyst, 2015 to 2019. Intern, 2014 to 2015.
            </p>
            <ul>
              <li style={{ color: theme.tertiary80 }}>
                Apple Park and other nonresidential energy models.
              </li>
              <li style={{ color: theme.tertiary80 }}>
                EnergyPro LCCA. Consultant management.
              </li>
            </ul>
          </article>
        </section>

        <section className={`resume-section ${classes.panel}`}>
          <h2 style={{ color: theme.primary }}>Selected work</h2>
          <ul>
            <li style={{ color: theme.tertiary80 }}>
              Wattly. Independent creator. Title 24 BEM and compliance,
              performance and prescriptive. Prepared, not public.
            </li>
            <li style={{ color: theme.tertiary80 }}>
              Prescriptive compliance web app. Lead, NORESCO.
            </li>
            <li style={{ color: theme.tertiary80 }}>
              Compliance data and XSD infrastructure. Developer and maintainer,
              NORESCO.
            </li>
            <li style={{ color: theme.tertiary80 }}>
              NRCC-LTS form tool. Personal. Public source, no longer hosted.
            </li>
          </ul>
        </section>

        <section className={`resume-section ${classes.panel}`}>
          <h2 style={{ color: theme.primary }}>Talks and publications</h2>
          <ul>
            <li style={{ color: theme.tertiary80 }}>
              CABEC 2026, upcoming. AI for Energy Consultants.
            </li>
            <li style={{ color: theme.tertiary80 }}>
              CalBEM 2025. Capturing the Value of BEM Data for Policy and
              Programs, Power Talk.
            </li>
            <li style={{ color: theme.tertiary80 }}>
              ACEEE Summer Study 2024. 21st Century Compliance: Data-Driven
              Solutions for Decarbonization and Equity, Blair and Marver.
            </li>
            <li style={{ color: theme.tertiary80 }}>
              CABEC 2024. California Energy Code compliance software framework.
            </li>
            <li style={{ color: theme.tertiary80 }}>
              CABEC 2022. What is new with the 2022 Nonresidential energy code.
            </li>
            <li style={{ color: theme.tertiary80 }}>
              CEC briefing. Commissioner McAllister technical staff on the
              NORESCO compliance database. No recording.
            </li>
          </ul>
        </section>

        <section className={`resume-section ${classes.panel}`}>
          <h2 style={{ color: theme.primary }}>Education</h2>
          <ul>
            <li style={{ color: theme.tertiary80 }}>
              B.S. Computer Science — Colorado State University
            </li>
            <li style={{ color: theme.tertiary80 }}>
              B.S. Energy Management and Design — Sonoma State University
            </li>
          </ul>
        </section>

        <section className={`resume-section ${classes.panel}`}>
          <h2 style={{ color: theme.primary }}>Skills</h2>
          <ul>
            <li style={{ color: theme.tertiary80 }}>
              Current: C#, .NET, React, TypeScript, Python, SQL, Azure, APIs,
              XSD, Title 24, BEM.
            </li>
            <li style={{ color: theme.tertiary80 }}>
              As of the Oct 2024 PDF: HTML, CSS, JS, React, Bootstrap, Python,
              Flask, Django, MySQL, SQLAlchemy, Azure, GitHub, Git, NPM.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ResumePage;
