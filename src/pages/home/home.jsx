import React, { useEffect, useState } from 'react';
import { info } from '../../pages/home/home.js';
import './home.css';
import image from '../../assets/images/me.png';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

// Typing Animation component (unchanged)
const TypingAnimation = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        let typer = setTimeout(() => {
            handleTyping();
        }, typingSpeed);

        return () => clearTimeout(typer);
    }, [displayedText, isDeleting, loopNum, typingSpeed]); // Added typingSpeed to dependency array

    const handleTyping = () => {
        const i = loopNum % text.length;
        const fullText = text[i];

        setDisplayedText(
            isDeleting
                ? fullText.substring(0, displayedText.length - 1)
                : fullText.substring(0, displayedText.length + 1)
        );

        setTypingSpeed(isDeleting ? 50 : 150); // Faster delete, slower type

        if (!isDeleting && displayedText === fullText) {
            setTimeout(() => setIsDeleting(true), 1000); // Pause at end of typing
        } else if (isDeleting && displayedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    };

    return (
        <span className="typing-text">{displayedText}
            <span className="cursor"></span>
        </span>
    );
};

// New StatItem component for count-up animation
const StatItem = ({ label, targetNumber, delay = 0 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; // 2 seconds for animation
        const increment = targetNumber / (duration / 50); // Calculate increment based on duration and interval

        if (targetNumber === 0) { // Handle 0 case immediately
            setCount(0);
            return;
        }

        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                start += increment;
                if (start < targetNumber) {
                    setCount(Math.ceil(start)); // Round up to ensure it reaches target
                } else {
                    setCount(targetNumber);
                    clearInterval(interval);
                }
            }, 50); // Update every 50ms
        }, delay); // Start animation after a delay

        return () => {
            clearTimeout(timer);
        };
    }, [targetNumber, delay]);

    return (
        <div className="stat-item">
            <span className="stat-number">{count}</span>
            <span className="stat-label">{label}</span>
        </div>
    );
};


const Home = () => {
    const nameTexts = [info.name.full];

    return (
        <div className="home-wrapper">
            <div className="home-container">
                <div className="image-section">
                    <img src={image} alt="Kushal Sathyanarayan" className="profile-image" />
                </div>
                <div className="description-section">
                    <p className="greeting">Hello, I am</p>
                    <h1 className="name">
                        <TypingAnimation text={nameTexts} />
                    </h1>
                    <p className="attribute">{info.description.attribute}</p>
                    <p className="major">{info.description.major} <span className="tag">major</span> </p>
                    <p className="minor">{info.description.minor} <span className="tag">minor</span> </p>
                    <p className="find-me">Find Me on</p>
                    <div className="social-links">
                        {info.social.github && <a href={info.social.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                        {info.social.linkedin && <a href={info.social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
                        {info.social.instagram && <a href={info.social.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
                    </div>
                
                    <div className="stats-container">
                        <StatItem label="Projects" targetNumber={info.stats.projectsCompleted} delay={0} />
                        <StatItem label="Working On" targetNumber={info.stats.workingProjects} delay={200} />
                        <StatItem label="Skills" targetNumber={info.stats.skills} delay={400} />
                        <StatItem label="Certifications" targetNumber={info.stats.certifications} delay={600} />
                        <StatItem label="Experience" targetNumber={info.stats.experience} delay={800} />
                        <StatItem label="Commits" targetNumber={info.stats.codeCommits} delay={1000} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Home };