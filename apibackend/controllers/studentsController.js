const mongoose = require('mongoose'),
//Student = mongoose.model('Student');
Student = require('../models/studentsResource');

function getAllStudentsResource(req, res, next){
    Student.find({}, (err, students)=>{
        if (err){
            res.status(403).json({status: 403, message: 'Students Resource could not be retrieved', error: err});
        }
        res.status(200).json({status: 200, message: 'Students Resource successfully retrieved', students: students});
    });
};

function getStudentResource(req, res, next){
    Student.findById(req.params.id, (err, student)=>{
        if (err){
            res.status(403).json({status: 403, message: `Student Resource with id ${req.params.id} could not be retrieved`, error: err});
        }
        res.status(200).json({status: 200, message: 'Student Resource successfully retrieved', students: students});
    });
};

function createStudentResource(req, res, next){
    let newStudentResource = new Student(req.body);
    newStudentResource.save((err, student)=>{
        if(err){
            res.status(403).json({status: 403, message: 'Student Resource could not be created', error: err});
        }
        res.status(200).json({status: 201, message: 'Student Resource successfully created', student: student});
    });
};

function updateStudentResource(req, res, next){
    Student.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, student)=>{        
        if(err){
            res.status(403).json({status: 403, message: 'Student Resource could not be updated', error: err});
        }
        res.status(200).json({status: 201, message: 'Student Resource successfully updated', student: student});
    });
};

function deleteStudent(req, res, next){
    Student.remove({_id: req.params.id}, req.body, (err, result)=>{
        if (err){
            res.status(403).json({status: 403, message: 'Student Resource could not be deleted', error: err});
        }
        res.status(200).json({status: 200, message: 'Student Resource successfully deleted', result: result});
    });
};

module.exports = {
    getAllStudentsResource: getAllStudentsResource,
    getStudentResource: getStudentResource,
    createStudentResource: createStudentResource,
    updateStudentResource: updateStudentResource,
    deleteStudent: deleteStudent
}