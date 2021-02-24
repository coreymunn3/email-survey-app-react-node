import React from 'react';
import Hero from './Hero';
import StickyNav from './StickyNav';
import Benefits from './Benefits';

const Landing = () => {
  return (
    <div>
      {/* Sticky nav, transparent */}
      <StickyNav />
      {/* Hero with bg image, buttons to sign up or sign in */}
      <Hero />
      {/* Benefits with Icons section */}
      <Benefits />
      {/* How it works section w/3 steps */}
      {/* Pricing Table - 3 cards */}
      {/* Call to Action - Get Started */}
      {/* Footer */}
    </div>
  );
};

export default Landing;
