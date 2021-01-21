import React, { Fragment, useState } from 'react';
import {
  Button,
  Modal,
  TextField,
  Grid,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// redux
import { useSelector } from 'react-redux';
// stripe imports
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '55%',
    maxWidth: '500px',
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
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  // form controls
  const [open, setOpen] = useState(false);
  const [credits, setCredits] = useState(5);

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
    // create payment intent
    const { data } = await axios.get('/api/payment');
    const clientSecret = data.client_secret;
    console.log(data.client_secret);
    // confirm stripe is loaded - from docs
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: 'TEST NAME',
        },
      },
    });

    if (result.error) {
      console.log(result.error);
    } else {
      console.log('Succeeded!');
    }
  };

  const modalBody = (
    <div className={classes.paper}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id='email'
              type='email'
              label='Email'
              variant='filled'
              fullWidth
              defaultValue={user && user.emailAddress}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='credits'
              select
              label='Select Credits'
              value={credits}
              onChange={(e) => setCredits(e.target.value)}
              fullWidth
            >
              <MenuItem value={5}>5 Credits</MenuItem>
              <MenuItem value={10}>10 Credits</MenuItem>
              <MenuItem value={15}>15 Credits</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <CardElement />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              style={{ width: '100%' }}
              disableElevation
              disabled={!stripe}
            >
              {`Pay $${credits}`}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );

  return (
    <Fragment>
      <Button
        variant='contained'
        disableElevation
        color='secondary'
        onClick={handleOpen}
      >
        Add Credits
      </Button>
      <Modal className={classes.modalCenter} open={open} onClose={handleClose}>
        {modalBody}
      </Modal>
    </Fragment>
  );
};

export default CheckoutButton;
