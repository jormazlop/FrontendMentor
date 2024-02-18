import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'error',
  standalone: true
})
export class ErrorPipe implements PipeTransform {

  transform(errors: ValidationErrors | null): string {
    if (errors?.["passwordError"]) {
      return errors?.["passwordError"];
    }
    return '';
  }

}
