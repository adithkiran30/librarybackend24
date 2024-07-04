const Book = require("../model/bookModel");

const getAllBooks = async (req, res) => {
  const books = await Book.find({});
    res.json(books)
  }

const getBookById = async(req, res) => {
  try{
    const book = await Book.findById(req.params.bookId).exec();
    res.status(200).json(book)
  }
  catch(error){
    res.status(404).send('Book not found')
  
  }
}

const addNewBook = async(req, res) => {
    const bookData = req.body;
    const book = new Book(bookData);
    await book.save();
    res.status(201).json(book);
  }
const updateBook = async(req, res) => {
  try{
    const updatedBook = await Book.findByIdAndUpdate(req.params.bookId, req.body, {new: true})
    res.json(updatedBook)
  }
  catch(error){
    res.status(404).send('Book not found')
  }
}
const deleteBook = async(req, res) => {
  try{
    await Book.findByIdAndDelete(req.params.bookId)
    res.status(200).send("Book deleted")
  }
  catch(error){
    res.status(404).send('Book not found')
  }
}
module.exports = {
    getAllBooks,
    getBookById,
    addNewBook,
    updateBook,
    deleteBook
  }