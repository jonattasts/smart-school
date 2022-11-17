import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './students/students.component';
import { TeacherComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: 'teachers', component: TeacherComponent },
  { path: 'students', component: StudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
