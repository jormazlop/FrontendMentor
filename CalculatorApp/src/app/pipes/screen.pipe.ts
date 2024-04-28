import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'screen',
  standalone: true
})
export class ScreenPipe implements PipeTransform {

  transform(value: string): string {

    const numericValue = +value.trimStart();
    return numericValue.toString();
  }

}
