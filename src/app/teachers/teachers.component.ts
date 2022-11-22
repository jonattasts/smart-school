import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeacherComponent implements OnInit {
  public titulo = 'Professores';
  public teacherSelected: Teacher;

  public teachers = [
    { id: 1, name: "Pedro", discipline: "Português" },
    { id: 2, name: "Silvia", discipline: "Matemática" },
    { id: 3, name: "Carlos", discipline: "Biologia" },
    { id: 4, name: "Vilma", discipline: "História" },
    { id: 5, name: "Lazaro", discipline: "Programação" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public teacherSelect(teacher: Teacher) {
    this.teacherSelected = teacher;
  }

  public voltar() {
    this.teacherSelected = null;
  }
}
