import React, { useState } from 'react';
import { AchievementCard, CompetitionCard } from '../../components/cards/achieveCards.jsx';
import { competitionsInfo, certificationsInfo } from './achievements.js';
import { Navbar } from '../../components/navbar/navbar.jsx';
import './achievements.css';

const Achievements = ({ onNavClick, ready }) => {
    const [activeTab, setActiveTab] = useState('competitions');

    return (
        <div className={`achievements-page-wrapper ${ready ? 'visible' : 'hidden'}`}>
            <Navbar onNavClick={onNavClick} />
            <div className="achievements-container">

                <div className="button-container">
                    <button
                        className={activeTab === 'competitions' ? 'active' : ''}
                        onClick={() => setActiveTab('competitions')}
                    >
                        Competitions
                    </button>
                    <button
                        className={activeTab === 'certifications' ? 'active' : ''}
                        onClick={() => setActiveTab('certifications')}
                    >
                        Certifications
                    </button>
                </div>
                
                <div className="cards-scroll-container">
                    {activeTab === 'competitions' && (
                        <div className="cards-container">
                            {competitionsInfo.achievements.map((item, index) => (
                                <CompetitionCard
                                    key={index}
                                    title={item.title}
                                    date={item.date}
                                    description={item.description}
                                    tags={item.tags}
                                    link={item.certificate}
                                />
                            ))}
                        </div>
                    )}
                    
                    {activeTab === 'certifications' && (
                        <div className="cards-container">
                            {certificationsInfo.achievements.map((item, index) => (
                                <AchievementCard
                                    key={index}
                                    title={item.title}
                                    date={item.date}
                                    description={item.description}
                                    tags={item.tags}
                                    certificate={item.certificate}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export { Achievements };