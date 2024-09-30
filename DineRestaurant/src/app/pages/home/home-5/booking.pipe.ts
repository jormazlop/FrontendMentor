import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booking',
  standalone: true
})
export class BookingPipe implements PipeTransform {

  transform(type: 'Family' | 'Special' | 'Social'): string {

    switch (type) {
      case 'Social':
        return 'Social Events';
      case 'Special':
        return 'Special Events';
      case 'Family':
        return 'Family Gathering';
    }
  }

}
