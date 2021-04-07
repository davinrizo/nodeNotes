const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../template')

//setup handlebarsengine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Tont Hawks weather app',
        name: 'Tont Hawk'
    })
})

app.get('/about', (req, res) => {
    res.render('index', {
        title: 'About Tont Hawk',
        name: 'Tont Hawk'
    })
})

app.get('/help', (req, res) => {
    res.render('index', {
        title: 'Please help Tont Hawk',
        name: 'Tont Hawk'
    })
})

app.get('/weather', (req, res) => {
    res.send('Tont Hawk is raining cats and dogs')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})