import React from 'react';
import './cards.css';

const SkillsCard = ({ name, Icon, projects }) => {
  return (
    <div className="skills-card">
      <Icon className="skills-logo" size={40} />
      <p className="skills-name">{name}</p>
      {projects.length > 0 && (
        <div className="skills-projects">
          <ul>
            {projects.map((project, index) => (
              <li key={index} className="skills-project-name">{project}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SkillsCard;