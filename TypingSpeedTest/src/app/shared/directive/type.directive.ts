import { Directive, HostListener, input, output, signal } from '@angular/core';

@Directive({
  selector: '[type]',
})
export class TypeDirective {

  type = input.required<string[]>();
  typeChange = output<string[]>();

  @HostListener('document:keyup', ['$event']) keyup(event: KeyboardEvent) {
    this.type().push(event.key);
    const res = [...this.type()];
    this.typeChange.emit(res);
  }

}
