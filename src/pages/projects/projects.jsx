import React from 'react';
import ProjectCard from '../../components/cards/projectCards.jsx';
import projects from './projects.js';
import './projects.css';
import { NavbarPages } from '../../components/navbar/navbarPages.jsx';

const Projects = ({ onNavClick, ready }) => {
  return (
    <div className={`projects-page-wrapper ${ready ? 'visible' : 'hidden'}`}>
      <NavbarPages onNavClick={onNavClick} />
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            images={project.images}
            tech={project.tech}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </div>
  );
};

export { Projects };