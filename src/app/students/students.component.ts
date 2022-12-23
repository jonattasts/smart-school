import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Student } from '../models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentComponent implements OnInit {
  public studentSelected: Student;
  public studentForm: FormGroup;
  public modalRef?: BsModalRef;

  public title = 'Alunos';

  @Input() showActions = true;

  public students = [
    { id: 1, name: "Joao", lastName: "Santos", phone: 33225566 },
    { id: 2, name: "Paulo", lastName: "Silva", phone: 33225566 },
    { id: 3, name: "Maria", lastName: "Ferreira", phone: 33225566 },
    { id: 4, name: "Julia", lastName: "Souza", phone: 33225566 },
    { id: 5, name: "Paula", lastName: "Costa", phone: 33225566 },
    { id: 6, name: "Carla", lastName: "Olvieira", phone: 33225566 },
    { id: 7, name: "Fernanda", lastName: "Melo", phone: 33225566 }
  ];

  constructor(private formBuilder: FormBuilder, private modalService: BsModalService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm() {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  public submit() {
    console.log(this.studentForm.value);
  }

  public studentSelect(student: Student) {
    this.studentSelected = student;
    this.studentForm.patchValue(student);
  }

  public voltar() {
    this.studentSelected = null;
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
