const express = require('express');
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');

router.get('/', (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json(false);
  }
});

router.post('/addcredits', requireLogin, async (req, res) => {
  const { amount } = req.body;
  req.user.credits += amount;
  const user = await req.user.save();
  res.json(user);
});

module.exports = router;
