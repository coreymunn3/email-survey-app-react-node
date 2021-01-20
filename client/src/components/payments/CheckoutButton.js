import React, { Fragment, useState } from 'react';
import { Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// stripe imports
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '55%',
    maxWidth: '100vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
  },
  modalCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const CheckoutButton = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  // for stripe
  // const createCheckoutSession = async () => {
  //   const { data } = await axios.post('/api/create-checkout-session');
  //   return data;
  // };

  // const handleClick = async (e) => {
  //   const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY);
  //   const { id } = await createCheckoutSession();
  //   const result = await stripe.redirectToCheckout({
  //     sessionId: id,
  //   });
  // };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
    }
  };

  const modalBody = (
    <div className={classes.paper}>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <Button
          variant='contained'
          color='primary'
          type='submit'
          style={{ width: '100%' }}
          disableElevation
          disabled={!stripe}
        >
          Pay
        </Button>
      </form>
    </div>
  );

  return (
    <Fragment>
      <Button variant='contained' color='secondary' onClick={handleOpen}>
        Add Credits
      </Button>
      <Modal className={classes.modalCenter} open={open} onClose={handleClose}>
        {modalBody}
      </Modal>
    </Fragment>
  );
};

export default CheckoutButton;
