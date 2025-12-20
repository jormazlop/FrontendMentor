import { Component, computed, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';
import { StyledField } from '@shared/directives/styled-field';
import { IconError } from '@shared/icons/icon-error/icon-error';

@Component({
  selector: 'text-input',
  imports: [StyledField, IconError],
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss',
})
export class TextInput {
  field = input.required<FieldTree<string, string>>();
  errors = computed(() => this.field()().dirty() ? this.field()().errors() : []);
  placeholder = input('e.g., What is the capital of France?');
  label = input('Question');
  protected id = "text-input" + Math.random().toString(16).slice(2);

}
