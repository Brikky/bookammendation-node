const db = require('../models/index');

const Books = {
  index: (req, res) => {
    db.Book.find({}, (err, foundBooks) => {
      console.log(foundBooks, err)
      res.render('../views/books/index', {
        books: foundBooks
      });
    });
  }
};

module.exports = Books;
