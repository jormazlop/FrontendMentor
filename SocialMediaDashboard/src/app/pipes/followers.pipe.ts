import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'followers'
})
export class FollowersPipe implements PipeTransform {

  transform(value: number): string | number {

    let pipedValue: string | number = value;

    if (value > 10000) pipedValue = `${value/1000}k`

    return pipedValue;
  }

}
