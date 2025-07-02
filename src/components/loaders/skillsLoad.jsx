import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './loader.css';
import icon1 from '../../assets/icons/skills/skills1.png';
import icon2 from '../../assets/icons/skills/skills2.png';
import icon3 from '../../assets/icons/skills/skills3.png';
import icon4 from '../../assets/icons/skills/skills4.png';

const icons = [icon1, icon2, icon3, icon4];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,  
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05, 
      staggerDirection: -1,  
      when: 'afterChildren', 
    },
  },
};

const rowVariants = {
  hidden: { x: '100%', opacity: 0 }, 
  visible: { x: '0%', opacity: 0.05, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  exit: { x: '-100%', opacity: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }, 
};

const SkillsLoad = ({ onComplete }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2500); 
    const completeTimer = setTimeout(() => {
      onComplete && onComplete(); 
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="page-loader-wrapper"
          variants={containerVariants} 
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="icons-background">
            {[...Array(5)].map((_, row) => (
              <motion.div
                key={row}
                className={`icon-row ${row % 2 === 0 ? 'left' : 'right'}`}
                variants={rowVariants} 
              >
                {icons.map((iconSrc, idx) => (
                  <img key={idx} src={iconSrc} alt={`icon-${idx}`} className="loader-icon" />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { SkillsLoad };