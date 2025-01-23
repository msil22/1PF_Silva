import { Component } from '@angular/core';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  alumnos = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 20, email: 'juan@example.com' },
    { nombre: 'Ana', apellido: 'Gómez', edad: 22, email: 'ana@example.com' }
  ];

  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'email'];
}