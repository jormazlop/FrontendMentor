import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[letterSpacing]'
})
export class SpacingDirective {

  @HostBinding('style.letter-spacing') letterSpacing = '1.5px';
  @HostBinding('style.text-align') textAlign = 'center';

  constructor() { }


}
