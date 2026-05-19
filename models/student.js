const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema

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
        type: String, 
        required: true,
    },
    Fees: {
        type: Number,
        required: true,
        min: 0,
    }
})

  
const Student = mongoose.model('student', studentSchema)
module.exports = Student;