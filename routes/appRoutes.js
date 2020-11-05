const { Router } = require('express');
const { model } = require('mongoose');
const appController = require('../controller/appController');

const router = Router();

// get routes
router.get('/', appController.homepage_get);
router.get('/:short_url_id', appController.longUrl_get);


// post routes
router.post('/', appController.shrinkUrl_post);

module.exports = router;