const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const PORT = 8080

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const Book = require('./schemas/book')
const User = require('./schemas/user')

mongoose.connect('mongodb+srv://nwright5252:j8bNPn3toSHK0T67@cluster0.xmz6isa.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
}).catch((error) => {
    console.log(error)
})

const users = [{username: 'nwright', password: 'pass'}]

app.post('/token', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = users.find(user => user.username == username && user.password == password)

    if(user) {
        const token = jwt.sign({username: user.username}, 'SECRETKEY')
        res.json({success: true, token: token})
    } else {
        res.json({success: false, message: 'Unable to authenticate'})
    }
})

app.post('/register', async (req,res) => {
    const username = req.body.username
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email

    let salt = await bcrypt.genSalt(10)
    let hashedPassword = await bcrypt.hash(password, salt)

    const user = new User ({
        username: username,
        password: hashedPassword,
        firstname: firstName,
        lastName: lastName,
        email: email
    })
    await user.save()

    res.json({message: 'user created'})
})

// app.post('/login', async (req,res) => {
//     const username = req.body.username
//     const password = req.body.password

//     const user = await User.findOne({username: username, password: password})

//     if(user) {
//         const token = jwt.sign({username: user.username}, 'SECRETKEY')
//     }
// })

app.post('/api/add-book', async (req,res) => {
    const bookTitle = req.body.title
    const bookGenre = req.body.genre
    const bookAuthor = req.body.author
    const bookYear = req.body.year
    const bookImageURL = req.body.imageURL

    const book = new Book({
        bookTitle:bookTitle,
        bookGenre:bookGenre,
        bookAuthor:bookAuthor,
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

app.post('/api/books/:_id', async (req,res) => {
    const id =req.params._id

    const updateBook = {
        bookTitle: req.body.bookTitle,
        bookGenre: req.body.bookGenre,
        bookAuthor: req.body.bookAuthor,
        bookYear: req.body.bookYear,
        bookImageURL: req.body.bookImageURL
    }

    const updated = await Book.findByIdAndUpdate(id, updateBook)
    res.json(updated)
})

app.get('/api/books', async (req,res) => {
    const books = await Book.find({})
    res.json(books)
})

app.listen(PORT, () => {
    console.log('server running')
})
