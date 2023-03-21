const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const PORT =8080
const session = require('express-session')
const bcrypt = require('bcryptjs')

const pgp = require('pg-promise')()
const connectionString = 'postgres://cxbticsv:0yM1CIOJTWBfpTMHqLdq31khotfJbyXC@ruby.db.elephantsql.com/cxbticsv'
const db = pgp(connectionString)

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')

app.use(session({
    secret: 'thisisanything',
    saveUninitialized: false
}))
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.redirect('login')
})

app.get('/blog', async (req, res) => {
    const blog = await db.any('SELECT post_id, title, body, date_created, date_updated, is_published FROM blog')
    res.render('index', {blog: blog})
})
app.post('/delete-blog', async (req, res) => {
    const blogId = parseInt(req.body.blogId)
    await db.none('DELETE FROM comments WHERE post_id = $1', [blogId])
    console.log(blogId)
    await db.none('DELETE FROM blog WHERE post_id = $1', [blogId])
    res.redirect('/blog')
})

app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    let user = await db.oneOrNone('SELECT id, username, password from users WHERE username = $1', [username])

    if(user) {
        const result = await bcrypt.compare(password, user.password)
        if(result) {
            if(req.session) {
                req.session.userId = user.id
            }
            res.redirect('/blog')
        }else {
            res.render('login', {errorMessage: 'Invalid input'})
        }
    }else {
        res.render('login', {errorMessage: 'Invalid input'})
    }
})

app.get('/sign-up', (req, res) => {
    res.render('signup')
})
app.post('/sign-up', async (req, res) => {

    const username = req.body.username
    const password = req.body.password

    let salt = await bcrypt.genSalt(10)
    let hashPassword = await bcrypt.hash(password, salt)

    await db.none('INSERT INTO users(username, password) VALUES ($1, $2)', [username, hashPassword])
    console.log('New User has been added')
    res.redirect('/blog')
})

app.post('/add', async (req, res) => {
   
    const title = req.body.title 
    const body = req.body.body

    await db.none('INSERT INTO blog(title, body, user_id) VALUES($1,$2, $3)', [title, body, req.session.userId])

    res.redirect('/blog')
})
app.post('/post-details', async (req, res) => {
    const post = await db.one('SELECT post_id, title, body, date_created, date_updated FROM blog WHERE post_id = $1', [req.body.blogId])
    const comments = await db.any('SELECT body FROM comments WHERE post_id = $1', [req.body.blogId])
    console.log(post)
    console.log(comments)
    res.render('details', {post: post, comments: comments})
})

app.listen(PORT, () => {
    console.log('server running')
})
