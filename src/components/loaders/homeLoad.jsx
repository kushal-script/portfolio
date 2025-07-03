import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './homeLoad.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaJava, FaJs } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';

const iconSet = [
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaGitAlt,
    FaJava,
    FaJs,
    SiMongodb,
    SiMysql
];

const NUM_STRIPS = 10;

const maxStripEnterDuration = (NUM_STRIPS - 1) * 0.06 + 0.4;
const maxStripExitDuration = (NUM_STRIPS - 1) * 0.03 + 0.4;

const getStaggeredVariants = (index) => ({
    initial: { y: '-100%' },
    animate: {
        y: '0%',
        transition: {
            duration: 0.4,
            delay: index * 0.06,
            ease: 'easeOut',
        },
    },
    exit: {
        y: '-100%',
        transition: {
            duration: 0.4,
            delay: index * 0.03,
            ease: 'easeIn',
        },
    },
});

const HomeReturnLoad = ({ onComplete, onHalfComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const pauseBeforeExit = 0.2;
        const timeToTriggerStripExit = maxStripEnterDuration + pauseBeforeExit;
        const timeToRenderHomePage = maxStripEnterDuration + 0.1;
        const totalAnimationDuration = timeToTriggerStripExit + maxStripExitDuration + 0.1 + 0.3;

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

    const [stripIcons] = useState(() => {
        const shuffled = [...iconSet].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, NUM_STRIPS);
    });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="home-return-loader"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.3, delay: maxStripExitDuration } }}
                >
                    {stripIcons.map((Icon, i) => (
                        <motion.div
                            key={i}
                            className="vertical-strip"
                            variants={getStaggeredVariants(i)}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <div className="strip-icon-wrapper">
                                <Icon className="strip-icon" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export { HomeReturnLoad };