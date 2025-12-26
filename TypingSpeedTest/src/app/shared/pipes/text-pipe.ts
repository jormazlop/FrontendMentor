import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text',
})
export class TextPipe implements PipeTransform {
  transform(value: string[], match: (boolean | null)[]): string {

    let res = '';
    let index = 0;

    for (const character of value) {
      switch (match.at(index)) {
        case null:
          res += '<span>' + character + '</span>';
          index++;
          continue;
        case true:
          res += '<span class="right-text">' + character + '</span>';
          index++;
          continue;
        case false:
          res += '<span class="wrong-text">' + character + '</span>';
          index++;
      }
    }

    return res;
  }
}
