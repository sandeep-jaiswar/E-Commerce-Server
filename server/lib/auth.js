require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {User} =require('../models/UserModel')

passport.use(new GoogleStrategy({
  clientID: process.env.googleClientID,
  clientSecret: process.env.googleClientSecret,
  callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    const data = {
      name : profile.displayName,
      email :profile.email[0].value
    };
    User.findOne({email : data.email}).then(existingUser => {
      if(existingUser){
        console.log('existing Google User')
      }
    })
  }
));


passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));

module.exports = {
  initialize: passport.initialize(),
  session: passport.session()
}













