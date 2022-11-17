import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentComponent } from './students/students.component';
import { TeacherComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: '', redirectTo:'dashboard', pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'alunos', component: StudentComponent },
  { path: 'professores', component: TeacherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
