const mongoose = require('mongoose');
StudentController = require('../controllers/studentsController');
let matric = 17000;
let rand = Math.floor((Math.random() * 6) + 1);
let randd = Math.floor((Math.random() * 100) + 1);
let halls = ['Amina', 'Makama', 'Moremi', 'Sodeinde', 'Jaja', 'El-Kanemi'];
let halls_f = ['Amina', 'Makama', 'Moremi'];
let halls_m = ['Sodeinde', 'Jaja', 'El-Kanemi'];

const StudentSchema = new mongoose.Schema({
    matric_no: {
        type: String,
        default: matric + randd
    },
    title: {
        type: String
    },    
    surname: {
        type: String,
        required: 'Surname (surname) is required please'
    },
    first_name: {
        type: String,
        required: 'First Name (first_name) is required please'
    },    
    middlename: {
        type: String
    },
    gender: {
        type: String,
        required: 'Gender (gender) is required please'
    },
    phone_no: {
        type: String,
        required: 'Phone Number (phone_no) is required please'
    },
    email: {
        type: String,
        required: 'Email (email) is required please'
    },
    department: {
        type: String,
        required: 'Department (department) is required please'
    },
    programme: {
        type: String,
        required: 'Programme (programme) is required please'
    },
    level: {
        type: String,
        required: 'Level (level) is required please'
    },
    marital_status: {
        type: String,
        required: 'Marital Status (marital_status) is required please'
    },
    date_of_birth: {
        type: String,
        required: 'Date of Birth (date_of_birth) is required please'
    },
    religion: {
        type: String
    },
    nationality: {
        type: String,
        required: 'Nationality (nationality) is required please'
    },
    state_of_origin: {
        type: String,
        required: 'State of Origin (state_of_origin) is required please'
    },
    hall_of_residence:{
        type: String,
        default: halls[rand]
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

function getMatricNo(){
    this.matric++;
}

function getHall(){
    rand = Math.floor((Math.random() * 3) + 1);
    if (StudentSchema.gender == 'Female' || StudentSchema.gender == 'female' ){
        return this.halls_f[rand];
    }
    else {
        return this.halls_m[rand];
    }
}

module.exports = mongoose.model('Student', StudentSchema);