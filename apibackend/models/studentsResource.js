const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    // matric_no: {
    //     type: String,
    //     default: 
    // },
    title: {
        type: String
    },    
    first_name: {
        type: String,
        required: 'First Name (first_name) is required please'
    },    
    last_name: {
        type: String,
        required: 'Last Name (last_name) is required please'
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
    // hall_of_residence:{
    //     type: String,
    //     default: ;
    // },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Student', StudentSchema);