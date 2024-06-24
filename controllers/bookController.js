const getAllBooks = (req, res) => {
    res.send('Get all books')
  }

const getBookById = (req, res) => {
    res.send('Book found')
  }

const addNewBook = (req, res) => {
    res.send('New book added')
  }
const updateBook = (req, res) => {
    res.send('existing book updated')
  }
const deleteBook = (req, res) => {
    res.send('Book deleted')
  }
module.exports = {
    getAllBooks,
    getBookById,
    addNewBook,
    updateBook,
    deleteBook
  }