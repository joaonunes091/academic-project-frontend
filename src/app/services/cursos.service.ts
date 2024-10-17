import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment'

export interface Curso {
  id?: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  
  apiUrl = `${environment.apiUrl}/cursos`;

  constructor(private http: HttpClient) { }

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);
  }

  addCurso(curso: Curso): Observable<Curso> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Curso>(this.apiUrl, curso, { headers });
  }

  deleteCurso(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  } 

}
