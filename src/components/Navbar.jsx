import React, { useState } from 'react';
import logoImage from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logoImage} alt="HSR Technology Logo" className="navbar-logo" />
          <h2>HSR Technology</h2>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#product" className="nav-link">Product</a>
          <a href="#career" className="nav-link">Career</a>
          <a href="#contact" className="nav-link">Contact Us</a>
          <div className="login-container">
            <div className="user-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <button className="login-button">
              <span>LOGIN</span>
              <svg className="power-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M13 3h-2v10.59l-4.35-4.35-1.41 1.41 6 6 6-6-1.41-1.41L13 13.59V3z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;