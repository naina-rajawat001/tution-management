const express = require("express")
const app = express()
const path = require ("path")
const mongoose = require("mongoose")
const port = 8000
const Student = require('./models/student')

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")))


main()
.then(()=> console.log('connection successful'))
.catch(err => console.log(err))

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/tmc")
    console.log("mongoose connection successful")
}



app.get("/", async (req, res) => {
    let students = await Student.find({})
    console.log(students)
    res.render('./index.ejs', { students })
})


app.get('/new', (req, res) => {
    res.send('add new student')
    // res.render('./new.ejs')
})


app.listen(port, ()=> {
    console.log(`listing on port ${port}`)
})