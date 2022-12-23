import { StudentService } from './../services/student.service';
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

  public students: Array<Student>;

  constructor(private formBuilder: FormBuilder, private modalService: BsModalService, private studentService: StudentService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.loadStudents()
  }

  private async loadStudents() {
    try {
      this.students = await this.studentService.getAll().toPromise();
    } catch (error) {
      console.log(error);
    }
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
