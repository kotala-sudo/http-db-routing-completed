import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-student.component.html',
  styleUrl: './add-new-student.component.css'
})
export class AddNewStudentComponent {
  nextID: number = 1000; //next id to assign
  sName!: string;
  sAge!: number;

  constructor(private stdService: StudentService) {}

  ngOnInit() {}

  addNewStudent() {
    const newStudent: Student = {
      id: ++this.nextID,
      name: this.sName,
      age: this.sAge,
    };
    this.stdService.addStudent(newStudent).subscribe(
      data => console.log(data)
    )

  }
}
    