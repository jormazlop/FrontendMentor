import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {

  transform(value: ValidationErrors | null): string {

    let message = '';

    if(value?.["email"]) message = 'The email format is invalid';

    if(value?.["phone"]) message = 'The phone format is invalid';

    if(value?.["required"]) message = 'This field is required';

    return message;
  }

}
