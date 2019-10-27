const fs = require('fs')

const dataBuffer = fs.readFileSync('playground.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Kanishk"
data.age = 23

const userJSON = JSON.stringify(data)
fs.writeFileSync('playground.json',userJSON)

