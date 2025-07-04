import React, { useState } from 'react';
import './hireme.css';
import { NavbarPages } from '../../components/navbar/navbarPages';

const HireMe = ({ onNavClick, ready }) => {
    const [forData, setForData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', forData);
        setForData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <div className={`hireme-page-wrapper ${ready ? 'visible' : 'hidden'}`}>
            <NavbarPages onNavClick={onNavClick} />
            <div className="hireme-container">
                <h2 className="hireme-title">Hire Me</h2>
                <form className="hireme-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <input type="text" placeholder="First Name" name="firstName" value={forData.firstName} onChange={handleInputChange} required />
                        <input type="text" placeholder="Last Name" name="lastName" value={forData.lastName} onChange={handleInputChange} required />
                    </div>
                    <div className="form-row">
                        <input type="email" placeholder="Email" name="email" value={forData.email} onChange={handleInputChange} required />
                        <input type="tel" placeholder="Phone Number" name="phone" value={forData.phone} onChange={handleInputChange} required />
                    </div>
                    <div className="form-message">
                        <textarea placeholder="Write your message here..." name="message" rows="6" value={forData.message} onChange={handleInputChange} required></textarea>
                    </div>
                    <button type="submit" className="send-message-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export { HireMe };