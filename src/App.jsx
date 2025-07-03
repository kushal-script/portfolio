import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Home } from './pages/home/home.jsx';
import { Achievements } from './pages/achievements/achievements.jsx';
import { Projects } from './pages/projects/projects.jsx';
import { Experience } from './pages/experience/experience.jsx';
import { Skills } from './pages/skills/skills.jsx';
import { AchievementLoad } from './components/loaders/achievementLoad.jsx';
import { ProjectsLoad } from './components/loaders/projectLoad.jsx';
import { ExperienceLoad } from './components/loaders/experienceLoad.jsx';
import { SkillsLoad } from './components/loaders/skillsLoad.jsx';
import { HomeReturnLoad } from './components/loaders/homeLoad.jsx';
import { HireMe } from './pages/hireme/hireme.jsx';
import { HireMeLoad } from './components/loaders/hiremeLoad.jsx';
import './App.css';

const pageTransitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoader, setShowLoader] = useState(false);
  const [pageReady, setPageReady] = useState({
    achievements: false,
    projects: false,
    experience: false,
    skills: false,
    hireme: false,
  });
  const [showHomeReturnLoader, setShowHomeReturnLoader] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [homeShouldRender, setHomeShouldRender] = useState(true);
  const [initialLoadDone, setInitialLoadDone] = useState(false);

  const handleNavClick = (page) => {
    if (page === currentPage) return;
    setIsOverlayActive(true);

    if (page === 'home') {
      setHomeShouldRender(false);
      setShowHomeReturnLoader(true);
    } else {
      setHomeShouldRender(false);
      setTimeout(() => {
        setCurrentPage(page);
        setShowLoader(true);
        setPageReady((prev) => ({ ...prev, [page]: false }));
      }, 300);
    }
  };

  const handleLoaderComplete = () => {
    setShowLoader(false);
    setPageReady((prev) => ({ ...prev, [currentPage]: true }));
    setIsOverlayActive(false);
  };

  const handleHomeReturnHalf = () => {
    setInitialLoadDone(true);
    setCurrentPage('home');
    setHomeShouldRender(true);
  };

  const handleHomeReturnComplete = () => {
    setShowHomeReturnLoader(false);
    setIsOverlayActive(false);
    setInitialLoadDone(true);
  };

  return (
    <div className="app-root">
      <AnimatePresence mode="wait">
        {currentPage === 'home' && homeShouldRender && (
          <motion.div
            key="home"
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <Home onNavClick={handleNavClick} isInitialLoad={!initialLoadDone} />
          </motion.div>
        )}

        {currentPage === 'achievements' && (
          <motion.div
            key="achievements"
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <Achievements onNavClick={handleNavClick} ready={pageReady.achievements} />
          </motion.div>
        )}

        {currentPage === 'projects' && (
          <motion.div
            key="projects"
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <Projects onNavClick={handleNavClick} ready={pageReady.projects} />
          </motion.div>
        )}

        {currentPage === 'experience' && (
          <motion.div
            key="experience"
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <Experience onNavClick={handleNavClick} ready={pageReady.experience} />
          </motion.div>
        )}

        {currentPage === 'skills' && (
          <motion.div
            key="skills"
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <Skills onNavClick={handleNavClick} ready={pageReady.skills} />
          </motion.div>
        )}

        {currentPage === 'hireme' && (
          <motion.div
            key="hireme"
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <HireMe onNavClick={handleNavClick} ready={pageReady.hireme} />
          </motion.div>
        )}
      </AnimatePresence>

      {showLoader && (
        <>
          {currentPage === 'achievements' && <AchievementLoad onComplete={handleLoaderComplete} />}
          {currentPage === 'projects' && <ProjectsLoad onComplete={handleLoaderComplete} />}
          {currentPage === 'experience' && <ExperienceLoad onComplete={handleLoaderComplete} />}
          {currentPage === 'skills' && <SkillsLoad onComplete={handleLoaderComplete} />}
          {currentPage === 'hireme' && <HireMeLoad onComplete={handleLoaderComplete} />}
        </>
      )}

      {showHomeReturnLoader && (
        <HomeReturnLoad
          onHalfComplete={handleHomeReturnHalf}
          onComplete={handleHomeReturnComplete}
        />
      )}
    </div>
  );
}

export default App;