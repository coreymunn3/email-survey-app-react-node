const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// connect to DB
mongoose.connect(keys.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const app = express();
// middlewares
app.use(
  cookieSession({
    // cookie age in MS
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // key to encrypt cookie
    keys: [keys.COOKIE_KEY],
    name: 'session',
  })
);
app.use(passport.initialize());
app.use(passport.session());
// routes
app.use('/auth/google', require('./routes/googleAuth'));
app.get('/api/currentUser', (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.send({ message: 'No User' });
  }
});
app.use('/logout', require('./routes/logout'));
app.get('/', (req, res) => res.send('Welcome to the App'));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
