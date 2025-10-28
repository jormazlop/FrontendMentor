import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[tag]'
})
export class Tag {

  @HostBinding('style') get style() {
    return {
      'background-color': 'var(--orange-500)',
      'border-radius': '6px',
      'color': 'var(--neutral-900)',
      'padding': '0.2rem 0.6rem',
      'width': 'fit-content'
    };
  }
}
