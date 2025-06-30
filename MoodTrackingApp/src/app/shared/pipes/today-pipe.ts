import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'today'
})
export class TodayPipe implements PipeTransform {

  transform(date: Date, args: boolean): string {

    let res = args ? `today's` : 'How are you feeling today';

    const today = new Date();

    if(date.getDate() != today.getDate()) {

      const day = date.toLocaleDateString("en-EN", { weekday: 'long' });

      res = args ? day : `How were you feeling ${day}`;
    }

    return res;
  }

}
