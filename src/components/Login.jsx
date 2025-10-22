import React, { useState } from 'react';import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    
    console.log('Logging in with:', email, password);

    login(); 
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Info Panel */}
        <div className="login-info">
          <h1 className="info-title">HSR Tech Solutions</h1>
          <p className="info-subtitle">
            Innovating Intelligence. Empowering the Future.
          </p>
          <div className="info-graphic-placeholder">
            [Tech Brain Graphic]
          </div>
          <p className="info-welcome">
            Welcome back! Access your workspace and
            continue shaping innovation.
          </p>
        </div>

        {/* Right Form Panel */}
        <div className="login-form-container">
          <h2 className="form-title">Login to Your Account</h2>

          {/* Change <form> to use our submit handler */}
          <form className="login-form" onSubmit={handleLogin}>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email / Username</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* NEW: Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="btn btn-primary login-btn">
              LOGIN
            </button>
            <div className="form-divider">
              <span>or</span>
            </div>
            <div className="social-logins">
              <button type="button" className="btn btn-social">
                Login with Google
              </button>
              <button type="button" className="btn btn-social">
                Login with LinkedIn
              </button>
            </div>
            <p className="signup-link">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;