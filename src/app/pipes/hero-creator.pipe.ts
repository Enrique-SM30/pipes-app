
import { Pipe, type PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroCreator',
  standalone: true,
})
export class HeroCreatorPipe implements PipeTransform {

  transform(value: Creator): string {
    return Creator[value];
  }

}
