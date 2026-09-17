import React from "react";
import Fade from "react-reveal/Fade";

import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";

function SingleProject({ id, name, desc, image, theme, kicker }) {
  const headingId = name.replace(/\s+/g, "-").toLowerCase();

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
          <h2 id={headingId} style={{ color: theme.tertiary }}>
            {name}
          </h2>
          <img src={image ? image : placeholder} alt="" />
          <p className="project--desc" style={{ color: theme.tertiary }}>
            {desc}
          </p>
        </div>
      </article>
    </Fade>
  );
}

export default SingleProject;
