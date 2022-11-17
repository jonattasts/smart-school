import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeacherComponent implements OnInit {
  public teachers = [
    {name:"Pedro"},
    {name:"Silvia"},
    {name:"Carlos"},
    {name:"Vilma"},
    {name:"Lazaro"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
