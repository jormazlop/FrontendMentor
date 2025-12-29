import { Directive, HostListener, input, output, signal } from '@angular/core';

@Directive({
  selector: '[type]',
})
export class TypeDirective {
  type = input.required<string[]>();
  typeChange = output<string[]>();

  correctCharacter = input.required<string>();

  incorrectCount = input.required<number>();
  incorrectCountChange = output<number>();

  @HostListener('document:keyup', ['$event']) keyup(event: KeyboardEvent) {
    if (event.key == 'Shift') {
      return;
    }

    if(event.key == 'Backspace') {
      this.type().pop();
      const res = [...this.type()];
      this.typeChange.emit(res);
      return;
    }

    if (event.key != this.correctCharacter()) {
      this.incorrectCountChange.emit(this.incorrectCount() + 1);
    }

    this.type().push(event.key);
    const res = [...this.type()];
    this.typeChange.emit(res);
  }
}
