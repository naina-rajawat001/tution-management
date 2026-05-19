const mongoose = require('mongoose')
const sampleData = require('./sampledata')
const Student = require('../models/student')


main()
.then(()=> console.log('connection successful'))
.catch(err => console.log(err))

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/tmc")
}

async function initDb () {
    await Student.deleteMany({})
    await Student.insertMany(sampleData)
    console.log('data was initilize')
}

initDb();