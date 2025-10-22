import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">
            We are a technology company specializing in delivering
            innovative AI solutions and software development services.
          </p>
          <div className="about-buttons">
            <button className="btn btn-primary">Learn More</button>
            <button className="btn btn-secondary">Our Team</button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="story-section">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="story-content">
          <h2>Our Vision</h2>
          <p>
            Lorem ipsum nunmar: minie, dotor acrin ventira renoctum
            facilisis ther romtan to diunem selemt at aute eentenoemant
            compderee quuo mtioncuar acomma ormmos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;