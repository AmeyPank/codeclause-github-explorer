import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <nav className="navbar">
                <a href="/" className="logo">
                    GitHub Explorer
                </a>
                <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
