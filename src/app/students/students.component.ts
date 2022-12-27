import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Student } from '../models/student';
import { LoadingComponent } from '../loading/loading/loading.component';
import { StudentService } from './../services/student.service';
import { forceWait } from 'src/util/time-util';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentComponent implements OnInit {
  public title = 'Alunos';
  public newStudent = false;
  public showLoading = false;

  public studentSelected: Student;
  public students: Array<Student>;
  public studentForm: FormGroup;
  public modalRef?: BsModalRef;

  @Input() showActions = true;
  @ViewChild('loading', { static: false }) public loadingComponent: LoadingComponent;

  constructor(private formBuilder: FormBuilder, private modalService: BsModalService, private studentService: StudentService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  private async loadStudents() {
    try {
      this.showLoading = true

      await forceWait(750);
      this.students = await this.studentService.getAll().toPromise();

      this.showLoading = false
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
    const action = this.newStudent ? 'save' : 'update';

    this.studentService[action](this.studentForm.value).subscribe(
      () => {
        this.loadStudents();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public deleteStudent(id: number) {
    this.studentService.delete(id).subscribe(
      () => {
        this.loadStudents();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public studentSelect = (student: Student) => {
    this.studentSelected = student;
    this.studentForm.patchValue(student);
    this.newStudent = false;
  }

  public close = () => {
    this.studentSelected = null;
    this.newStudent = false;
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public handleNewStudent = () => {
    this.studentForm.reset();
    this.studentSelected = new Student();
    this.studentForm.patchValue(this.studentSelected);
    this.newStudent = true;
  }
}
