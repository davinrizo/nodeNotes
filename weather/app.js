const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=184e621929638ddfe3720394fb6f920e&query=45.000000,%20-63.000000&units=s'

request({
    url: url,
    json: true
}, (error, response) => {
    error ?
        console.log('Toni Hawk is skating now') :
        console.log(`${response.body.current.weather_descriptions[0]}. Temperature: ${response.body.current.temperature} K, feels like: ${response.body.current.feelslike} K`)
})

const curl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGF2aW5yaXpvIiwiYSI6ImNrbXpvaTV2ZjBid28ydHZ2d2FwNzV2eTYifQ.NQHazUeb4Uc7ilTOslF4bg&limit=1'

request({
    url: curl,
    json: true
}, (error, response) => {
    error ?
        console.log('Wakanda forever') :
        console.log(response.body.features[0].center)
})