import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <div className="image-placeholder">
            <span className="placeholder-icon">🎾</span>
          </div>
          <div className="about-badge">
            <span className="badge-icon">🏆</span>
            <div>
              <div className="badge-title">Certified Pro</div>
              <div className="badge-subtitle">USPTA & PTR</div>
            </div>
          </div>
        </div>
        
        <div className="about-content">
          <h2 className="section-title">
            About <span className="highlight">Your Coach</span>
          </h2>
          <p className="about-text">
            With over 15 years of professional tennis coaching experience, I've helped hundreds of players 
            reach their full potential - from beginners taking their first swing to competitive players 
            climbing the rankings.
          </p>
          <p className="about-text">
            My coaching philosophy combines technical excellence, strategic thinking, and mental toughness. 
            I believe every player has unique strengths, and my job is to help you discover and maximize them.
          </p>
          
          <div className="credentials">
            <div className="credential-item">
              <span className="credential-icon">✓</span>
              <span>USPTA Certified Professional</span>
            </div>
            <div className="credential-item">
              <span className="credential-icon">✓</span>
              <span>PTR Certified Tennis Coach</span>
            </div>
            <div className="credential-item">
              <span className="credential-icon">✓</span>
              <span>Former Division I College Player</span>
            </div>
            <div className="credential-item">
              <span className="credential-icon">✓</span>
              <span>Sports Psychology Certification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
