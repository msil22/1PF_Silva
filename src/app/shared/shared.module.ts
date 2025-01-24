import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { TitleSizeDirective } from './title-size.directive';

@NgModule({
  declarations: [FullNamePipe, TitleSizeDirective],
  imports: [CommonModule],
  exports: [FullNamePipe, TitleSizeDirective]
})
export class SharedModule {}
