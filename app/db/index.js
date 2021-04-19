'use strict';
const config = require('../config');
const mongoose = require('mongoose');

try {
  mongoose
    .connect(config.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongodb'));
} catch (e) {
  console.log('can not connect to db');
}

const chatUser = mongoose.Schema({
  id: String,
  name: String,
  avatar: String,
});

const userModel = mongoose.model('ChatUser', chatUser);
module.exports = { mongoose, userModel };
