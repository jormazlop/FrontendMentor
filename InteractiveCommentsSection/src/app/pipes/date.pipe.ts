import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'date',
  standalone: true
})
export class DatePipe implements PipeTransform {

  transform(date: string): string {
    return formatDistance(new Date(date), new Date()) + ' ago';
  }

}
