const express = require('express')
const { getAllAuthors, getAuthorById, addNewAuthor, updateAuthor, deleteAuthor } = require('../controllers/authorController')
const router = express.Router()



router.get('/', getAllAuthors)

router.get('/ :authorId', getAuthorById)

router.post('/', addNewAuthor)

router.patch('/ :authorId', updateAuthor )

router.delete('/ :authorId', deleteAuthor )
  
  module.exports = router