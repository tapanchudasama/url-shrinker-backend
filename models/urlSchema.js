const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: Date.now()
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('ShortURL', urlSchema);
