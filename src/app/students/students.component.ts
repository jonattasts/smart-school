import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentComponent implements OnInit {
  public titulo = 'Alunos';

  public students = [
    {id:1, name:"Joao", lastName:"Santos", phone:"332255"},
    {id:2, name:"Paulo", lastName:"Silva", phone:"332255"},
    {id:3, name:"Maria", lastName:"Ferreira", phone:"332255"},
    {id:4, name:"Julia", lastName:"Olvieira", phone:"332255"},
    {id:5, name:"Mariana", lastName:"Melo", phone:"332255"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
