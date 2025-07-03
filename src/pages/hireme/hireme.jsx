import React from 'react';
import './hireme.css';
import { NavbarPages } from '../../components/navbar/navbarPages';

const HireMe = ({ onNavClick, ready }) => {
    return (
        <div className={`hireme-page-wrapper ${ready ? 'visible' : 'hidden'}`}>
            <NavbarPages onNavClick={onNavClick} />
            <div className="hireme-container">
                <h2 className="hireme-title">Hire Me</h2>
                <form className="hireme-form">
                    <div className="form-row">
                        <input type="text" placeholder="First Name" name="firstName" required />
                        <input type="text" placeholder="Last Name" name="lastName" required />
                    </div>
                    <div className="form-row">
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="tel" placeholder="Phone Number" name="phone" required />
                    </div>
                    <div className="form-message">
                        <textarea placeholder="Write your message here..." name="message" rows="6" required></textarea>
                    </div>
                    <button type="submit" className="send-message-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export { HireMe };