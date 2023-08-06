import { Directive, HostBinding, HostListener } from '@angular/core';
import { timer } from 'rxjs';

@Directive({
  selector: '[rotation]'
})
export class RotationDirective {

  private timer$ = timer(1000);
  private active = false;

  constructor() { }

  @HostBinding('style.transform') rotation = 'rotateY(0deg)';
  @HostBinding('style.transition-duration') duration = '0s';

  @HostListener('mouseover')

  onMouseOver() {

    if (!this.active) {
      this.active = true;
      this.duration = '1s';
      this.rotation = 'rotateY(360deg)';

      this.timer$.subscribe(() => {
        this.duration = '0s';
        this.rotation = 'rotateY(0deg)';
        this.active = false;
      });
    }

  }

}
