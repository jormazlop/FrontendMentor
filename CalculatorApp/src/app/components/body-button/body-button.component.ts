import { NgClass } from '@angular/common';
import { Component, HostListener, input, output } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-body-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './body-button.component.html',
  styleUrl: './body-button.component.scss'
})
export class BodyButtonComponent {

  onClick = output<string | number>();

  type = input<'primary' | 'secondary' | 'tertiary'>('primary');

  value = input.required<number | string>();

  onClickValue(): void {
    this.onClick.emit(this.value());
  }

  constructor() {
    fromEvent(document, 'keydown').subscribe(e => {

      if(e instanceof KeyboardEvent) {

        if(e.key == this.value() ||
          (e.key === '*' && this.value() === 'x') ||
          (e.key === 'Enter' && this.value() === '=') ||
          (e.key === 'Delete' && this.value() === 'RESET') ||
          (e.key === 'Backspace' && this.value() === 'DEL')) {
          this.onClickValue();
        }

        if (e.key == 'Enter') {
          e.preventDefault();
        }
      }


    });
  }

}
