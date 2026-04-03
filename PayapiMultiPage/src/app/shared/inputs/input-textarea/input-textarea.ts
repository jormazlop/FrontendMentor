import { Component, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';
import { StyledField } from '@shared/directives/styled-field';

@Component({
  selector: 'payapi-input-textarea',
  imports: [StyledField],
  templateUrl: './input-textarea.html',
  styleUrl: './input-textarea.scss',
})
export class InputTextarea {
  field = input.required<FieldTree<string, string>>();

  placeholder = input('placeholder');
}
