const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=184e621929638ddfe3720394fb6f920e&query=45,-70'

request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()