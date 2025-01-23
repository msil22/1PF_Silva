import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.scss']
})
export class AbmComponent {
  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.alumnoForm.valid) {
      console.log('Datos del alumno:', this.alumnoForm.value);
    }
  }
}
