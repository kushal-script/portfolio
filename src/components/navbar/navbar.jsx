import React, { useState, useEffect, useCallback } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { info } from '../../pages/home/home.js';

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaJava, FaJs } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';

const navBackgroundIcons = [
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
    FaPython, FaGitAlt, FaJava, FaJs,
    SiMongodb, SiMysql
];

const ICONS_PER_500_SQUARE_PX_NAV = 50; 

const Navbar = ({ onNavClick }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1001);
    const [navbarIconPositions, setNavbarIconPositions] = useState([]);

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth < 1001);
        if (window.innerWidth >= 1001 && isSidebarOpen) {
            setIsSidebarOpen(false);
        }
    }, [isSidebarOpen]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    const updateNavbarIconPositions = useCallback(() => {
        const currentIsMobile = window.innerWidth < 1001;

        let targetElement = null;
        if (currentIsMobile) { 
            targetElement = document.querySelector('.mobile-navbar-container');
        } else { 
            if (window.location.pathname !== '/' && document.querySelector('.navbarPages')) {
                targetElement = document.querySelector('.navbarPages');
            } else {
                targetElement = document.querySelector('.navbar');
            }
        }

        if (!targetElement) {
            console.warn("Navbar target element not found for icon generation. Retrying...");
            setTimeout(updateNavbarIconPositions, 500);
            return;
        }

        const { offsetWidth: width, offsetHeight: height } = targetElement;
        const area = width * height;
        const iconCount = Math.floor((area / (500 * 500)) * ICONS_PER_500_SQUARE_PX_NAV);

        const positions = Array.from({ length: iconCount }, () => ({
            Icon: navBackgroundIcons[Math.floor(Math.random() * navBackgroundIcons.length)],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            rotate: `${Math.random() * 360}deg`,
            delay: `${Math.random() * 5}s`,
            size: `${0.6 + Math.random() * 0.9}rem`,
            alpha: (0.08 + Math.random() * 0.15).toFixed(2), 
        }));

        setNavbarIconPositions(positions);
    }, []);

    useEffect(() => {
        updateNavbarIconPositions();
        window.addEventListener('resize', updateNavbarIconPositions);
        return () => {
            window.removeEventListener('resize', updateNavbarIconPositions);
        };
    }, [updateNavbarIconPositions]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNavButtonClick = (section) => {
        onNavClick(section);
        if (isMobile) {
            setIsSidebarOpen(false);
        }
    };

    const navLinksContent = (
        <>
            <li><button onClick={() => handleNavButtonClick('achievements')}>Achievements</button></li>
            <li><button onClick={() => handleNavButtonClick('projects')}>Projects</button></li>
            <li><button onClick={() => handleNavButtonClick('experience')}>Experience</button></li>
            <li><button onClick={() => handleNavButtonClick('skills')}>Skills</button></li>
            <li><button className="hireme-btn" onClick={() => handleNavButtonClick('hireme')}>Hire Me</button></li>
        </>
    );

    const NavbarBackgroundIcons = () => (
        <div className="random-icons-container navbar-icons-container">
            {navbarIconPositions.map(({ Icon, top, left, rotate, delay, size, alpha }, i) => {
                const color = `rgba(255, 255, 255, ${alpha})`;
                return (
                    <Icon
                        key={i}
                        className="random-bg-icon"
                        style={{
                            position: 'absolute',
                            top,
                            left,
                            transform: `rotate(${rotate})`,
                            fontSize: size,
                            color,
                            animationDelay: delay,
                            animationDuration: '7s',
                        }}
                    />
                );
            })}
        </div>
    );

    return (
        <>
            {isMobile ? (
                <div className="mobile-navbar-container">
                    <NavbarBackgroundIcons />
                    <button className="navbar-name" onClick={() => handleNavButtonClick('home')}>
                        {info.name.full}
                    </button>
                    <button className="hamburger-menu" onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                        <button className="close-sidebar" onClick={toggleSidebar}>
                            <FaTimes />
                        </button>
                        <ul className="sidebar-links">
                            {navLinksContent}
                        </ul>
                    </div>
                    {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
                </div>
            ) : (
                <nav className="navbar">
                    <NavbarBackgroundIcons />
                    <div className="navbar-content">
                        <button className="navbar-name" onClick={() => handleNavButtonClick('home')}>
                            {info.name.full}
                        </button>
                        <ul className="nav-links">
                            {navLinksContent}
                        </ul>
                    </div>
                </nav>
            )}
        </>
    );
};

export { Navbar };