const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.send(false);
  }
});

module.exports = router;
