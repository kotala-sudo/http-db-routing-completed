import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
 studentList: Student[] = [];

  constructor(private stdService: StudentService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.stdService.getStudents().subscribe(
      data => this.studentList = data
    );
  }

  onClearData() {
    this.stdService.deleteAll().subscribe(
      () => this.fetchData()
    );
  }
}

