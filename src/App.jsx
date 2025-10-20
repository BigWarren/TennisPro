import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';

// Lazy load components that are below the fold
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '200px',
    color: '#00A86B'
  }}>
    <div style={{ 
      fontSize: '2rem',
      animation: 'spin 1s linear infinite'
    }}>🎾</div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
