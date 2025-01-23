import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  transform(value: { nombre: string; apellido: string }): string {
    return `${value.nombre} ${value.apellido}`;
  }
}



