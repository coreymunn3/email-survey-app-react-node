const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/Users');

// turn mongoose model instance into a cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// turn cookie back into model instance
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// OAuth Setup
const GOOGLE_OAUTH_CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const GOOGLE_OAUTH_CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
// Define strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: GOOGLE_OAUTH_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      // create a new user in db
      const user = await User.findOne({ googleId: profile.id });
      if (!user) {
        const newUser = new User({ googleId: profile.id });
        await newUser.save();
        console.log('New User Created');
        done(null, user);
      } else {
        console.log('User already exists');
        done(null, user);
      }
    }
  )
);
