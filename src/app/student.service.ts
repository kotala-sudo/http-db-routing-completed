import { Injectable } from '@angular/core';
import { Student } from './student';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  STUDENTS: Student[] = [];
  studentURL = 'https://studentinfo-2819b-default-rtdb.firebaseio.com/';

  constructor(private router:Router, private http: HttpClient) {}

  addStudent(newStd: Student) {
    return this.http.post(this.studentURL + 'student.json', newStd)
  }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.studentURL + 'student.json')
    .pipe(map(responseData => {
      const studentArray: Student[] = [];
      for(const key in responseData)
        studentArray.push(responseData[key]);
      return studentArray;
    }));
  }

  deleteAll() {
   return this.http.delete(this.studentURL + 'student.json');
  }
}


