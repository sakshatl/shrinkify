const { request } = require('express');
const ShortUrl = require('../models/shortUrl');

module.exports.homepage_get = (req, res) => {
  res.render('Home');
}

module.exports.longUrl_get = async (req, res) => {
  const shortUrlId = req.params.short_url_id;
  const url_data = await ShortUrl.findOne( { shortUrlId : shortUrlId } )
  if(url_data){
    console.log(url_data);
    res.redirect(url_data.longUrl)
  }
}

module.exports.shrinkUrl_post = async (req, res) => {
  console.log(req.body)
  const long  = req.body.long
  // const url_data = await ShortUrl.create({ longUrl : long })
  // if(url_data){
  //   // console.log(url_data);
  //   res.redirect(url_data.longUrl);
  // }
}