const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  recommended_titles: [String]
});

module.exports = mongoose.model('Book', BookSchema);
