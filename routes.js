const express = require('express');
const router = express.Router();
const StaticPages = require('./controllers/static_pages');
const Books = require('./controllers/books');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', StaticPages.home);
router.get('/api/books/list', Books.list);
router.get('/api/books/:id/recommendations', Books.recommendations);

module.exports = router;
