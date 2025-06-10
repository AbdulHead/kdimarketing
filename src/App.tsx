import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Results from './components/Results';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <Services />
      <Results />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;