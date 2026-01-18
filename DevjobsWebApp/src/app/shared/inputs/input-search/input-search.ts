import { Component, input, output } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { Check } from '@shared/images/check/check';
@Component({
  selector: 'input-search',
  imports: [ButtonPrimary, Check, Field],
  templateUrl: './input-search.html',
  styleUrl: './input-search.scss',
})
export class InputSearch {
  search = output();
  field = input.required<FieldTree<boolean, string>>();

  onSearch(): void {
    this.search.emit();
  }
}
