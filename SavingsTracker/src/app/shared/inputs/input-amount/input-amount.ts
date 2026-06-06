import { Component, input } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';
import { Numeric } from '@shared/directives/numeric';

@Component({
  selector: 'app-input-amount',
  imports: [FormField, Numeric],
  templateUrl: './input-amount.html',
  styleUrl: './input-amount.scss',
})
export class InputAmount {
  name = crypto.randomUUID();
  field = input.required<FieldTree<string, string>>();
  label = input<string>('Label');
  placeholder = input<string>('Placeholder');
}
