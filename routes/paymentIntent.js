const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const Stripe = require('stripe');
const stripe = Stripe(keys.STRIPE_SECRET_KEY);

router.get('/', async (req, res) => {
  const intent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
    metadata: { integration_check: 'accept_a_payment' },
  });
  res.json({ client_secret: intent.client_secret });
});

module.exports = router;
