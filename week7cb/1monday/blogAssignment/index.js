const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const PORT =8080
const session = require('express-session')

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
    const blogId = parseInt(req.body.id)
    console.log(blogId)
    await db.none('DELETE FROM blog WHERE post_id = $1', [blogId])
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', (req, res) => {
    res.redirect('/blog')
})
app.get('/sign-up', (req, res) => {
    res.render('signup')
})
app.post('/sign-up', async (req, res) => {
    await db.none('INSERT INTO users(username, password) VALUES ($1, $2)', [req.body.username, req.body.password])
    console.log('New User has been added')
    res.redirect('/blog')
})

app.post('/add', async (req, res) => {
    
    const title = req.body.title 
    const body = req.body.body

    await db.none('INSERT INTO blog(title, body) VALUES($1,$2)', [title, body])

    res.redirect('/blog')
})

app.listen(PORT, () => {
    console.log('server running')
})
