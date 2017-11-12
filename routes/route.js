//ROUTE
const express = require('express'),
      router = express.Router(),
      StudentController = require('../apibackend/controllers/studentsController');

//create a student resource
router.post('/student', StudentController.createStudentResource);
//get/read all students resource
router.get('/students', StudentController.getAllStudentsResource);
//get/read a single student resource
router.get('/student/:id', StudentController.getStudentResource);
//update student
router.put('/student/:id', StudentController.updateStudent);
//delete student
router.delete('/student/:id', StudentController.deleteStudent);

module.exports = router;