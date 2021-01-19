import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const stripeKey = process.env.REACT_APP_STRIPE_KEY;

const Checkout = () => {
  return (
    <StripeCheckout
      amount={500}
      currency={'USD'}
      stripeKey={stripeKey}
      token={() => console.log('hello')}
    />
  );
};

export default Checkout;
