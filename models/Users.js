const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  googleId: String,
  displayName: String,
  emailAddress: String,
  credits: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model('users', userSchema);
