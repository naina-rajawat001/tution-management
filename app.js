const express = require("express")
const app = express()
const path = require ("path")
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const port = 8000
const Student = require('./models/student')

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")))
app.use(methodOverride('_method'))

main()
.then(()=> console.log('connection successful'))
.catch(err => console.log(err))

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/tmc")
    console.log("mongoose connection successful")
}



app.get("/listall", async (req, res) => {
    let students = await Student.find({})
    res.render('./index.ejs', { students })
})


app.get('/new', (req, res) => {
    res.render('./new.ejs')
})


app.post('/listall', async(req, res) => {
    let formdata = req.body
    let newStudent = await Student.insertOne(formdata)
    res.redirect('/listall')
})


app.get('/listall/:id/edit', async(req, res) => {
    let {id} = req.params
    let selectedStudentData = await Student.findById(id)
    res.render('./edit.ejs', {selectedStudentData})

})


app.put('/listall/:id', async(req, res) => {
    let {id} = req.params
    let updatedDetails = await Student.findByIdAndUpdate(id, {...req.body})
    
    res.redirect(`/listall/${id}`)
})


app.get('/listall/:id', async(req, res) => {
    let {id} = req.params
    let selectedStudentData = await Student.findById(id)
    res.render('./show.ejs', {selectedStudentData})
})


app.delete('/listall/:id', async (req, res) => {
    let {id} = req.params
    let deletedStudent = await Student.findByIdAndDelete(id)
    console.log(deletedStudent)
    res.redirect('/listall')
})


app.listen(port, ()=> {
    console.log(`listing on port ${port}`)
})