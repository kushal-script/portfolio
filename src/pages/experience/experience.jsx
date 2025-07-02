import React from 'react';
import ExperienceCard from '../../components/cards/experienceCards.jsx';
import experiences from './experience.js';
import './experience.css';
import { NavbarPages } from '../../components/navbar/navbarPages.jsx';

const Experience = ({ onNavClick, ready }) => {
  return (
    <div className={`experience-page-wrapper ${ready ? 'visible' : 'hidden'}`}>
      <NavbarPages onNavClick={onNavClick} />
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            role={exp.role}
            company={exp.company}
            duration={exp.duration}
            description={exp.description}
            tech={exp.tech}
          />
        ))}
      </div>
    </div>
  );
};

export { Experience };