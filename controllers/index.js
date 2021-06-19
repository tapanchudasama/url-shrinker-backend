const urls = require('../models/urlSchema.js');

const LIMIT = 10;

const getAllUrls = async (req, res) => {
  try {
    const page = req.query.page;
    let data = await urls
      .find()
      .limit(LIMIT)
      .skip(page * LIMIT)
      .sort({ createdDate: 'desc' });
    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createShortUrl = async (req, res) => {
  try {
    const fullUrl = req.body.fullUrl;
    const slug = req.body.slug;
    let newUrl;
    if (slug) {
      const find = await urls.countDocuments({ short: slug });
      if (!find) {
        newUrl = await urls.create({ full: fullUrl, short: slug });
        res.status(201).json(newUrl);
      } else {
        res.status(400).json({ message: 'Choose another slug' });
      }
    } else {
      newUrl = await urls.create({ full: fullUrl });
      res.status(201).json(newUrl);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getFullUrl = async (req, res) => {
  try {
    const shortUrl = await urls.findOne({ short: req.params.url });
    shortUrl.clicks++;
    shortUrl.save();
    res.status(201).redirect(shortUrl.full);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports = {
  getAllUrls,
  createShortUrl,
  getFullUrl
};
