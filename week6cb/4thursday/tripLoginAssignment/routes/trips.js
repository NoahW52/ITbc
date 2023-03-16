const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('trips', {arr: trips})
})

router.get('/addtrip', (req, res) => {
    res.render('addtrip')
})

router.post('/addtrip', (req, res) => {
    const title = req.body.title
    const imageURL = req.body.imageURL
    const departure = req.body.departure
    const arrive = req.body.arrive
    const newtrip = {
        title: title, 
        imageURL: imageURL, 
        departure: departure,
        arrive: arrive,
        id: trips.length + 1,
        username: req.session.username
    }
    trips.push(newtrip)
    res.redirect('/trips')
})

router.post('/delete', (req, res) => {
    const id = parseInt(req.body.id)
    trips = trips.filter((trip) => trip.id !== id)
    res.redirect('/trips')
})

module.exports = router