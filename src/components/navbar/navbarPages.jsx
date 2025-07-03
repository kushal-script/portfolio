import React from 'react';
import './navbar.css';

const NavbarPages = ({ onNavClick }) => {
    return (
        <nav className="navbarPages">
            <div className="navbar-content">
                <button onClick={() => onNavClick('home')} className="navbar-name">
                    Kushal Sathyanarayan
                </button>
                <ul className="nav-links-pages">
                    <li><button onClick={() => onNavClick('achievements')}>Achievements</button></li>
                    <li><button onClick={() => onNavClick('projects')}>Projects</button></li>
                    <li><button onClick={() => onNavClick('experience')}>Experience</button></li>
                    <li><button onClick={() => onNavClick('skills')}>Skills</button></li>
                    <li><button className="hireme-btn" onClick={() => onNavClick('hireme')}>Hire Me</button></li>
                </ul>
            </div>
        </nav>
    );
};

export { NavbarPages };