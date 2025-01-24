import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../shared/admin.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  alumnos: any[] = [];
  clases: any[] = [];
  cursos: any[] = [];
  displayedColumnsAlumnos: string[] = ['nombre', 'apellido', 'email'];
  displayedColumnsClases: string[] = ['nombre', 'cantidadAlumnos'];
  displayedColumnsCursos: string[] = ['nombre', 'nivel'];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    // Suscribirse a los observables del AdminService para obtener los datos
    this.adminService.obtenerAlumnos().subscribe((data) => {
      this.alumnos = data;
    });

    this.adminService.obtenerClases().subscribe((data) => {
      this.clases = data;
    });

    this.adminService.obtenerCursos().subscribe((data) => {
      this.cursos = data;
    });
  }
}
