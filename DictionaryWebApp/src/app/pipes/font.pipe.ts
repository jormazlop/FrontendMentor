import { Pipe, PipeTransform } from '@angular/core';
import { Fonts } from '../services/mode.service';

@Pipe({
  name: 'font',
  standalone: true
})
export class FontPipe implements PipeTransform {

  transform(value: Fonts): string {
    switch(value) {
      case 'Sans Serif':
      case 'Serif':
        return value;
      case 'Monospace':
        return 'Mono';
    }
  }

}
