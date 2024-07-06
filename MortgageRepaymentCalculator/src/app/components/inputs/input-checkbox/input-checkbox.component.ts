import { Component, input } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputErrorComponent } from '../input-error/input-error.component';

@Component({
  selector: 'app-input-checkbox',
  standalone: true,
  imports: [ReactiveFormsModule, InputErrorComponent],
  templateUrl: './input-checkbox.component.html',
  styleUrl: './input-checkbox.component.scss'
})
export class InputCheckboxComponent extends AbstractInputComponent {

  options = input.required<string[]>();
}
