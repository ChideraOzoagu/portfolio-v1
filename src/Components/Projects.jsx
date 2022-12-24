import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFolderSymlinkFill } from "react-icons/bs";
import { projects } from "./data";
import {motion} from 'framer-motion'
const Projects = () => {
  const projectList = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1
    
    }
  }
  return (
    <section className="projects" id='projects'>
      <h2>Completed Projects</h2>
      <motion.article 
      variants={projectList}
      initial='hidden'
      whileInView='show'
      viewport={{once: true, amount: 0.1}}

      className="grid">
        {projects.map((project, index)=>{
          const {img, title, technologies, github, liveSite} = project
          return <motion.div className="project-list" key={index}
          variants={item}
          viewport={{once: true, amount: 0.5}}

          >
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
          </motion.div>
        })}
      </motion.article>
    </section>
  );
};

export default Projects;
