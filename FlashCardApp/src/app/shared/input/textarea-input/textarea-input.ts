import { Component, computed, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';
import { StyledField } from '@shared/directives/styled-field';
import { IconError } from '@shared/icons/icon-error/icon-error';

@Component({
  selector: 'textarea-input',
  imports: [StyledField, IconError],
  templateUrl: './textarea-input.html',
  styleUrl: './textarea-input.scss',
})
export class TextareaInput {
  field = input.required<FieldTree<string, string>>();
  errors = computed(() => this.field()().dirty() ? this.field()().errors() : []);
  label = input('Title');
  placeholder = input('Placeholder text');
  protected id = "text-input" + Math.random().toString(16).slice(2);
}
