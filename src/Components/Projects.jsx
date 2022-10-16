import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFolderSymlinkFill } from "react-icons/bs";
import { projects } from "./data";
const Projects = () => {
  return (
    <section className="projects" id='projects'>
      <h2>Completed Projects</h2>
      <article className="grid">
        {projects.map((project)=>{
          const {id, img, title, technologies, github, liveSite} = project
          return <div className="project-list" key={id}>
            <img src={img} alt={title} />
            <div className="project-content">
              <h4>{title}</h4>
              <div className="tags">
              {technologies.map((tech, index)=>{
                return (
                  <span key={index} className="tag">{tech}</span>
                )
              })}
                </div>
                <div className="links">
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                  </a>
                  <a href={liveSite} target="_blank" rel="noopener noreferrer">
                    <BsFolderSymlinkFill/>
                  </a>
                </div>
            </div>
          </div>
        })}
      </article>
    </section>
  );
};

export default Projects;
