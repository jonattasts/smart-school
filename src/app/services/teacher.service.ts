import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  protected serviceUrl = `${environment.serviceUrl}/api/Teacher`;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<Teacher>> {
    return this.http.get<Array<Teacher>>(`${this.serviceUrl}`);
  }

  public getById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.serviceUrl}/${id}`);
  }

  public save(teacher: Teacher) {
    return this.http.post(`${this.serviceUrl}`, teacher);
  }

  public update(teacher: Teacher) {
    return this.http.put(`${this.serviceUrl}/${teacher.id}`, teacher);
  }

  public delete(id: number) {
    return this.http.delete(`${this.serviceUrl}/${id}`);
  }
}
