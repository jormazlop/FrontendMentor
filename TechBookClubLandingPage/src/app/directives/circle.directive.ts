import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[circle]'
})
export class CircleDirective {

  @HostBinding('style.background-image') bgImage = `url('/images/pattern-circle.png')`;
  @HostBinding('style.background-size') bgSize = `100% 100%`;

}
