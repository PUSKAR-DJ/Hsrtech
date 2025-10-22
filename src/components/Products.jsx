import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <h1 className="products-title">Our Innovative Products</h1>
        <h2 className="products-subtitle">Powering Digital Transformation</h2>
        <p className="products-description">
          Discover intelligent tools designed to scale businesses globally.
        </p>
      </section>

      {/* Products Grid Section */}
      <section className="products-grid-section">
        <div className="products-grid">
          {/* Product Card 1 */}
          <div className="product-card">
            <div className="product-icon">[Icon]</div>
            <h3>VisionAI</h3>
            <p>AI powered business insights and automation system.</p>
          </div>

          {/* Product Card 2 */}
          <div className="product-card">
            <div className="product-icon">[Icon]</div>
            <h3>ChatX</h3>
            <p>Conversational AI and virtual assistant platform.</p>
          </div>

          {/* Product Card 3 */}
          <div className="product-card">
            <div className="product-icon">[Icon]</div>
            <h3>RenderCRM</h3>
            <p>Smart CRM built with predictive analytics.</p>
          </div>

          {/* Product Card 4 - Coming Soon */}
          <div className="product-card coming-soon">
            <div className="product-icon">[Icon]</div>
            <div className="coming-soon-badge">Coming Soon</div>
            <h3>FlowBPO</h3>
            <p>AI-driven BPO and customer process automation.</p>
          </div>
        </div>
      </section>

      {/* Footer CTA Bar */}
      <section className="products-cta-bar">
        <div className="cta-bar-content">
          <h3>Explore how our products can revolutionize your business</h3>
          <button className="btn btn-primary">Request a Demo</button>
        </div>
      </section>
    </div>
  );
};

export default Products;