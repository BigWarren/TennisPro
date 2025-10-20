import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      icon: '👤',
      title: 'Private Lessons',
      price: '$80/hour',
      features: [
        'One-on-one personalized coaching',
        'Customized training plan',
        'Video analysis included',
        'Flexible scheduling',
        'All skill levels welcome'
      ]
    },
    {
      icon: '👥',
      title: 'Group Sessions',
      price: '$40/hour',
      features: [
        'Small groups (max 4 players)',
        'Similar skill level matching',
        'Competitive drills',
        'Match play practice',
        'Social learning environment'
      ],
      popular: true
    },
    {
      icon: '🏆',
      title: 'Tournament Prep',
      price: '$100/hour',
      features: [
        'Match strategy development',
        'Mental game coaching',
        'On-court tournament simulation',
        'Pre-match warmup routines',
        'Performance analysis'
      ]
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Junior Development',
      price: '$60/hour',
      features: [
        'Age-appropriate training',
        'Fundamental skill building',
        'Fun and engaging drills',
        'Character development',
        'Parent progress reports'
      ]
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="section-title">
          Coaching <span className="highlight">Programs</span>
        </h2>
        <p className="section-subtitle">
          Choose the program that fits your goals and schedule
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.popular ? 'popular' : ''}`}>
              {service.popular && <div className="popular-badge">Most Popular</div>}
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-price">{service.price}</div>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-service">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
