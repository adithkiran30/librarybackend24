const getAllAuthors = (req, res) => {
    res.send('Get all authors')
  }
const getAuthorById =  (req, res) => {
    res.send('Author found')
  }
const addNewAuthor =  (req, res) => {
    res.send('New author added')
  }
const updateAuthor =  (req, res) => {
    res.send('Author updated')
  }

const deleteAuthor =  (req, res) => {
    res.send('Author deleted')
  }
module.exports = {
    getAllAuthors,
    getAuthorById,
    addNewAuthor,
    updateAuthor,
    deleteAuthor
  }