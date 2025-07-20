import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  imports: [],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss'
})
export class Stepper {
  wrong = input.required<number>();

  progress = computed(() => (this.wrong() / 8) * 100);
}
