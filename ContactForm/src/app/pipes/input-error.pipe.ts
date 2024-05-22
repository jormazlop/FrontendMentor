import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'error',
  standalone: true
})
export class InputErrorPipe implements PipeTransform {

  transform(errors: ValidationErrors): string {

    let message = '';

    if (errors["required"]) {
      message = 'This field is required';
    }
    if (errors["email"]) {
      message = 'Please enter a valid email address';
    }
    return message;
  }

}
