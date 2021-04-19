'use strict';
const router = require('./routes');
const session = require('./session');
require('./auth')();
module.exports = { router, session };
