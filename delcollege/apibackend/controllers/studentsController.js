const mongoose = require('mongoose');
//Student = mongoose.model('Student');
Student = require('../models/studentsResource');

function createStudentResource(req, res, next){
    let newStudentResource = new Student(req.body);
    newStudentResource.save((err, student)=>{
        if(err){
            res.status(403).json({status: 403, message: 'Student Resource could not be created', error: err});
        }
        res.status(200).json({status: 201, message: 'Student Resource successfully created', student: student});
    });
};

function getAllStudentsResource(req, res, next){
    Student.find({}, (err, students)=>{
        if (err){
            res.status(403).json({status: 403, message: 'Students Resource could not be retrieved', error: err});
        }
        res.status(200).json(students);
    });
};

function getStudentResource(req, res, next){
    Student.findById(req.params.id, (err, student)=>{
        if (err){
            res.status(403).json({status: 403, message: `Student Resource with id ${req.params.id} could not be retrieved`, error: err});
        }
        res.status(200).json({status: 200, message: 'Student Resource successfully retrieved', student: student});
    });
};

function updateStudent(req, res, next){
    Student.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, student)=>{        
        if(err){
            res.status(403).json({status: 403, message: 'Student could not be updated', error: err});
        }
        res.status(200).json({status: 201, message: 'Student successfully updated', student: student});
    });
};

function deleteStudent(req, res){
    Student.remove({_id: req.params.id}, function(err, result){
        if (err){
            res.status(403).json({status: 403, message: 'Student could not be deleted', error: err});
        }
        res.status(200).json({status: 200, message: 'Student successfully deleted', result: result});
    });
};


module.exports = {
    createStudentResource: createStudentResource,
    getAllStudentsResource: getAllStudentsResource,
    getStudentResource: getStudentResource,
    updateStudent: updateStudent,
    deleteStudent: deleteStudent
}