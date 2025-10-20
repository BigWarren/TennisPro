import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Elevate Your Game with
          <span className="highlight"> Professional Tennis Coaching</span>
        </h1>
        <p className="hero-subtitle">
          Master your technique, strategy, and mental game with personalized coaching from certified tennis professionals
        </p>
        <div className="hero-buttons">
          <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
            Book a Session
          </button>
          <button onClick={() => scrollToSection('services')} className="btn btn-secondary">
            View Programs
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Students Trained</div>
          </div>
          <div className="stat">
            <div className="stat-number">98%</div>
            <div className="stat-label">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
