import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentComponent implements OnInit {
  public titulo = 'Alunos';
  public studentSelected: Student;

  public students = [
    { id: 1, name: "Joao", lastName: "Santos", phone: 33225566 },
    { id: 2, name: "Paulo", lastName: "Silva", phone: 33225566 },
    { id: 3, name: "Maria", lastName: "Ferreira", phone: 33225566 },
    { id: 4, name: "Julia", lastName: "Souza", phone: 33225566 },
    { id: 5, name: "Paula", lastName: "Costa", phone: 33225566 },
    { id: 6, name: "Carla", lastName: "Olvieira", phone: 33225566 },
    { id: 7, name: "Fernanda", lastName: "Melo", phone: 33225566 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public studentSelect(student: Student) {
    this.studentSelected = student;
  }

  public voltar() {
    this.studentSelected = null;
  }

}
