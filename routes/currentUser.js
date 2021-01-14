const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.send({ message: 'No User' });
  }
});

module.exports = router;
