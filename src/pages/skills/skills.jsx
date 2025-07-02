import React from 'react';
import SkillsCard from '../../components/cards/skillCards.jsx';
import skills from './skills.js';
import './skills.css';
import { NavbarPages } from '../../components/navbar/navbarPages.jsx';

const Skills = ({ onNavClick, ready }) => {
  return (
    <div className={`skills-page-wrapper ${ready ? 'visible' : 'hidden'}`}>
      <NavbarPages onNavClick={onNavClick} />
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillsCard
            key={index}
            name={skill.name}
            logo={skill.logo}
            projects={skill.projects}
          />
        ))}
      </div>
    </div>
  );
};

export { Skills };