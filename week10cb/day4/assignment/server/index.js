const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = 8080

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const Book = require('./schemas/book')

mongoose.connect('mongodb+srv://nwright5252:j8bNPn3toSHK0T67@cluster0.xmz6isa.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
}).catch((error) => {
    console.log(error)
})

app.post('/api/add-book', async (req,res) => {
    const bookTitle = req.body.title
    const bookGenre = req.body.genre
    const bookPublisher = req.body.publisher
    const bookYear = req.body.year
    const bookImageURL = req.body.imageURL

    const book = new Book({
        bookTitle:bookTitle,
        bookGenre:bookGenre,
        bookPublisher:bookPublisher,
        bookYear:bookYear,
        bookImageURL:bookImageURL
    })
    await book.save()
    res.json(book)
})

app.delete('/api/books/:_id', async (req,res) => {
    const id = req.params
    const deleteBook = await Book.findByIdAndDelete(id)
    res.json(deleteBook)
})

app.get('/api/books', async (req,res) => {
    const books = await Book.find({})
    res.json(books)
})

app.listen(PORT, () => {
    console.log('server running')
})
