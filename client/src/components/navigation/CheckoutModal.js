import React, { useState } from 'react';
import {
  Button,
  Modal,
  TextField,
  Grid,
  MenuItem,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { addCredits } from '../../actions/authActions';
// stripe imports
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '75%',
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

const CheckoutModal = ({ modalIsOpen, handleClose, handleSnackbarOpen }) => {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  // local state vars
  const [credits, setCredits] = useState(5);
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  // form submit & STRIPE
  // See https://github.com/tmarek-stripe/demo-react-stripe-js/blob/master/components/CheckoutForm.jsx
  const handleSubmit = async (e) => {
    e.preventDefault();
    // confirm stripe is loaded
    if (!stripe || !elements) {
      return;
    }
    // get billing details
    const billingDetails = {
      name: user.displayName,
      email: user.emailAddress,
    };
    setProcessingTo(true);
    try {
      // create payment intent to get the client secret
      const {
        data: { clientSecret },
      } = await axios.post('/api/stripe/payment_intent', {
        amount: credits * 100,
      });

      // create & validate a payment method
      const cardElement = elements.getElement(CardElement);
      const paymentMethodReq = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: billingDetails,
      });
      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        return;
      }

      // confirm card payment
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: paymentMethodReq.paymentMethod.id,
        }
      );
      // handle result
      if (error) {
        setCheckoutError(error.message);
        setProcessingTo(false);
        return;
      } else {
        // add 5 credits to user balance
        dispatch(addCredits(paymentIntent.amount / 100));
        // end processing and close modal
        setProcessingTo(false);
        handleClose();
        handleSnackbarOpen(true, 'Credits Have Been Added');
      }
    } catch (err) {
      setCheckoutError('Unable to Initiate Payment');
    }
  };

  const modalVariants = {
    hidden: {
      y: -40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const modalBody = (
    <motion.div
      className={classes.paper}
      variants={modalVariants}
      initial='hidden'
      animate='visible'
    >
      <Typography variant='h5' align='center' color='primary' gutterBottom>
        Add Credits
      </Typography>
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
              helperText='$1 per credit'
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
              disabled={!stripe || isProcessing}
            >
              {isProcessing ? <CircularProgress /> : `Pay $${credits}`}
            </Button>
          </Grid>
          {checkoutError && (
            <Grid item xs={12}>
              <div>{checkoutError}</div>
            </Grid>
          )}
        </Grid>
      </form>
    </motion.div>
  );

  return (
    <Modal
      className={classes.modalCenter}
      open={modalIsOpen}
      onClose={handleClose}
    >
      {modalBody}
    </Modal>
  );
};

export default CheckoutModal;
