// shared/alumno.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private alumnos: any[] = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 20, email: 'juan@example.com' },
    { nombre: 'Ana', apellido: 'Gómez', edad: 22, email: 'ana@example.com' },
  ];

  getAlumnos() {
    return this.alumnos;
  }

  addAlumno(alumno: any) {
    this.alumnos.push(alumno);
  }
}
