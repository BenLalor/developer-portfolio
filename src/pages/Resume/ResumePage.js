import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineHome } from "react-icons/ai";

import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { resumeData } from "../../data/resumeData";
import { experienceData } from "../../data/experienceData";
import { talksData } from "../../data/talksData";
import { educationData } from "../../data/educationData";
import { skillNote } from "../../data/skillsData";
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
            draft is chosen. The three variants below are for review only.
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
            Full-stack developer and building energy codes specialist ·{" "}
            {headerData.location}
          </p>
          <p className="resume-meta" style={{ color: theme.tertiary80 }}>
            {contactsData.email} · {contactsData.phone} · benlalor.com
          </p>
          <p style={{ color: theme.tertiary80 }}>{resumeData.summary}</p>
        </section>

        <section className={`resume-section ${classes.panel}`}>
          <h2 style={{ color: theme.primary }}>Experience</h2>
          {experienceData.map((job) => (
            <article key={job.company}>
              <h3 style={{ color: theme.tertiary }}>{job.company}</h3>
              <p className="resume-meta" style={{ color: theme.tertiary80 }}>
                {job.roles
                  .map((role) => `${role.title} (${role.dates})`)
                  .join(" · ")}
              </p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet} style={{ color: theme.tertiary80 }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className={`resume-section ${classes.panel}`}>
          <h2 style={{ color: theme.primary }}>Selected work</h2>
          <ul>
            <li style={{ color: theme.tertiary80 }}>
              Wattly — independent Title 24 BEM / compliance software for
              California. Prepared; not publicly released.
            </li>
            <li style={{ color: theme.tertiary80 }}>
              Title 24 Part 6 prescriptive compliance web application (NORESCO)
              and shared XSD / compliance-data infrastructure.
            </li>
          </ul>
        </section>

        <section className={`resume-section ${classes.panel}`}>
          <h2 style={{ color: theme.primary }}>Talks & publications</h2>
          <ul>
            {talksData.map((talk) => (
              <li key={talk.title} style={{ color: theme.tertiary80 }}>
                {talk.year} · {talk.venue}
                {talk.upcoming ? " (Upcoming)" : ""} — {talk.title}
              </li>
            ))}
          </ul>
        </section>

        <section className={`resume-section ${classes.panel}`}>
          <h2 style={{ color: theme.primary }}>Education</h2>
          <ul>
            {educationData.map((item) => (
              <li key={item.institution} style={{ color: theme.tertiary80 }}>
                {item.course} — {item.institution}
              </li>
            ))}
          </ul>
        </section>

        <section className={`resume-section ${classes.panel}`}>
          <h2 style={{ color: theme.primary }}>Skills</h2>
          <p style={{ color: theme.tertiary80 }}>{skillNote}</p>
        </section>
      </div>
    </div>
  );
}

export default ResumePage;
