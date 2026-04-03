import { Component, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { StyledField } from '@shared/directives/styled-field';

@Component({
  selector: 'payapi-input-mail',
  imports: [StyledField, ButtonPrimary],
  templateUrl: './input-mail.html',
  styleUrl: './input-mail.scss',
})
export class InputMail {
  field = input.required<FieldTree<string, string>>();

  placeholder = input('Enter email address');
}
