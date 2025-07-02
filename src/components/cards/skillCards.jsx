import React from 'react';
import './cards.css'; 

const SkillsCard = ({ name, logo, projects }) => {
  return (
    <div className="skills-card">
      <img src={logo} alt={name} className="skills-logo" />
      <p className="skills-name">{name}</p>
      {projects.length > 0 && (
        <div className="skills-projects">
          <span>Used in:</span>
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