import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../contexts/ThemeContext";
import { talksData, engagementsData } from "../../data/talksData";
import "./Talks.css";

function Talks() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    talksCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
    engagement: {
      backgroundColor: theme.primary30,
    },
  }));

  const classes = useStyles();

  return (
    <div className="talks" id="talks" style={{ backgroundColor: theme.secondary }}>
      <div className="talks-header">
        <h1 style={{ color: theme.primary }}>Talks and publications</h1>
        <p style={{ color: theme.tertiary80 }}>
          Papers, conference talks, and briefings.
        </p>
      </div>
      <div className="talks-cards">
        {talksData.map((talk) => (
          <Fade bottom key={talk.id}>
            <article className={`talks-card ${classes.talksCard}`}>
              <div
                className="talks-year"
                style={{ backgroundColor: theme.primary, color: theme.secondary }}
              >
                {talk.year}
              </div>
              <div className="talks-details">
                <div className="talks-meta">
                  <span className="talks-venue" style={{ color: theme.primary }}>
                    {talk.venue}
                  </span>
                  {talk.upcoming && (
                    <span
                      className="talks-upcoming"
                      style={{
                        backgroundColor: theme.primary,
                        color: theme.secondary,
                      }}
                    >
                      Upcoming
                    </span>
                  )}
                </div>
                <h4 style={{ color: theme.tertiary }}>{talk.title}</h4>
                <p style={{ color: theme.tertiary80 }}>{talk.detail}</p>
                {talk.links && talk.links.length > 0 && (
                  <div className="talks-links">
                    {talk.links.map((link) => (
                      <a
                        key={link.href + link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: theme.primary }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Fade>
        ))}
        {engagementsData.map((item) => (
          <Fade bottom key={item.title}>
            <div className={`talks-engagement ${classes.engagement}`}>
              <h5 style={{ color: theme.tertiary }}>{item.title}</h5>
              <p style={{ color: theme.tertiary80 }}>{item.detail}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default Talks;
