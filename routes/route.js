//ROUTE
const express = require('express'),
      router = express.Router(),
      StudentController = require('../apibackend/controllers/studentsController');

//get/read all students resource
router.get('/students', StudentController.getAllStudentsResource);
//get/read a single student resource
router.get('/student/:id', StudentController.getStudentResource);
//create a student resource
router.post('/student', StudentController.createStudentResource);
//update a student resource
router.put('/student', StudentController.updateStudentResource);
//delete a student
router.delete('/student/:id', StudentController.deleteStudent);

module.exports = router;