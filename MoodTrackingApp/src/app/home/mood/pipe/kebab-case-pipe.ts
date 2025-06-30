import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabCase'
})
export class KebabCasePipe implements PipeTransform {
  transform(value: string | undefined): string {
    const val = value ?? '';
    return val?.replace('-', ' ');
  }
}
