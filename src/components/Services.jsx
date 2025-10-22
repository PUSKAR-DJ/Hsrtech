import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <h1 className="services-title">Services</h1>
        <p className="services-subtitle">
          Empowering businesses with innovative technology solutions
        </p>
      </section>

      {/* Services Grid Section */}
      <section className="services-grid-section">
        <div className="services-grid">
          {/* Service Card 1 */}
          <div className="service-card">
            <div className="service-icon">[Icon]</div>
            <h3>AI & Machine Learning Solutions</h3>
            <p>Custom AI models, predictive analytics, and automation systems.</p>
          </div>

          {/* Service Card 2 */}
          <div className="service-card">
            <div className="service-icon">[Icon]</div>
            <h3>Software Development</h3>
            <p>Full-stack web, mobile, and enterprise software.</p>
          </div>

          {/* Service Card 3 */}
          <div className="service-card">
            <div className="service-icon">[Icon]</div>
            <h3>BPO & Consulting Services</h3>
            <p>Business process outsourcing, project consulting, and IT strategy.</p>
          </div>

          {/* Service Card 4 */}
          <div className="service-card">
            <div className="service-icon">[Icon]</div>
            <h3>Cloud & Infrastructure Solutions</h3>
            <p>Cloud migration, DevOps, and managed hosting.</p>
          </div>

          {/* Service Card 5 */}
          <div className="service-card">
            <div className="service-icon">[Icon]</div>
            <h3>Cybersecurity & Data Protection</h3>
            <p>Security audits, threat prevention, and compliance solutions.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <h2 className="cta-title">Let's Build the Future Together</h2>
        <button className="btn btn-primary">Contact Us</button>
      </section>
    </div>
  );
};

export default Services;