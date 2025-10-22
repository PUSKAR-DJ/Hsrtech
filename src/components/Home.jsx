import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-title">HSR Technology</h1>
        <h2 className="home-subtitle">AI & Cover Design</h2>
        <p className="home-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="home-button">GET STARTED</button>
      </div>
    </div>
  );
};

export default Home;