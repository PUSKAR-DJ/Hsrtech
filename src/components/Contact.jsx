import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // Add state for form fields and feedback
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(''); // Clear previous messages
    setErrorMessage('');

    const token = localStorage.getItem('authToken'); // Get the stored token

    try {
      const response = await fetch('http://localhost:4500/api/contact', { // Your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // **IMPORTANT:** Send the token for protected routes
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setStatusMessage('Message sent successfully!');

    } catch (err) {
      console.error('Contact form error:', err);
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header">
        <h1 className="contact-title">Get In Touch With HSR Tech Solutions</h1>
        <p className="contact-subtitle">
          Have a question or want to discuss your next big idea? We'd love to hear from you.
        </p>
      </section>

      {/* Main Content Area (Grid) */}
      <section className="contact-main">
        <div className="contact-grid">
          {/* Column 1: Contact Information */}
          <div className="contact-info-card">
            <h2 className="info-title">Contact Information</h2>

            <div className="info-item">
              <span className="info-icon">[Icon]</span>
              <div>
                <strong>OFFICE ADDRESS:</strong>
                <p>HSR Tech Solutions Pvt. Ltd, Kharagpur, India</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">[Icon]</span>
              <div>
                <strong>PHONE:</strong>
                <p>+91 9xxxxxxxxxx</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">[Icon]</span>
              <div>
                <strong>EMAIL:</strong>
                <p>contact@hsrtechsolutions.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">[Icon]</span>
              <div>
                <strong>FOLLOW US:</strong>
                <p>LinkedIn | X (Twitter) | Instagram | Facebook</p>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="contact-form-card">
            {/* Display status/error messages */}
            {statusMessage && <p className="contact-status success">{statusMessage}</p>}
            {errorMessage && <p className="contact-status error">{errorMessage}</p>}
            {/* Update form to use state and handleSubmit */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">NAME</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">SUBJECT</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">MESSAGE</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="map-section">
        <div className="map-placeholder">
          [Map Placeholder: HSR Tech Solutions HQ]
        </div>
      </section>

      {/* Footer CTA */}
      <section className="contact-cta">
        <h2>Ready to Transform Your Business?</h2>
        <button className="btn btn-primary">Talk to Our Experts</button>
      </section>
    </div>
  );
};

export default Contact;