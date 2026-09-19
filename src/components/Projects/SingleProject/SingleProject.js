import React from "react";
import Fade from "react-reveal/Fade";

import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";

function SingleProject({ id, name, desc, image, theme, kicker, url }) {
  const headingId = name.replace(/\s+/g, "-").toLowerCase();
  const heading = (
    <h2 id={headingId} style={{ color: theme.tertiary }}>
      {name}
    </h2>
  );
  const imageEl = <img src={image ? image : placeholder} alt="" />;

  return (
    <Fade bottom>
      <article
        key={id}
        className="singleProject"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className="projectContent">
          {kicker && (
            <p className="project-kicker" style={{ color: theme.secondary }}>
              {kicker}
            </p>
          )}
          {url ? (
            <a
              className="project-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} website`}
            >
              {heading}
              {imageEl}
            </a>
          ) : (
            <>
              {heading}
              {imageEl}
            </>
          )}
          <p className="project--desc" style={{ color: theme.tertiary }}>
            {desc}
          </p>
        </div>
      </article>
    </Fade>
  );
}

export default SingleProject;
