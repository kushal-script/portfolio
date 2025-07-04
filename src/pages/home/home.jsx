import React, { useEffect, useState, useCallback } from 'react';
import { info } from '../../pages/home/home.js';
import './home.css';
import image from '../../assets/images/me.png';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Navbar } from '../../components/navbar/navbar.jsx';

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaJava, FaJs } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';

const introIcons = [
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
    FaPython, FaGitAlt, FaJava, FaJs,
    SiMongodb, SiMysql
];

const ICONS_PER_500_SQUARE_PX = 80;

const RandomIcons = () => {
    const [iconPositions, setIconPositions] = useState([]);

    useEffect(() => {
        const updateIconPositions = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const area = width * height;
            const iconCount = Math.floor((area / (500 * 500)) * ICONS_PER_500_SQUARE_PX);

            const positions = Array.from({ length: iconCount }, () => ({
                Icon: introIcons[Math.floor(Math.random() * introIcons.length)],
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                rotate: `${Math.random() * 360}deg`,
                delay: `${Math.random() * 2}s`,
            }));

            setIconPositions(positions);
        };

        updateIconPositions();
        window.addEventListener('resize', updateIconPositions);

        return () => window.removeEventListener('resize', updateIconPositions);
    }, []);

    return (
        <>
            {iconPositions.map(({ Icon, top, left, rotate, delay }, i) => {
                const brightness = Math.random(); 
                const alpha = 0.1 + brightness * 0.3; 
                const color = `rgba(255, 255, 255, ${alpha.toFixed(2)})`;

                return (
                    <Icon
                        key={i}
                        className="intro-bg-icon"
                        style={{
                            position: 'absolute',
                            top,
                            left,
                            transform: `rotate(${rotate})`,
                            fontSize: '1.5rem',
                            color,
                            animationDelay: delay,
                        }}
                    />
                );
            })}
        </>
    );
};

const TypingAnimation = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(120);
    const [isTypingFinished, setIsTypingFinished] = useState(false);

    useEffect(() => {
        let typer;
        if (!isTypingFinished) {
            typer = setTimeout(() => {
                handleTyping();
            }, typingSpeed);
        }
        return () => clearTimeout(typer);
    }, [displayedText, isDeleting, loopNum, typingSpeed, isTypingFinished]);

    const handleTyping = useCallback(() => {
        const i = loopNum % text.length;
        const fullText = text[i];

        setDisplayedText(
            isDeleting
                ? fullText.substring(0, displayedText.length - 1)
                : fullText.substring(0, displayedText.length + 1)
        );

        setTypingSpeed(isDeleting ? 50 : 120);

        if (!isDeleting && displayedText === fullText) {
            if (loopNum === text.length - 1) {
                setTimeout(() => {
                    setIsTypingFinished(true);
                    if (onComplete) onComplete();
                }, 1000);
            } else {
                setTimeout(() => setIsDeleting(true), 1000);
            }
        } else if (isDeleting && displayedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    }, [displayedText, isDeleting, loopNum, text, typingSpeed, onComplete]);

    return (
        <span className="typing-text">{displayedText}
            <span className="cursor"></span>
        </span>
    );
};

const StatItem = ({ label, targetNumber, delay = 0, start = false }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) {
            setCount(0);
            return;
        }

        let startVal = 0;
        const duration = 2000;
        const increment = targetNumber / (duration / 50);

        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                startVal += increment;
                if (startVal < targetNumber) {
                    setCount(Math.ceil(startVal));
                } else {
                    setCount(targetNumber);
                    clearInterval(interval);
                }
            }, 50);
        }, delay);

        return () => clearTimeout(timer);
    }, [targetNumber, delay, start]);
    return (
        <div className="stat-item">
            <span className="stat-number">{count}</span>
            <span className="stat-label">{label}</span>
        </div>
    );
};
const IntroScreen = ({ onComplete }) => {
    const nameTexts = [info.name.full];
    return (
        <div className="intro-screen">
            <RandomIcons count={30} />
            <h1 className="intro-name">
                {<TypingAnimation text={nameTexts} onComplete={onComplete} />}
            </h1>
        </div>
    );
};
const Home = ({ onNavClick, isInitialLoad }) => {
    const [showIntro, setShowIntro] = useState(isInitialLoad);
    const [introMinimizing, setIntroMinimizing] = useState(false);
    const [introHidden, setIntroHidden] = useState(false);
    const [startStats, setStartStats] = useState(false);
    useEffect(() => {
        if (!isInitialLoad) {
            setShowIntro(false);
            setIntroHidden(true);
            setStartStats(true);
        }
    }, [isInitialLoad]);

    const handleIntroComplete = useCallback(() => {
        setIntroMinimizing(true);
        setTimeout(() => {
            setShowIntro(false);
            setIntroHidden(true);
            setStartStats(true);
        }, 1500);
    }, []);

    return (
        <div className="home-wrapper">
            <Navbar onNavClick={onNavClick} />

            {isInitialLoad && showIntro && (
                <div className={`intro-overlay ${introMinimizing ? 'shrink-right' : ''} ${introHidden ? 'hidden' : ''}`}>
                    <IntroScreen onComplete={handleIntroComplete} />
                </div>
            )}

            <div className="home-container">
                <div className="image-section">
                    <div className="image-border-wrapper">
                        <img src={image} alt="Kushal Sathyanarayan" className="profile-image" />
                    </div>
                    <p className="about-me-text-image-section">
                        {info.description.about}
                    </p>
                </div>

                <div className="description-section">
                    <p className="greeting">Hello, I am</p>
                    <h1 className="name">{info.name.full}</h1>
                    <p className="attribute">{info.description.attribute}</p>
                    <p className="major">{info.description.major} <span className="tag">major</span> </p>
                    <p className="minor">{info.description.minor} <span className="tag">minor</span> </p>

                    <p className="find-me">Find Me on</p>
                    <div className="social-links">
                        {info.social.github && <a href={info.social.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                        {info.social.linkedin && <a href={info.social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
                        {info.social.instagram && <a href={info.social.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
                        {info.social.email && <a href={`mailto:${info.social.email}`} title="Email Me"><FaEnvelope /></a>}
                    </div>

                    <div className="stats-container">
                        <StatItem label="Completed Projects" targetNumber={info.stats.projectsCompleted} delay={0} start={startStats} />
                        <StatItem label="Projects Working On" targetNumber={info.stats.workingProjects} delay={200} start={startStats} />
                        <StatItem label="Proficient Technologies" targetNumber={info.stats.skills} delay={400} start={startStats} />
                        <StatItem label="Years of Experience" targetNumber={info.stats.yearsOfExperience} delay={600} start={startStats} />
                        <StatItem label="Experience" targetNumber={info.stats.experience} delay={800} start={startStats} />
                        <StatItem label="Code Commits" targetNumber={info.stats.codeCommits} delay={1000} start={startStats} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Home };