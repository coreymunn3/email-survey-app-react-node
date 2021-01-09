const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const app = express();
app.use(
  cookieSession({
    // cookie age in MS
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // key to encrypt cookie
    keys: [process.env.COOKIE_KEY],
    name: 'session',
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth/google', require('./routes/authRoutes'));
app.get('/', (req, res) => res.send('Welcome to the App'));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
