import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Teacher } from '../models/teacher';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeacherComponent implements OnInit {
  public teacherSelected: Teacher;
  public teacherForm: FormGroup;
  public modalRef?: BsModalRef;

  public title = 'Professores';

  @Input() showActions = true;

  public teachers: Array<Teacher>;

  constructor(private formBuilder: FormBuilder, private modalService: BsModalService, private teacherService: TeacherService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.loadTeachers();
  }

  private async loadTeachers() {
    try {
      this.teachers = await this.teacherService.getAll().toPromise();
    } catch (error) {
      console.log(error);
    }
  }

  private createForm() {
    this.teacherForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      disciplines: ['', Validators.required],
    });
  }

  public submit() {
    this.teacherService.update(this.teacherForm.value).subscribe(
      () => {
        this.loadTeachers();
      },
      (error) => {
        console.log(error);
      }
    );
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
