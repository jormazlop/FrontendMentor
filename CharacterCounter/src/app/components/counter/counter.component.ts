import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [NgClass],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count = input.required<string>();
  text = input.required<string>();

  type = input.required<'word' | 'sentence' | 'character'>();
}
