import React from "react";
import { useFetchProject } from "./fetchProjects";

const Projects = () => {
  const { isLoading, projects } = useFetchProject();

  if (isLoading) {
    return (
      <section className="projects">
        <div className="projects-center">
          <h2>Loading...</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, title, img, url } = project;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
