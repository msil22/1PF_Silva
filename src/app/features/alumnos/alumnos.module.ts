import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ListaComponent } from './lista/lista.component';
import { AbmComponent } from './abm/abm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
  declarations: [
    ListaComponent,
    AbmComponent
  ],
  imports: [
    AlumnosRoutingModule,
    MatSelectModule,
    MatTabsModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    AlumnosRoutingModule,
    MatTableModule,
    SharedModule,
  ],
  exports: [
    ListaComponent,
    AbmComponent
  ]
})
export class AlumnosModule { }