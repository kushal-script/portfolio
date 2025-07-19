import React from 'react';
import './cards.css';

const AchievementCard = ({ title, date, description, tags, certificate }) => {
    return (
      <div className="achievement-card">
        <div className="achievement-header">
          <h3 className="achievement-title">{title}</h3>
          <span className="achievement-date">{date}</span>
        </div>
        <p className="achievement-description">{description}</p>
        <div className="achievement-tags">
          {tags.map((tag, i) => <span key={i}>{tag}</span>)}
        </div>
        {certificate && (
          <div className="achievement-footer">
            <a href={certificate} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        )}
      </div>
    );
  };

  const CompetitionCard = ({ title, date, description, tags, link }) => {
    return (
      <div className="achievement-card">
        <div className="achievement-header">
          <h3 className="achievement-title">{title}</h3>
          <span className="achievement-date">{date}</span>
        </div>
        <p className="achievement-description">{description}</p>
        <div className="achievement-tags">
          {tags.map((tag, i) => <span key={i}>{tag}</span>)}
        </div>
        {link && (
          <div className="achievement-footer">
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        )}
      </div>
    );
  };
  
  export {AchievementCard, CompetitionCard};