const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const connectDB = require('./config/connectDb');
const keys = require('./config/keys');

// connect to DB
connectDB(keys.MONGO_URI);

const app = express();
app.use(bodyParser.json());
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
app.use('/api/currentuser', require('./routes/currentuser'));
app.use('/api/stripe', require('./routes/stripe'));
app.use('/logout', require('./routes/logout'));
app.get('/', (req, res) => res.send('Welcome to the App'));

if (process.env.NODE_ENV === 'production') {
  // make sure express will serve up prod assets
  app.use(express.static('/client/build'));
  // express will serve up index.html file if it doesn't know the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT);
