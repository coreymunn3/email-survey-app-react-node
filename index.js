const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const connectDB = require('./config/connectDb');
const keys = require('./config/keys');

// connect to DB
connectDB(keys.MONGO_URI);

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
app.use('/api/currentUser', require('./routes/currentUser'));
app.use('/api/logout', require('./routes/logout'));
app.get('/', (req, res) => res.send('Welcome to the App'));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
