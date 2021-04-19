'use strict';

const express = require('express');
const app = express();
const chatcat = require('./app');
const passport = require('passport');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(passport.initialize());
app.use(passport.session());
app.use(chatcat.session);
app.use('/', chatcat.router);

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
  console.log('server is running at port: ', PORT);
});
