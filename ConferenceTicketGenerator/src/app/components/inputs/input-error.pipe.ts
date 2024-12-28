import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'error'
})
export class InputErrorPipe implements PipeTransform {

  transform(value: ValidationErrors): string {
    let res = '';

    const errors = Object.keys(value);

    errors.forEach((error) => {
      switch (error) {
        case 'required':
          res = 'This field is required';
          break;
        case 'email':
          res = 'Please enter a valid email address';
          break;
        case 'github':
          res = 'Please enter a valid github username';
          break;
        case 'size':
          res = 'File too large. Please upload a photo under 5MB';
          break;
      }
    });

    return res;
  }

}
