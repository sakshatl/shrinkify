const mongoose = require('mongoose');
const shortId = require('short-id');

const ShortUrlSchema = new mongoose.Schema({
  longUrl : {
    type: String,
    required: true
  },
  shortUrlId : {
    type: String,
    default : shortId.generate
  }
})

module.exports = mongoose.model('ShortUrl', ShortUrlSchema);