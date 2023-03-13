const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const todoList = []

app.get('/toDo', (req, res) => {
    res.status(200).json(todoList)
})

app.post('/toDo', (req, res) => {
    const title = req.body.title
    const priority = req.body.priority
    const date = req.body.date
    const todoItem = {title: title, priority: priority, date: date}
    todoList.push(todoItem)
    res.status(200).json({success: true, message: 'good'})
})

app.listen(8080, () => {
    console.log('server running')
})