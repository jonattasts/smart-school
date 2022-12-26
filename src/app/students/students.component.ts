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
  public title = 'Alunos';
  public newStudent = false;

  public studentSelected: Student;
  public students: Array<Student>;
  public studentForm: FormGroup;
  public modalRef?: BsModalRef;

  @Input() showActions = true;

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
      id: [''],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  public submit() {
    if (this.newStudent) {

    } else {
      this.studentService.update(this.studentForm.value).subscribe(
        () => {
          this.loadStudents();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  public studentSelect(student: Student) {
    this.studentSelected = student;
    this.studentForm.patchValue(student);
    this.newStudent = false;
  }

  public voltar() {
    this.studentSelected = null;
    this.newStudent = false;
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public handleNewStudent() {
    this.studentForm.reset();
    this.newStudent = true;
  }
}
