'use strict';

const passport = require('passport');
const config = require('../config');
const db = require('../db');
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    let user = await db.userModel.findOne({ id: profile.id });
    done(null, user);
  });

  let authProcessor = async (accessToken, refreshToken, profile, done) => {
    let user = await db.userModel.findOne({ id: profile.id });

    if (!user) {
      user = await db.userModel.create({
        id: profile.id,
        name: profile.displayName,
        avatar: profile.photos[0].value,
      });
    }

    done(null, user);
  };
  passport.use(new FacebookStrategy(config.fb, authProcessor));
};
