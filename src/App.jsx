import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home } from './pages/home/home.jsx';
import { Achievements } from './pages/achievements/achievements.jsx';
import { AchievementLoad } from './components/loaders/achievementLoad.jsx';
import { Projects } from './pages/projects/projects.jsx';
import { ProjectsLoad } from './components/loaders/projectLoad.jsx';
import { Experience } from './pages/experience/experience.jsx';
import { ExperienceLoad } from './components/loaders/experienceLoad.jsx';
import { Skills } from './pages/skills/skills.jsx';
import { SkillsLoad } from './components/loaders/skillsLoad.jsx';
import { HomeReturnLoad } from './components/loaders/homeLoad.jsx';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoader, setShowLoader] = useState(false);
  const [achievementsReady, setAchievementsReady] = useState(false);
  const [projectsReady, setProjectsReady] = useState(false);
  const [experienceReady, setExperienceReady] = useState(false);
  const [skillReady, setSkillReady] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [showHomeReturnLoader, setShowHomeReturnLoader] = useState(false);
  const [isInitialHomeLoad, setIsInitialHomeLoad] = useState(true); 

  const handleNavClick = (page) => {
    if (['achievements', 'projects', 'experience', 'skills'].includes(page)) {
      if (currentPage === page) return; 
      setIsOverlayActive(true); 
      setIsInitialHomeLoad(false); 
      
      setTimeout(() => {
        setCurrentPage(page);
        setShowLoader(true);
        setAchievementsReady(false);
        setProjectsReady(false);
        setExperienceReady(false);
        setSkillReady(false);
      }, 300);
    } 
    else if (page === 'home') {
      if (currentPage === 'home') return; 
      setIsOverlayActive(true); 
      setShowHomeReturnLoader(true); 
      setIsInitialHomeLoad(false);
    }
  };

  const handleLoaderComplete = () => {
    setShowLoader(false);
    if (currentPage === 'achievements') setAchievementsReady(true);
    if (currentPage === 'projects') setProjectsReady(true);
    if (currentPage === 'experience') setExperienceReady(true);
    if (currentPage === 'skills') setSkillReady(true);
    setIsOverlayActive(false); 
  };

  const handleHomeReturnLoaderComplete = () => {
    setShowHomeReturnLoader(false); 
    setCurrentPage('home');         
    setIsOverlayActive(false);      
  };

  return (
    <div className="app-root">
      <motion.div
        className="page-dim-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOverlayActive ? 0.6 : 0 }} 
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isOverlayActive ? 'all' : 'none' }}
      />
      {currentPage === 'home' && (
        <Home onNavClick={handleNavClick} isInitialLoad={isInitialHomeLoad} />
      )}
      {currentPage === 'achievements' && (
        <Achievements onNavClick={handleNavClick} ready={achievementsReady} />
      )}
      {currentPage === 'projects' && (
        <Projects onNavClick={handleNavClick} ready={projectsReady} />
      )}
      {currentPage === 'experience' && (
        <Experience onNavClick={handleNavClick} ready={experienceReady} />
      )}
      {currentPage === 'skills' && (
        <Skills onNavClick={handleNavClick} ready={skillReady} />
      )}

      {showLoader && currentPage !== 'home' && ( 
        <>
          {currentPage === 'achievements' && <AchievementLoad onComplete={handleLoaderComplete} />}
          {currentPage === 'projects' && <ProjectsLoad onComplete={handleLoaderComplete} />}
          {currentPage === 'experience' && <ExperienceLoad onComplete={handleLoaderComplete} />}
          {currentPage === 'skills' && <SkillsLoad onComplete={handleLoaderComplete} />}
        </>
      )}

      {showHomeReturnLoader && <HomeReturnLoad onComplete={handleHomeReturnLoaderComplete} />}
    </div>
  );
}

export default App;