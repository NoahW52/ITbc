const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./schemas/user')
const Comment = require('./schemas/comment')
const PORT = 8080
const cors = require('cors')
const { url } = require('inspector')
const { check, validationResult } = require("express-validator")

app.use(cors())
app.use(express.json())
app.use(timeStamp)
app.use(express.static('static'))

function timeStamp(req, res, next) {
    const currentDate = new Date()
    const stamp = currentDate.getTime()
    const url = req.url

    console.log(currentDate, stamp, url)
    next()
}


mongoose.connect('mongodb+srv://nwright5252:j8bNPn3toSHK0T67@cluster0.xmz6isa.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
}).catch((error) => {
    console.log(error)
})

app.get('/api/users', async (req,res) => {
    const users = await User.find({})
    res.json(users)
})

app.post('/api/users', async (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
  
    const newUser = new User({
      name: name,
      age: age
    });
  
    await newUser.save();
    res.json(newUser);
  });

  app.post('/api/users/:id', async (req,res) => {
    const id = req.params.id

    const deleted = await User.findByIdAndDelete(id)
    res.redirect('/api/users')
  })
  
  app.put('/api/users/:id', async (req,res) => {
    const id = req.params.id

    const { name, age } = req.body
    const updated = await User.findByIdAndUpdate(id, { name, age }, { new: true })

    res.json(updated)
  })

app.get('/api/users/:id', async (req, res) => {
    const id = req.params.id
    const oneUser = await User.findById(id)
    res.json(oneUser)
})

app.get('/api/comments/:userId', async (req,res) => {
    const id = req.params.userId
    const comment = await Comment.find({userId: id})
    res.json(comment)

})





app.patch('/api/users/:id', async (req,res) => {
    const id = req.params.id

    const { name, age } = req.body
    const updated = await User.findByIdAndUpdate(id, { name, age }, { new: true })

    res.json(updated)
  })

  app.post(
    "/api/users",
    [
        check("name").not().isEmpty(),
        check("age").isNumeric(),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }

        const { name, age } = req.body

        const newUser = new User({
            name: name,
            age: parseInt(age),
        })

        await newUser.save()

        res.redirect("/api/users")
    }
)


app.listen(PORT, () => {
    console.log('server running')
})