import { Component, computed, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractInput } from '@inputs/abstract-input/abstract-input';

@Component({
  selector: 'app-radio-input',
  imports: [ReactiveFormsModule],
  templateUrl: './radio-input.html',
  styleUrl: './radio-input.scss'
})
export class RadioInput extends AbstractInput {

  type = input.required<string>();
  price = input.required<string>();
  name = input.required<string>();
  image = input.required<string>();

  value = computed(() => this.type().toLowerCase());

  constructor() {
    super();
  }
}
