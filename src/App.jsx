import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home } from './pages/home/home.jsx';
import { Achievements } from './pages/achievements/achievements.jsx';
import { AchievementLoad } from './components/loaders/achievementLoad.jsx';
import './App.css'; 

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoader, setShowLoader] = useState(false);
  const [achievementsReady, setAchievementsReady] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const handleNavClick = (page) => {
    if (page === 'achievements') {
      setIsOverlayActive(true); 
  
      setTimeout(() => {
        setCurrentPage('achievements');
        setShowLoader(true);            
        setAchievementsReady(false);
      }, 300); 
    } else {
      setCurrentPage(page);
    }
  };

  const handleLoaderComplete = () => {
    setShowLoader(false);
    setAchievementsReady(true);     
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

      {currentPage === 'home' && <Home onNavClick={handleNavClick} />}
      {currentPage === 'achievements' && (
        <Achievements onNavClick={handleNavClick} ready={achievementsReady} />
      )}

      {showLoader && <AchievementLoad onComplete={handleLoaderComplete} />}
    </div>
  );
}

export default App;