import React from 'react';
import { AchievementCard } from '../../components/cards/achieveCards.jsx';
import { achievementsInfo } from './achievements.js';
import './achievements.css';
import { Navbar } from '../../components/navbar/navbar.jsx';

const Achievements = ({ onNavClick, ready }) => {
  return (
    <div className={`achievements-page-wrapper ${ready ? 'visible' : 'hidden'}`}>
      <Navbar onNavClick={onNavClick} />
      <div className="achievements-container">
        {achievementsInfo.achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            title={achievement.title}
            date={achievement.date}
            description={achievement.description}
            tags={achievement.tags}
            certificate={achievement.certificate}
          />
        ))}
      </div>
    </div>
  );
};

export { Achievements };