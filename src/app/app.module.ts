import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CoreModule } from './core/core.module';
import { TitleSizeDirective } from './shared/title-size.directive';
import { AlumnosModule } from './features/alumnos/alumnos.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    TitleSizeDirective
  ],
  imports: [
    BrowserAnimationsModule,
    AlumnosModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }