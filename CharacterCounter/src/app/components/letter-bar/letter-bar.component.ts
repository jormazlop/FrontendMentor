import { DecimalPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-letter-bar',
  imports: [DecimalPipe],
  templateUrl: './letter-bar.component.html',
  styleUrl: './letter-bar.component.scss'
})
export class LetterBarComponent {
  char = input.required<[string, number]>();
  total = input.required<number>();

  percentage = computed(() => {
    return (this.char()[1] / this.total()) * 100;
  });
}
