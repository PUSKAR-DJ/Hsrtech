import React from 'react';
import './Login.css';

const Login = () => {
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
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email / Username</label>
              <input type="text" id="email" name="email" />
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
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;