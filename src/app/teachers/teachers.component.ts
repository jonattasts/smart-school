import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeacherComponent implements OnInit {
  public teacherSelected: Teacher;
  public teacherForm: FormGroup;
  public titulo = 'Professores';

  public teachers = [
    { id: 1, name: "Pedro", discipline: "Português" },
    { id: 2, name: "Silvia", discipline: "Matemática" },
    { id: 3, name: "Carlos", discipline: "Biologia" },
    { id: 4, name: "Vilma", discipline: "História" },
    { id: 5, name: "Lazaro", discipline: "Programação" }
  ]

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm() {
    this.teacherForm = this.formBuilder.group({
      name: ['', Validators.required],
      discipline: ['', Validators.required],
    });
  }

  public submit() {
    console.log(this.teacherForm.value);
  }

  public teacherSelect(teacher: Teacher) {
    this.teacherSelected = teacher;
    this.teacherForm.patchValue(teacher);

  }

  public voltar() {
    this.teacherSelected = null;
  }
}
