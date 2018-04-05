const fs = require('fs');
const parse = require('csv-parse');
const db = require('../models/index');

fs.readFile('./seeds/recommendations-matrix-rec15.csv', function(err, fileData) {
  parse(fileData, { delimeter: ','}, (err, rows) => {
    rows.forEach((row) => {
      let set = {
        title: row[0],
        recommended_titles: row.slice(2) //first match is always same book
      }
      db.Book.create(set, (err, savedBook) => {
        if (savedBook) {
          console.log(`Book created, ${savedBook.title}`);
        } else {
          console.log(`Book could not be saved, ${err}`);
        }
      });
    });
  });
});
