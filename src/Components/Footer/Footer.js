import React from 'react';
import { useSelector } from 'react-redux';





const Footer = () => {
    const user = useSelector((state) => state.user);
    return (
        <div>
            {!user.name ? (<footer className="footer-container">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} GitHub Explorer. All rights reserved.</p>
                    <p>Developed by Amey Pankanti</p>
                </div>
            </footer>) : (" ")}
        </div>
    );
};

export default Footer;
