import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentComponent implements OnInit {
  public titulo = 'Alunos';

  public students = [
    {name:"Joao"},
    {name:"Paulo"},
    {name:"Maria"},
    {name:"Julia"},
    {name:"Mariana"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
