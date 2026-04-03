import { Component, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';
import { StyledField } from '@shared/directives/styled-field';

@Component({
  selector: 'payapi-input-checkbox',
  imports: [StyledField],
  templateUrl: './input-checkbox.html',
  styleUrl: './input-checkbox.scss',
})
export class InputCheckbox {
  field = input.required<FieldTree<boolean, string>>();

  label = input('Label');
}
