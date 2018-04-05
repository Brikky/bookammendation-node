const mongoose = require("mongoose");
const Book = require("./book");

mongoose.connect( process.env.MONGODB_URI || "mongodb://127.0.0.1/Bookammendation" );

module.exports.Book = Book;
