const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const Stripe = require('stripe');
const stripe = Stripe(keys.STRIPE_SECRET_KEY);
const requireLogin = require('../middlewares/requireLogin');

router.post('/payment_intent', requireLogin, async (req, res) => {
  const { amount } = req.body;
  try {
    const intent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      metadata: { integration_check: 'accept_a_payment' },
    });
    res.status(200).json({ clientSecret: intent.client_secret });
  } catch (error) {
    res.status(500).json({ error: 'Unable to create stripe client secret' });
  }
});

module.exports = router;
