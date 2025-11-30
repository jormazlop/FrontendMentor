import { Component, effect, input, model } from '@angular/core';
import { FormValueControl, ValidationError } from '@angular/forms/signals';

@Component({
  selector: '',
  template: ''
})
export class AbstractInput implements FormValueControl<string> {
  value = model<string>('');
  disabled = input<boolean>(false);
  required = input<boolean>(false);
  errors = input<readonly ValidationError[]>([]);


  placeholder = input('');
}
