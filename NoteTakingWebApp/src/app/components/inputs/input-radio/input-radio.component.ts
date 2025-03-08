import { Component, input } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'note-input-radio',
  imports: [ReactiveFormsModule],
  templateUrl: './input-radio.component.html',
  styleUrl: './input-radio.component.scss'
})
export class InputRadioComponent extends AbstractInputComponent {

  label = input.required<string>();
  subLabel = input.required<string>();

  value = input.required<string>();
}
