import { Component, input } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-input-checkbox',
  imports: [FormField],
  templateUrl: './input-checkbox.html',
  styleUrl: './input-checkbox.scss',
})
export class InputCheckbox {
  name = crypto.randomUUID();
  field = input.required<FieldTree<string, string>>();
  options = input<string[]>(['All goals', 'In progress']);
}
