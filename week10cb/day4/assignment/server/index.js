const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const authenticate = require('./middleware/authMiddleware')

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

app.post('/register', async (req,res) => {
    const username = req.body.username
    const password = req.body.password
    const firstName = req.body.firstname
    const lastName = req.body.lastname
    const email = req.body.email

    let salt = await bcrypt.genSalt(10)
    let hashedPassword = await bcrypt.hash(password, salt)

    const user = new User ({
        username: username,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName,
        email: email
    })

    if(user) {
        await user.save()

        const token = jwt.sign({ username: user.username}, 'SECRETKEY')
        //jwt.sign takes a string or object first so i could just do jwt.sign(username) and it's equivalent to my current code
        res.json({token: token, success: true, message: `${username} is a registered user now!`})
    } else {
        res.json({success: false, message: "User already exists"})
    }
})

app.post('/api/login', async (req,res) => {
    const username = req.body.username
    const password = req.body.password

    User.findOne({ username })
    .then(user => {
        if (!user) {
            return res.status(401).json({success: false, message: 'Invalid user'})
        }

        bcrypt.compare(password, user.password)
        .then(result => {
            if (!result) {
                return res.status(401).json({success: false, message: 'Invalid user'})
            }

            const token = jwt.sign({ username }, 'SECRETKEY')
            res.json({ success:true, token })
            console.log('login successful!')
        })

        .catch(err => {
            return res.status(500).json({ success: false, message: 'Internal server error' })
        })
    })

    .catch(err => {
        return res.status(500).json({ success: false, message: 'Internal server error' })
    })
})

app.post('/api/add-book', authenticate, async (req,res) => {
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
