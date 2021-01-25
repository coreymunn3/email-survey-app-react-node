const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.send(false);
  }
});

router.post('/addcredits', async (req, res) => {
  const { amount } = req.body;
  if (req.user) {
    req.user.credits += amount;
    const user = await req.user.save();
    res.json(user);
  } else {
    res.send(false);
  }
});

module.exports = router;
