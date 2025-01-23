import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ListaComponent } from './lista/lista.component';
import { AbmComponent } from './abm/abm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FullNamePipe } from '../../shared/full-name.pipe';



@NgModule({
  declarations: [
    ListaComponent,
    AbmComponent,
    FullNamePipe
  ],
  imports: [
    AlumnosRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    AlumnosRoutingModule,
    MatTableModule,
  ],
  exports: [
    ListaComponent,
    AbmComponent
  ]
})
export class AlumnosModule { }


/*
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmComponent } from './abm/abm.component';
import { ListaComponent } from './lista/lista.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; // Para formularios reactivos
import { MatInputModule, MatButtonModule } from '@angular/material'; // Angular Material

@NgModule({
  declarations: [AbmComponent, ListaComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AlumnosModule {}



*/