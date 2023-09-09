import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projects'
})
export class ProjectsPipe implements PipeTransform {

  transform(value: number): string {

    if (value === Infinity) {
      return 'Unlimited Projects';
    }

    return value.toString().concat(' Projects');
  }

}
