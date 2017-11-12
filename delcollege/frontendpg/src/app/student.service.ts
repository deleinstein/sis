import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Student} from './student';
import 'rxjs/add/operator/map'; //reactivejs add operator
const port = 8080;

@Injectable() //Methods to be injected into component
export class StudentService {

  constructor(private http: Http) { } //Use HTTP module, the constructor gets Http request as variable to initialize http

  createURL(path){
    let a = document.createElement('a');
    a.href = `window.location.href`;
    console.log(`URL: http://${a.hostname}:${port}${path}`);
    return `http://${a.hostname}:${port}${path}`;
  }

  //create students resource
  createStudent(newStudent){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.createURL('/api/student'), newStudent, {headers: headers})
        .map(res => res.json());
  }

  //list students resource
  listStudents(){
    return this.http.get(this.createURL('/api/students'))
        .map(res => res.json());        
  }

  //show students resource
  showStudent(id){
    return this.http.get(this.createURL(`/api/student/${id}`))
        .map(res => res.json());
  }

  //edit students
  editStudent(student){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.createURL(`/api/student/${student._id}`), student, {headers: headers})
        .map(res => res.json());
  }

  //delete students
  deleteStudent(id){
    return this.http.delete(this.createURL(`/api/student/${id}`))
        .map(res => res.json());
  }
}

