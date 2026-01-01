import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalBest',
})
export class PersonalBestPipe implements PipeTransform {

  transform(value?: number): string {


    return value != undefined ? value.toString() : '-';
  }

}
