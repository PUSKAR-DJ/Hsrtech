import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignUp.css';
import { useAuth } from '../context/AuthContext'; // Import useAuth

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth(); // Get login to potentially auto-login after signup
  const navigate = useNavigate();

  const handleSignUp = async (e) => { // Make async
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    try {
      // Send data to backend endpoint (defined in user.router.js)
      const response = await fetch('http://localhost:4500/api/user/register', { // Your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, confirmPassword }), // Send confirmPassword too
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Sign up failed');
      }

      // Store the token and update auth state
      localStorage.setItem('authToken', data.token);

      login(data.token); // Update isAuthenticated state
      navigate('/'); // Redirect to homepage

    } catch (err) {
      console.error('Sign up error:', err);
      setError(err.message);
    }
  };

  return (
    // We reuse the styles from Login.css for the page and container
    <div className="login-page">
      <div className="login-container signup-container"> {/* Re-using login-container */}

        {/* Sign Up Form */}
        <div className="login-form-container"> {/* Re-using login-form-container */}
          <h2 className="form-title">Create Your Account</h2>
          {error && <p className="login-error">{error}</p>} {/* Use login-error style */}
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