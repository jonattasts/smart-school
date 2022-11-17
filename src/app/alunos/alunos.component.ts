import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public alunos = [
    {nome:"Joao"},
    {nome:"Paulo"},
    {nome:"Maria"},
    {nome:"Julia"},
    {nome:"Mariana"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
