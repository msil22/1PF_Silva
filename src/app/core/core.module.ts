import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
