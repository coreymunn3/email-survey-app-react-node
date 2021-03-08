import React, { Fragment } from 'react';
import Hero from './Hero';
import StickyNav from './StickyNav';
import Benefits from './Benefits';
import HowItWorks from './HowItWorks';
import PricingTable from './PricingTable';
import CallToAction from './CallToAction';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
// images
import CreditCard from './img/CreditCard.jpg';
import FilloutForm from './img/FilloutForm.jpg';
import YesNo from './img/YesNo.jpg';

const Landing = () => {
  const benefits = [
    {
      icon: <VerifiedUserIcon color='primary' fontSize='large' />,
      name: 'Secure',
      description: 'Your Data is kept private, where only you can view it.',
    },
    {
      icon: <DirectionsRunIcon color='primary' fontSize='large' />,
      name: 'Fast',
      description:
        'Sending out emails to thousands of recipients takes only a few seconds',
    },
    {
      icon: <MoneyOffIcon color='primary' fontSize='large' />,
      name: 'Cheap',
      description: 'Only $1 to send out a survey, to whover you want',
    },
  ];
  const pricingOptions = [
    {
      title: 'Free Trial',
      description: 'Get Started for Free',
      benefitsTable: {
        surveys: '1',
        price: '$0',
        recipients: 'Up to 100k per Survey',
        storage: 'Unlimited',
      },
    },
    {
      title: 'Starter',
      description: 'Best for Teams',
      benefitsTable: {
        surveys: '5-15',
        price: '$5-$15',
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
  const howItWorks = [
    {
      number: 1,
      image: CreditCard,
      content: {
        title: 'Purchase Credits',
        description:
          '5 Dollars for 5 Credits, and sending out a survey starts at only 1 Credit. Purchases are routed securely through Stripe, so we never save your card information.',
      },
    },
    {
      number: 2,
      image: FilloutForm,
      content: {
        title: 'Create Your Survey',
        description:
          'Using a simple form, create a Yes/No survey with a Title, Subject, and Body. List the recipients, and our email engine does the rest!',
      },
    },
    {
      number: 3,
      image: YesNo,
      content: {
        title: 'Monitor Responses In A Real Time Dashbaord',
        description:
          'Your Recipients can Respond via Links provided in the Email. Using a Webhook, We Record Those Responses in Real Time.',
      },
    },
  ];

  return (
    <Fragment>
      {/* Sticky nav */}
      <StickyNav />
      {/* Hero with bg image, buttons to sign up or sign in */}
      <Hero />
      {/* Benefits with Icons section */}
      <Benefits benefits={benefits} />
      {/* How it works section w/3 steps */}
      <HowItWorks howItWorks={howItWorks} />
      {/* Pricing Table - 3 cards */}
      <PricingTable pricingOptions={pricingOptions} />
      {/* Call to Action - Get Started */}
      <CallToAction />
      {/* Footer */}
    </Fragment>
  );
};

export default Landing;
