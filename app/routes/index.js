'use strict';

const router = require('express').Router();
const passport = require('passport');

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/rooms', (req, res) => {
  res.render('rooms');
});

router.get('/auth/facebook', passport.authenticate('facebook'));
router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/rooms');
  }
);

module.exports = router;
