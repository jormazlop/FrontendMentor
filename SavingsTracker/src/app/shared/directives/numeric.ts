import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumericOnly]',
})
export class Numeric {
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const key = event.key;
    if (!/[0-9.]/.test(key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(key)) {
      event.preventDefault();
    }
  }
}
