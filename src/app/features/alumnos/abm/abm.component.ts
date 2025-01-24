import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../shared/admin.service'; 

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.scss']
})
export class AbmComponent {
  alumnoForm: FormGroup;
  claseForm: FormGroup;
  cursoForm: FormGroup;

  constructor(private fb: FormBuilder, private adminService: AdminService) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.claseForm = this.fb.group({
      nombre: ['', Validators.required],
      cantidadAlumnos: ['', [Validators.required, Validators.min(1)]],
    });

    this.cursoForm = this.fb.group({
      nombre: ['', Validators.required],
      nivel: ['', Validators.required],
    });
  }

  guardarAlumno() {
    if (this.alumnoForm.valid) {
      this.adminService.agregarAlumno(this.alumnoForm.value);
      this.alumnoForm.reset();
    }
  }

  guardarClase() {
    if (this.claseForm.valid) {
      this.adminService.agregarClase(this.claseForm.value);
      this.claseForm.reset();
    }
  }

  guardarCurso() {
    if (this.cursoForm.valid) {
      this.adminService.agregarCurso(this.cursoForm.value);
      this.cursoForm.reset();
    }
  }
}
