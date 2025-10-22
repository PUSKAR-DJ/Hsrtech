import React from 'react';
import './Home.css';

// Using the existing background image as a placeholder for the hero globe
import heroImage from '../assets/bc.jpg'; 

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Engineering the Future with AI and Expertise</h1>
          <p className="hero-description">
            HSR Tech software's cutting-edge AI solutions, software
            development, and consulting services empower businesses to thrive.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Explore Our Solutions</button>
            <button className="btn btn-secondary">Request A Consultation</button>
          </div>
        </div>
        <div className="hero-image-container">
          {/* Placeholder for the new globe image. Using old bc.jpg for now. */}
          <img src={heroImage} alt="AI Globe" className="hero-image" />
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="services-overview">
        <div className="service-card">
          <div className="service-icon">[Icon]</div>
          <h3>AI Solutions</h3>
          <p>Discover innovative AI solutions to streamline business processes.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">[Icon]</div>
          <h3>Consulting</h3>
          <p>Providing expert strategies to harness technology for business growth.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">[Icon]</div>
          <h3>Trusted Experience</h3>
          <p>Delivering reliable and scalable solutions with proven expertise.</p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mission-section">
        <div className="mission-image-placeholder">
          {/* Placeholder for profile pic */}
        </div>
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            Empowering businesses with innovative, data-driven solutions and
            exceptional service to co-author their success stories.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2>What Clients Say</h2>
        <div className="testimonial-content">
          <div className="testimonial-image-placeholder">
            {/* Placeholder for profile pic */}
          </div>
          <p className="testimonial-quote">
            "Empowering businesses with innovathnet to athivlons-noossonal
            service to a co-author the extensions."
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <h2>How Seamless Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-icon">[Icon]</div>
            <p>Discover</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-icon">[Icon]</div>
            <p>Design</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-icon">[Icon]</div>
            <p>Implement</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-icon">[Icon]</div>
            <p>Support</p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles-section">
        <h2>Latest Insights & Articles</h2>
        <div className="articles-grid">
          <div className="article-card">
            <div className="article-image-placeholder"></div>
            <h3>The Promise AI Holds for the nature of</h3>
            <a href="#">Read More</a>
          </div>
          <div className="article-card">
            <div className="article-image-placeholder"></div>
            <h3>The Evolution of AI in Software Develop...</h3>
            <a href="#">Read More</a>
          </div>
          <div className="article-card">
            <div className="article-image-placeholder"></div>
            <h3>How AI is Transforming the Tech Industry</h3>
            <a href="#">Read More</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Business?</h2>
        <p>Get in touch with our experts for a free consultation.</p>
        <button className="btn btn-light">Explore Solutions</button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Solutions</h3>
            <ul>
              <li><a href="#">AI Services</a></li>
              <li><a href="#">Software Dev</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Soap Updated</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;