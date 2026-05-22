const { default: mongoose, deleteModel } = require("mongoose");

const schema = mongoose.Schema

function getinqueryDate(){
    const date = new Date()
    const monthNamesArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = monthNamesArray[date.getMonth()]
    return `${date.getDate()} ${currentMonth} ${date.getFullYear()}` 

}

const studentSchema = new schema({
    studentName: {
        type: String,
        required: true,
    },
    parentName: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
       
    },
    address: {
        type: String,
        required: true
    },
    schoolName: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true,
    },
    subject: {
        type: [String], 
        required: true,
    },
    Fees: {
        type: Number,
        required: true,
    },
    inqueryDate:  {
        type: String,
        default: getinqueryDate,    
    },
    demoClassDate: {
        type: String,
    },
    joiningDate: {
        type: String,
    }

})


  
const Student = mongoose.model('student', studentSchema)
module.exports = Student;