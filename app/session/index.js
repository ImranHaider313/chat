'use strict';

const config = require('../config');
const session = require('express-session');
const mongoStore = require('connect-mongo');

if (process.env.NODE_ENV === 'production') {
} else {
  module.exports = session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
  });
}
