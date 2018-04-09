const db = require('../models/index');

const Books = {
  list: (req, res) => {
    db.Book.find({}, (err, foundBooks) => {
      res.json({
        books: foundBooks.map((book) => {
          return {
            id: book.id,
            title: book.title
          }
        })
      });
    });
  },

  recommendations: (req, res) => {
    db.Book.findById(req.params.id, (err, foundBook) => {
      if (err) {
        return res.status(400).json({error: 'not found'})
      }
      res.json({
        titles: foundBook.recommended_titles
      });
    });
  }
};

module.exports = Books;
