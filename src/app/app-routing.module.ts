import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: 'alumnos', loadChildren: () => import('./features/alumnos/alumnos.module').then(m => m.AlumnosModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
