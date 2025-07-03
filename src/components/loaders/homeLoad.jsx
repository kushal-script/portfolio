import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './homeLoad.css';

const NUM_STRIPS = 10;

const getStaggeredVariants = (index) => ({
  initial: { y: '-100%' },
  animate: {
    y: '0%',
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: 'easeOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      duration: 0.6,
      delay: index * 0.05,
      ease: 'easeIn',
    },
  },
});

const HomeReturnLoad = ({ onComplete, onHalfComplete }) => { 
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const maxStripEnterDuration = (NUM_STRIPS - 1) * 0.1 + 0.6; 
    const maxStripExitDuration = (NUM_STRIPS - 1) * 0.05 + 0.6; 
    const pauseBeforeExit = 0.3; 
    const timeToTriggerStripExit = maxStripEnterDuration + pauseBeforeExit;
    const timeToRenderHomePage = maxStripEnterDuration + 0.1;
    const totalAnimationDuration =
      timeToTriggerStripExit +        
      maxStripExitDuration +         
      0.1 +                           
      0.5;                            
    const halfCompleteTimer = setTimeout(() => {
      onHalfComplete && onHalfComplete();
    }, timeToRenderHomePage * 1000);
    
    const exitTimer = setTimeout(() => {
      setIsVisible(false); 
    }, timeToTriggerStripExit * 1000); 

    const completionTimer = setTimeout(() => {
      onComplete && onComplete(); 
    }, totalAnimationDuration * 1000); 
    return () => {
      clearTimeout(halfCompleteTimer);
      clearTimeout(exitTimer);
      clearTimeout(completionTimer);
    };
  }, [onComplete, onHalfComplete]); 

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="home-return-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.1 } }} 
        >
          {[...Array(NUM_STRIPS)].map((_, i) => (
            <motion.div
              key={i}
              className="vertical-strip"
              variants={getStaggeredVariants(i)}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { HomeReturnLoad };