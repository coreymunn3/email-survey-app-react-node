const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const Stripe = require('stripe');
const stripe = Stripe(keys.STRIPE_SECRET_KEY);

router.post('/payment', async (req, res) => {
  console.log(req.body);
  try {
    const intent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'usd',
      metadata: { integration_check: 'accept_a_payment' },
    });
    res.json({ client_secret: intent.client_secret });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;

// Useful Strip Documentation here
// https://stripe.com/docs/payments/payment-intents/migration/charges
