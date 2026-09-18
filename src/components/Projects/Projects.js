import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";

import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";

function Projects() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {projectsData.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Selected work</h1>
          </div>
          <div className="projects--body">
            <div className="projects--bodyContainer">
              {projectsData.map((project) => (
                <SingleProject
                  theme={theme}
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  image={project.image}
                  kicker={project.kicker}
                  url={project.demo}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
