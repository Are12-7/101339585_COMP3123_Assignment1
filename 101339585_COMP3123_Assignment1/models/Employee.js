// Carlos Arellano - 101339585

const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true,
        maxlength: 100

    },
    last_name: {
        type: String,
        require: true,
        maxlength: 50

    },
    email: {
        type: String,
        unique: true,
        maxlength: 50

    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        maxlength: 25
    },
    salary: {
        type: Number,
        require: true
    }
})
const Employees = mongoose.model("Employees", EmployeeSchema)
module.exports = Employees






