import { Component, effect, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-checkbox',
  imports: [FormsModule],
  templateUrl: './input-checkbox.component.html',
  styleUrl: './input-checkbox.component.scss'
})
export class InputCheckboxComponent {

  label = input.required<string>();
  value = model(false);

  clickCheckbox = output<boolean>();

  constructor() {
    effect(() => this.clickCheckbox.emit(this.value()))
  }
}
