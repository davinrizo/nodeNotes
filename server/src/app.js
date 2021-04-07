const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
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