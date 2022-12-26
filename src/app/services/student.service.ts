import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  protected serviceUrl = `${environment.serviceUrl}/api/Student`;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(`${this.serviceUrl}`);
  }

  public getById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.serviceUrl}/${id}`);
  }

  public save(student: Student) {
    return this.http.post(`${this.serviceUrl}`, student);
  }

  public update(student: Student) {
    return this.http.put(`${this.serviceUrl}/${student.id}`, student);
  }

  public delete(id: number) {
    return this.http.delete(`${this.serviceUrl}/${id}`);
  }
}
