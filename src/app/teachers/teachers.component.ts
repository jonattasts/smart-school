import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeacherComponent implements OnInit {
  public titulo = 'Professores';
  public teacherSelected: string;

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

  public teacherSelect(teacher: any) {
    this.teacherSelected = teacher.name;
  }

  public voltar() {
    this.teacherSelected = '';
  }
}
