import React from 'react';
import './navbar.css';

const Navbar = ({ onNavClick }) => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><button onClick={() => onNavClick('achievements')}>Achievements</button></li>
                <li><button onClick={() => onNavClick('projects')}>Projects</button></li>
                <li><button onClick={() => onNavClick('experience')}>Experience</button></li>
                <li><button onClick={() => onNavClick('skills')}>Skills</button></li>
            </ul>
        </nav>
    );
};

export { Navbar };