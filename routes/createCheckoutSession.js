const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const Stripe = require('stripe');
const stripe = Stripe(keys.STRIPE_SECRET_KEY);

router.post('/', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'credits',
          },
          unit_amount: 500,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/profile',
    cancel_url: 'http://localhost:3000/profile',
  });
  res.json({ id: session.id });
});

module.exports = router;
