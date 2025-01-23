import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './features/alumnos/lista/lista.component';
import { AbmComponent } from './features/alumnos/abm/abm.component';

const routes: Routes = [
  { path: '', redirectTo: 'alumnos/lista', pathMatch: 'full' }, 
  { path: 'alumnos/lista', component: ListaComponent },         
  { path: 'alumnos/abm', component: AbmComponent }            
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}