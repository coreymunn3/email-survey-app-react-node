module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).json({
      error: 'Not Enough Credits - Please add more credits to your account.',
    });
  }
  next();
};
