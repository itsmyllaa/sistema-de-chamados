import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnico } from 'src/app/models/tecnico.model';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {
  private readonly API = 'http://localhost:8080/tecnicos';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(this.API);
  }

  findById(id: number): Observable<Tecnico> {
    return this.http.get<Tecnico>(`${this.API}/${id}`);
  }

  create(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.post<Tecnico>(this.API, tecnico);
  }

  update(id: number, tecnico: Tecnico): Observable<Tecnico> {
    return this.http.put<Tecnico>(`${this.API}/${id}`, tecnico);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
