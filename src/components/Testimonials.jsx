import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Club Player',
      image: '👩',
      rating: 5,
      text: 'The coaching I received completely transformed my game. In just 6 months, I went from a 3.5 to a 4.5 level player. The personalized attention and strategic insights were invaluable.'
    },
    {
      name: 'Michael Chen',
      role: 'Junior Player',
      image: '👦',
      rating: 5,
      text: 'As a junior player preparing for college tennis, this coaching helped me secure a Division II scholarship. The mental game coaching was especially helpful during tournaments.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Beginner',
      image: '👩',
      rating: 5,
      text: 'I started as a complete beginner and was nervous about taking lessons. The coach made me feel comfortable from day one, and now I play in my local league!'
    },
    {
      name: 'David Thompson',
      role: 'Tournament Player',
      image: '👨',
      rating: 5,
      text: 'The tournament prep sessions gave me the edge I needed. I won my first regional championship after working on match strategies and mental toughness.'
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">
          What <span className="highlight">Students Say</span>
        </h2>
        <p className="section-subtitle">
          Real results from real players
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-image">{testimonial.image}</div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
