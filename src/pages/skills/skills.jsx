import React from 'react';
import SkillsCard from '../../components/cards/skillCards.jsx';
import skills from './skills.js';
import './skills.css';
import { Navbar } from '../../components/navbar/navbar.jsx';

const Skills = ({ onNavClick, ready }) => {
  return (
    <div className={`skills-page-wrapper ${ready ? 'visible' : 'hidden'}`}>
      <Navbar onNavClick={onNavClick} />
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillsCard
            key={index}
            name={skill.name}
            Icon={skill.Icon}
            projects={skill.projects}
          />
        ))}
      </div>
    </div>
  );
};

export { Skills };