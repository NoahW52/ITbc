const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    taskName: String,
    priority: String,
    date: Date

})

const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo