import { Component, input, signal } from '@angular/core';
import { ArrowComponent } from '@icons/arrow/arrow.component';
import { Accordeon } from './models/accordeon.model';

@Component({
  selector: 'app-accordeon',
  imports: [ArrowComponent],
  templateUrl: './accordeon.component.html',
  styleUrl: './accordeon.component.scss'
})
export class AccordeonComponent {

  accordeon = input.required<Accordeon>();

  show = signal(false);

  last = input(false);

  onShow(): void {
    this.show.update(val => !val);
  }
}
