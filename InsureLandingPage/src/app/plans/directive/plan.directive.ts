import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[hoverPlan]'
})
export class PlanDirective {

  @HostBinding('style.transform') transform: string = 'none';
  @HostBinding('style.cursor') cursor: string = 'auto';

  constructor() { }

  @HostListener('mouseover')
  onMouseOver() {
    this.cursor = 'pointer';
    this.transform = 'scale(1.05)';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.cursor = 'auto';
    this.transform = 'none';
  }

}
