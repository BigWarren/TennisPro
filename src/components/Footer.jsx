import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🎾</span>
              <span className="logo-text">TennisPro</span>
            </div>
            <p className="footer-description">
              Professional tennis coaching for players of all levels. 
              Let's elevate your game together.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="YouTube">📺</a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('home')} className="footer-link">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="footer-link">About</button></li>
              <li><button onClick={() => scrollToSection('services')} className="footer-link">Services</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="footer-link">Testimonials</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Private Lessons</a></li>
              <li><a href="#" className="footer-link">Group Sessions</a></li>
              <li><a href="#" className="footer-link">Tournament Prep</a></li>
              <li><a href="#" className="footer-link">Junior Development</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-contact">
              <li>📧 coach@tennispro.com</li>
              <li>📱 (555) 123-4567</li>
              <li>📍 Los Angeles, CA</li>
              <li>⏰ Mon-Sun: 6AM - 8PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} TennisPro. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
