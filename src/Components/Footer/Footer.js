import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} GitHub Explorer. All rights reserved.</p>
                <p>Developed by Amey Pankanti</p>
            </div>
        </footer>
    );
};

export default Footer;
