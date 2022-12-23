import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  protected serviceUrl = environment.serviceUrl;
  protected webApiSuffix: string = '/api/Student';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(`${this.serviceUrl}${this.webApiSuffix}`);
  }

  public getById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.serviceUrl}${this.webApiSuffix}/${id}`);
  }
}
