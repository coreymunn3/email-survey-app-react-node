import React, { Fragment } from 'react';
import Hero from './Hero';
import StickyNav from './StickyNav';
import Benefits from './Benefits';
import HowItWorks from './HowItWorks';
import PricingTable from './PricingTable';

const Landing = () => {
  const pricingOptions = [
    {
      title: 'Free Trial',
      description: 'Amazing Value',
      benefitsTable: {
        surveys: 1,
        price: '$0',
        recipients: 'Up to 100k per Survey',
        storage: 'Unlimited',
      },
    },
    {
      title: 'Starter',
      description: 'Best for Teams',
      benefitsTable: {
        surveys: 5,
        price: '$5',
        recipients: 'Up to 100k per Survey',
        storage: 'Unlimited',
      },
    },
    {
      title: 'Enterprise',
      description: 'Best for Large Operations',
      benefitsTable: {
        surveys: '100+',
        price: 'Contact Us',
        recipients: 'Up to 100k per Survey',
        storage: 'Unlimited',
      },
    },
  ];
  return (
    <Fragment>
      {/* Sticky nav, transparent */}
      <StickyNav />
      {/* Hero with bg image, buttons to sign up or sign in */}
      <Hero />
      {/* Benefits with Icons section */}
      <Benefits />
      {/* How it works section w/3 steps */}
      <HowItWorks />
      {/* Pricing Table - 3 cards */}
      <PricingTable pricingOptions={pricingOptions} />
      {/* Call to Action - Get Started */}
      {/* Footer */}
    </Fragment>
  );
};

export default Landing;
