import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentService]
})
export class StudentsComponent implements OnInit {
  students: Student[];
  student: Student;
  matric_no: string;
  title: string;
  first_name: string;
  surname: string;
  middle_name: string;
  gender: string;
  phone_no: string;
  email: string;
  department: string;
  programme: string;
  level: string;
  marital_status: string;
  date_of_birth: string;
  religion: string;
  nationality: string;
  state_of_origin: string;
  hall_of_residence: string;
  comments: string;

  constructor(private studentService: StudentService) {}

  createStudent(){
    const newStudent = {
      title: this.title,
      surname: this.surname,
      first_name: this.first_name,
      middle_name: this.middle_name,
      gender: this.gender,
      phone_no: this.phone_no,
      email: this.email,
      department: this.department,
      programme: this.programme,
      level: this.level,
      marital_status: this.marital_status,
      date_of_birth: this.date_of_birth,
      religion: this.religion,
      nationality: this.nationality,
      state_of_origin: this.state_of_origin,
      comments: this.comments
    }
    this.studentService.createStudent(newStudent)
        .subscribe(student => {
          this.students.push(student);
          //Get Immediately
          this.studentService.listStudents()
          .subscribe(students => {
          this.students = students});
        })
  }

  deleteStudent(id:any){
    let students = this.students;
    this.studentService.deleteStudent(id)
        .subscribe(data => {
          if (data.n == 1){
            for (let i = 0; i < students.length; i++){
              if (students[i]._id == id){
                students.splice(i, 1);
              }
            }
          }
        })
  }

  hack(val) {
    console.log('Before:');
    console.log(val);
    val = Array.from(val);
    console.log('After:');
    console.log(val);
    //return val;
  }

  ngOnInit() {
    this.studentService.listStudents()
        .subscribe(students => {
        this.students = students});
  }

}