const express = require('express');
const router = express.Router();
const StaticPages = require('./controllers/static_pages');
const Books = require('./controllers/books');

router.get('/', StaticPages.home);
router.get('/select', Books.index);

module.exports = router;
