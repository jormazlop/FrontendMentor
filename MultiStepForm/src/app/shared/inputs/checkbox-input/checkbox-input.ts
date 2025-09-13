import { Component, computed, effect, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AbstractInput } from '@inputs/abstract-input/abstract-input';

@Component({
  selector: 'app-checkbox-input',
  imports: [FormsModule],
  templateUrl: './checkbox-input.html',
  styleUrl: './checkbox-input.scss'
})
export class CheckboxInput extends AbstractInput {

  title = input.required<string>();
  subtitle = input.required<string>();
  price = input.required<string>();
  value = computed(() => this.title().toLowerCase() + ',' + this.price());

  model = model(false);

  constructor() {
    super();

    effect(() => {
      let values = this.innerControl.value as string[];
      if(this.model()) {

        values.push(this.value());
        this.innerControl.setValue(values);
      }
      else {
        values = values.filter(val => val != this.value());
        this.innerControl.setValue(values);
      }

    });
  }

}
