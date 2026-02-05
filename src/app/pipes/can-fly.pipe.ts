import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
  standalone: true,
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Puede volar' : 'No Puede volar';
  }

}
