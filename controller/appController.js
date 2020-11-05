const { request } = require('express');
const ShortUrl = require('../models/shortUrl');

module.exports.homepage_get = (req, res) => {
  res.render('Home');
}

// module.export.longUrl_get = (req, res) => {

// }

module.exports.shrinkUrl_post = async (req, res) => {
  const long  = req.body.long
  const url_data = await ShortUrl.create({ longUrl : long })
  if(url_data){
    console.log(url_data);
    res.send('success');
  }
}