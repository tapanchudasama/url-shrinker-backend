const routes = require('express').Router();
const { getAllUrls, createShortUrl, getFullUrl } = require('../controllers');

routes.get('/getAllUrls', getAllUrls);

routes.post('/createUrl', createShortUrl);

routes.get('/:url', getFullUrl);

module.exports = routes;
