import { Component, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';
import { StyledField } from '@shared/directives/styled-field';

@Component({
  selector: 'payapi-input-text',
  imports: [StyledField],
  templateUrl: './input-text.html',
  styleUrl: './input-text.scss',
})
export class InputText {
  field = input.required<FieldTree<string, string>>();

  placeholder = input('placeholder');

}
