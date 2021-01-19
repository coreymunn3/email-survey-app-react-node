import React, { Fragment } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { loadStripe } from '@stripe/stripe-js';

const CheckoutButton = () => {
  const createCheckoutSession = async () => {
    const { data } = await axios.post('/api/create-checkout-session');
    return data;
  };

  const handleClick = async (e) => {
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY);
    const { id } = await createCheckoutSession();
    const result = await stripe.redirectToCheckout({
      sessionId: id,
    });
  };

  return (
    <Fragment>
      <Button variant='contained' color='secondary' onClick={handleClick}>
        Add Credits
      </Button>
    </Fragment>
  );
};

export default CheckoutButton;
