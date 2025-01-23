import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CoreModule } from './core/core.module';
import { FullNamePipe } from './shared/full-name.pipe';
import { TitleSizeDirective } from './shared/title-size.directive';
import { AlumnosModule } from './features/alumnos/alumnos.module';


@NgModule({
  declarations: [
    AppComponent,
    FullNamePipe,
    TitleSizeDirective
  ],
  imports: [
    BrowserAnimationsModule,
    AlumnosModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }