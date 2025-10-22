import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; // We'll create this next

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // In a real app, you'd send { email, password } to your backend
    console.log('Signing up with:', email, password);
  };

  return (
    // We reuse the styles from Login.css for the page and container
    <div className="login-page"> 
      <div className="login-container signup-container"> {/* Re-using login-container */}
        
        {/* Sign Up Form */}
        <div className="login-form-container"> {/* Re-using login-form-container */}
          <h2 className="form-title">Create Your Account</h2>
          <form className="login-form" onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
              />
            </div>
            
            <button type="submit" className="btn btn-primary login-btn">
              CREATE ACCOUNT
            </button>
            
            <p className="signup-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>

        {/* Info Panel (re-using login-info) */}
        <div className="login-info">
          <h1 className="info-title">HSR Tech Solutions</h1>
          <p className="info-subtitle">
            Innovating Intelligence. Empowering the Future.
          </p>
          <div className="info-graphic-placeholder">
            [Tech Brain Graphic]
          </div>
          <p className="info-welcome">
            Join us and be a part of the future of technology.
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignUp;