import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';

@Component({
  selector: 'input-filter',
  imports: [Field],
  templateUrl: './input-filter.html',
  styleUrl: './input-filter.scss',
})
export class InputFilter {
  placeholder = input.required<string>();

  field = input.required<FieldTree<string, string>>();
}
