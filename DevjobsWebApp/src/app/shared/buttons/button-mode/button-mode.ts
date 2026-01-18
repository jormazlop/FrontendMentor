import { Component, DOCUMENT, inject } from '@angular/core';
import { Moon } from './moon/moon';
import { Sun } from './sun/sun';

@Component({
  selector: 'button-mode',
  imports: [Moon, Sun],
  templateUrl: './button-mode.html',
  styleUrl: './button-mode.scss',
})
export class ButtonMode {
  private readonly document = inject(DOCUMENT);

  constructor() {
    this.onChange(false);
  }

  onChange(checked: boolean): void {
    this.document.body.classList = '';
    const cssClass = checked ? 'dark' : 'light';
    this.document.body.classList.add(cssClass);
  }
}
