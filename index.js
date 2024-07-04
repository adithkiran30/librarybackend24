const express = require('express')
const mongoose = require('mongoose');
cors = require('cors')
const bookRoutes = require('./routes/bookRoutes') 
const authorRoutes = require('./routes/authorRoutes')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json()) 
app.use('/books', bookRoutes)
app.use('/authors', authorRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// getting-started.js


main().then(() => console.log("connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://adithkiran30:C9G4XuKEs2jWSpDE@cluster0.yen2rug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}