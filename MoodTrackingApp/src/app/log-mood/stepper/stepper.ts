import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  imports: [],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss'
})
export class Stepper {
  step = input.required<number>();
}
