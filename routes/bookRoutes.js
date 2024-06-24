const express = require('express')
const { getAllBooks, getBookById, addNewBook, updateBook, deleteBook } = require('../controllers/bookController')
const router = express.Router()


//1.Get all books
router.get('/', getAllBooks) 
  //2.Get book by id
  router.get('/:bookId', getBookById)
  //3.Add new book
  router.post('/', addNewBook )
  //4.Update book by id
  router.patch('/:bookId', updateBook)
  //5.Delete product by id
  router.delete('/:bookId', deleteBook )

module.exports = router