const mongoose = require('mongoose');
const shortID = require('shortid');

const urlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: () => shortID.generate(),
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('ShortURL', urlSchema);
