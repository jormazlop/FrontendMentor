import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPipe'
})
export class NumberPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if(!value) {
      return '';
    }

    let transformedValue = String(value);

    const valueNoSpaces = String(value).replace(' ', '');

    if (valueNoSpaces.length > 4 && valueNoSpaces.length < 7) {
      transformedValue = valueNoSpaces.slice(0,4) + ' ' + valueNoSpaces.slice(4,8);
    } else if (valueNoSpaces.length > 7 && valueNoSpaces.length < 13) {
      transformedValue = valueNoSpaces.slice(0,4) + ' ' + valueNoSpaces.slice(4,8) + ' ' + valueNoSpaces.slice(9,13);
    } else if (valueNoSpaces.length > 13 && valueNoSpaces.length < 18) {
      transformedValue = valueNoSpaces.slice(0,4) + ' ' + valueNoSpaces.slice(4,8) + ' ' + valueNoSpaces.slice(9,13) + ' ' + valueNoSpaces.slice(14,18);
    }

    return transformedValue;

  }

}
