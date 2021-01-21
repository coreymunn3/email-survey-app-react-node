const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  googleId: String,
  displayName: String,
  emailAddress: String,
});

module.exports = mongoose.model('users', userSchema);
