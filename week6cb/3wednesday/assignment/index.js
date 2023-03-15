const express = require('express')
        //REQUIRE = IMPORT
const app = express()
const mustacheExpress = require('mustache-express')
const movieRouter = require('./routes/movies')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())
app.use(express.static('static'))

const PORT = 8080

global.movieList = [{
    title: 'test',
    description: 'test desc',
    genre: 'action',
    posterURL: 'swag.com',
    id: 1
}]

global.movieDetails = []



app.use('/movies', movieRouter)

app.listen(PORT, () => {
    console.log('server running')
})