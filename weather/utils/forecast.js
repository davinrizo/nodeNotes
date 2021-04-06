const request = require('request')

forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=184e621929638ddfe3720394fb6f920e&query=${lat},%20${long}`

    request({
        url,
        json: true
    }, (error, response) => {
        const {
            weather_descriptions,
            temperature,
            feelslike
        } = response.body.current
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                Weather: weather_descriptions,
                Temperature: temperature,
                Feelslike: feelslike
            })
        }
    })

}

module.exports = forecast