import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
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
        <Link to="/" className="nav-logo">
          <img src={logoImage} alt="HSR Technology Logo" className="navbar-logo" />
          <h2>HSR Technology</h2>
        </Link>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/products" className="nav-link">Product</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          
          <div className="login-container">
            <Link to="/login" className="login-button-link">
              <button className="login-button">
                <span>LOGIN</span>
                <svg className="power-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M13 3h-2v10.59l-4.35-4.35-1.41 1.41 6 6 6-6-1.41-1.41L13 13.59V3z"/>
                </svg>
              </button>
            </Link>
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