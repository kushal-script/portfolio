import React from 'react';
import './cards.css';

const ExperienceCard = ({ role, company, duration, description, tech }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h2 className="experience-role">{role}</h2>
        <span className="experience-company">@ {company}</span>
        <span className="experience-duration">{duration}</span>
      </div>
      <p className="experience-desc">{description}</p>
      <div className="experience-tech">
        {tech.map((item, idx) => (
          <span key={idx} className="tech-tag">{item}</span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;