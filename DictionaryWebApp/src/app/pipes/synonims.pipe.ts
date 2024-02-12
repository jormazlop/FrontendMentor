import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'synonims',
  standalone: true
})
export class SynonimsPipe implements PipeTransform {

  transform(synonims: string[]): string {
    return synonims.join(" ");
  }

}
