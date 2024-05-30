import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mode',
  standalone: true
})
export class ModePipe implements PipeTransform {

  transform(mode: 'light' | 'dark'): string {
    switch(mode) {
      case 'light':
        return 'Change to Dark Mode';
      case 'dark':
        return 'Change to Light Mode';
    }
  }

}
