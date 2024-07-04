const Author = require("../model/authorModel");

const getAllAuthors = async (req, res) => {
  const authors = await Author.find({});
    res.json(authors)
  }
const getAuthorById =  async(req, res) => {
  try{
    const author = await Author.findById(req.params.authorId).exec();
    res.status(200).json(author)
     }
  catch (error) {
    res.status(404).send("Author not found")
          }
}
const addNewAuthor = async(req, res) => {
  const authorData = req.body;
  const author = new Author(authorData);
  await author.save();
  res.json(author);
  }
const updateAuthor = async (req, res) => {
  try{
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.authorId, req.body, {new: true})
    res.json(updatedAuthor)
  }
  catch(error){
    res.status(404).send('Author not found')
  }
  }

const deleteAuthor = async (req, res) => {
    try{
      await Author.findByIdAndDelete(req.params.authorId)
      res.status(200).send("Author deleted")
    }
    catch(error){
      res.status(404).send('Author not found')
    }
  }
module.exports = {
    getAllAuthors,
    getAuthorById,
    addNewAuthor,
    updateAuthor,
    deleteAuthor
  }