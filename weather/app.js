const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=184e621929638ddfe3720394fb6f920e&query=37.8267,-122.4233'

request({
    url: url
}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})