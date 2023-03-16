const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const tripsRouter = require('./routes/trips')

const session = require('express-session')
app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())
app.use(session({
    secret: 'secretkeypass',
    saveUninitialized: false
}))
app.use('/trips', tripsRouter)

let users = [
    {username: 'noah', password: 'wright'},
    {username: 'jenny', password: 'cabrera'}
]

global.trips = [{ 
    title: 'houston',
    imageURL: 'swag.com',
    departure: '03/12/2020',
    arrive: '03/18/2020',
    id: 1

}]

app.get('/login', (req, res) => {
    res.render('login')
})

function authenticationMiddleware(req, res, next) {
    if(req.session) {
        if(req.session.username) {
            next()
        } else {
            res.redirect('/login')
        }
    } else {
        res.redirect('/login')
    }
}

app.post('/login', (req, res) => {

    const username = req.body.username
    const password = req.body.password
// console.log(username, password)
    const user = users.find(user => user.username == username && user.password == password)

    if(user) {
        if(req.session) {
            req.session.username = username
        }
        res.redirect('/trips')
        //IF REDIRECT USE / IF RENDER YOU JUST NEED THE NAME OF THE MUSTACHE
    } else {
        res.render('login', {errorMessage: 'Invalid Login'})
    }
})

app.get('/', authenticationMiddleware, (req, res) => {
    res.render('trips', {arr: trips})
})

app.post('/register', (req, res) => {
    let newUsername = req.body.newUsername
    let newPassword = req.body.newPassword
    let existingUser = users.find((user) => {
        return user.username == newUsername
    })

    if(existingUser) {
        res.render("register", {newMessage: "Username Taken"})
    } else {
        let newUser = {username: newUsername, password: newPassword}
        users.push(newUser)
        res.redirect('/trips')
    }
})

app.listen(8080, () => {
    console.log('Server Running')
})