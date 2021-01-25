const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const Stripe = require('stripe');
const stripe = Stripe(keys.STRIPE_SECRET_KEY);

router.post('/payment_intent', async (req, res) => {
  const { amount } = req.body;
  try {
    const intent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      metadata: { integration_check: 'accept_a_payment' },
    });
    res.status(200).json({ client_secret: intent.client_secret });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
