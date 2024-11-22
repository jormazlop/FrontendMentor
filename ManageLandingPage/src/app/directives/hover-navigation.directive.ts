import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[hoverNav]',
  standalone: true
})
export class HoverNavigationDirective {

  @HostBinding('style.color') color = 'var(--dark-blue)';
  @HostBinding('style.opacity') opacity = 1;
  @HostBinding('style.transition-duration') transition = '0.25s';

  @HostListener('mouseover')
  onMouseOver() {
    this.opacity = 0.5;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.opacity = 1;
  }

}
