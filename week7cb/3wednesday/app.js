const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const bcrypt = require('bcryptjs')
const models = require('./models')

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())
const PORT = 8080

app.use(session({
    secret: 'thisisanything',
    saveUninitialized: false
}))
app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/blogs', async(req, res) => {
    const blogs = await models.Blog.findAll({
        include: [
            {
                model:models.Comment,
                as: 'comments'
            }
        ]
    })
    res.render('index', {blogs: blogs})
})

app.post('/add', async (req, res) => {

    const title = req.body.title
    const body = req.body.body
    const category = req.body.category

    const newBlog = await models.Blog.build({
        title: title,
        body: body,
        category: category
    })
    await newBlog.save()
    res.redirect('/blogs')
})
app.post('/delete-blog', async (req, res) => {
    const blogId = parseInt(req.body.id)
    await models.Blog.destroy({
        where: {
            id: blogId
        }
    })
    console.log('Blog Deleted Successfully')
    res.redirect('/blogs')
})
app.post('/update-blog-page', async (req, res) =>{
    const blogId = parseInt(req.body.id)
    const blog = await models.Blog.findAll({
        where: {
            id: blogId
        }
    })
    const blogInfo = {
        id: blog[0].dataValues.id,
        title: blog[0].dataValues.title,
        body: blog[0].dataValues.body,
        category: blog[0].dataValues.category
    }
    res.render('updates', blogInfo)
})
app.post('/update-blog-info', async (req, res) => {
    await models.Blog.update({
        title: req.body.title,
        body: req.body.body,
        category: req.body.category}, {
            where: {
                id: parseInt(req.body.id)
            }
        })
        console.log('blog updated')
        res.redirect('/blogs')
})

app.post('/filter', async (req, res) => {
    const filteredBlogs = await models.Blog.findAll({
        where: {
            category: req.body.category
        }
    })

    let filteredArr = []
    for(let i = 0; i < filteredBlogs.length; i++) {
        const blogInfo = {
            id: filteredBlogs[i].dataValues.id,
            title: filteredBlogs[i].dataValues.title,
            body: filteredBlogs[i].dataValues.body,
            category: filteredBlogs[i].dataValues.category
        }
        filteredArr.push(blogInfo)
    }

    res.render('index', {blogs: filteredArr})
})
app.post('/add-comment', async (req, res) => {
    const title = req.body.commentTitle
    const body = req.body.commentBody
    const postId = parseInt(req.body.post_id)

    const comment = models.Comment.build({
        title: title,
        body: body,
        post_id: postId
    })

    await comment.save()
    res.redirect('/blogs')
})
app.post('/delete-comment', async (req, res) => {
    await models.Comment.destroy({
        where: {
            id: parseInt(req.body.commentId)
        }
    })
    res.redirect('/blogs')
})



app.listen(PORT, () => {
    console.log('server running')
})