import { Directive, output } from '@angular/core';

@Directive({
  host: {
    role: 'button',
    tabindex: '0',
    '(click)': 'activate()',
    '(keydown.enter)': 'activate()',
    '(keydown.space)': 'activate()',
  },
})
export class KeyboardButtonDirective {
  readonly pressed = output<void>();

  activate() {
    this.pressed.emit();
  }
}
