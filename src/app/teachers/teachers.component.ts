import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeacherComponent implements OnInit {
  public teacherSelected: Teacher;
  public teacherForm: FormGroup;
  public modalRef?: BsModalRef;

  public titulo = 'Professores';

  @Input() showActions = true;

  public teachers = [
    { id: 1, name: "Pedro", discipline: "Português" },
    { id: 2, name: "Silvia", discipline: "Matemática" },
    { id: 3, name: "Carlos", discipline: "Biologia" },
    { id: 4, name: "Vilma", discipline: "História" },
    { id: 5, name: "Lazaro", discipline: "Programação" }
  ]

  constructor(private formBuilder: FormBuilder, private modalService: BsModalService) {
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

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
