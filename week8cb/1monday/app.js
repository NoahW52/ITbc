const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()
const mongoose = require('mongoose')
const Todo = require('./schemas/task')
const PORT = 8080

app.engine('mustache', mustacheExpress())

app.use(express.urlencoded())

app.set('views', './views')
app.set('view engine', 'mustache')

mongoose.connect('mongodb+srv://nwright5252:IGYP58PEUP4UTaIP@cluster0.mxdtzcc.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('MongoDb is connected')
}).catch((error) => {
    console.log(error)
})

app.get('/', async (req,res) => {
    try{
        const todos = await Todo.find({})
        res.render('tasks', {todos: todos})
    }catch {
        res.render('tasks', {errorMessage: 'Unable to get list'})
    }
})
app.get('/index', (req, res) => {
    res.render('index')
})

app.post('/add-item', async (req, res) => {

    const taskName = req.body.taskName
    const priority = req.body.priority
    const date = req.body.date

    const todo = new Todo({
    taskName: taskName,
    priority: priority,
    date: date

    })
    await todo.save()
    res.redirect('/')
})
app.post('/delete-task', async (req, res) => {
    const id = req.body.id
    await Todo.findByIdAndDelete(id)
    res.redirect('/')
})
app.post('/update', async (req, res) => {
    const id = req.body.id
    const task = await Todo.findById(id)
    res.render('update', task)
})
app.post('/updatedInfo', async (req, res) => {
    const id = req.body.id
    const updated = {
        taskName: req.body.taskName,
        priority: req.body.priority,
        date: req.body.date
    }
    await Todo.findByIdAndUpdate(id, updated)
    res.redirect("/")
})
app.listen(PORT, () => {
    console.log('server running')
})