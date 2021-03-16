const fs = require('fs')
// const book = {
//     title: 'sashimono technique',
//     author: 'Takiya Mundo'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Rijal'
data.age = 66

const dataJ = JSON.stringify(data)

console.log(data)
fs.writeFileSync('1-json.json', dataJ)