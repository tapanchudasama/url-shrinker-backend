const routes = require('express').Router();
const ShortURLs = require('../models/urlSchema');
const { getAllUrls, createShortUrl, getFullUrl } = require('../controllers');
const path = require('path');

routes.get('/', getAllUrls);

routes.post('/createUrl', createShortUrl);

routes.get('/:url', getFullUrl);

routes.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = routes;
