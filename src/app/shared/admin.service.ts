import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private alumnos: any[] = [];
  private clases: any[] = [];
  private cursos: any[] = [];

  alumnos$ = new BehaviorSubject(this.alumnos);
  clases$ = new BehaviorSubject(this.clases);
  cursos$ = new BehaviorSubject(this.cursos);

  agregarAlumno(alumno: any) {
    this.alumnos.push(alumno);
    this.alumnos$.next(this.alumnos);
  }

  agregarClase(clase: any) {
    this.clases.push(clase);
    this.clases$.next(this.clases);
  }

  agregarCurso(curso: any) {
    this.cursos.push(curso);
    this.cursos$.next(this.cursos);
  }

  obtenerAlumnos() {
    return this.alumnos$.asObservable();
  }

  obtenerClases() {
    return this.clases$.asObservable();
  }

  obtenerCursos() {
    return this.cursos$.asObservable();
  }
}
