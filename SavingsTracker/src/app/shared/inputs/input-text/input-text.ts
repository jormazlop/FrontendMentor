import { Component, input } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-input-text',
  imports: [FormField],
  templateUrl: './input-text.html',
  styleUrl: './input-text.scss',
})
export class InputText {
  name = crypto.randomUUID();
  field = input.required<FieldTree<string, string>>();
  label = input<string>('Label');
  placeholder = input<string>('Placeholder');
}
