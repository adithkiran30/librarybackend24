const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
  });

  const Book = mongoose.model('Book', bookSchema);
  module.exports = Book;