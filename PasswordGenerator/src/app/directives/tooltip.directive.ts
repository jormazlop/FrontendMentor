import { Directive, ElementRef, HostListener, ViewContainerRef, inject, input } from '@angular/core';
import { TooltipComponent } from '../components/tooltip/tooltip.component';

@Directive({
  selector: '[tooltip]',
  standalone: true
})
export class TooltipDirective {

  tooltip = input.required<string>();

  private elementRef = inject(ElementRef);
  private vcr = inject(ViewContainerRef);

  @HostListener('mouseenter')
  mouseEnter(): void {
    const newComponentRef = this.vcr.createComponent(TooltipComponent);
    newComponentRef.instance.left = this.elementRef.nativeElement.getBoundingClientRect().left - this.elementRef.nativeElement.width / 2;
    newComponentRef.instance.top = this.elementRef.nativeElement.getBoundingClientRect().top + this.elementRef.nativeElement.height + 10;
    newComponentRef.instance.tooltip = this.tooltip();
  }

  @HostListener('mouseleave')
  mouseLeave(): void {
    this.vcr.clear();
  }

}
