import { Directive, ElementRef, HostBinding, HostListener, Input as SectionInput } from '@angular/core';

@Directive({
  selector: '[appIcon]'
})
export class IconDirective {

  @SectionInput({required: true}) section?: number;
  private src = '';

  constructor(private el: ElementRef) {

  }

  @HostBinding('style.cursor') cursor: string = 'pointer';

  @HostListener('mouseenter') onMouseover() {
    this.src = this.el.nativeElement.src;
    if(this.section === 1) {
      this.el.nativeElement.src = this.el.nativeElement.src.substring(0, this.el.nativeElement.src.length - 10) + '-gold.svg';
    } else {
      this.el.nativeElement.src = this.el.nativeElement.src.substring(0, this.el.nativeElement.src.length - 4) + '-light.svg';
    }

  }

  @HostListener('mouseleave') onMouseleave() {
    this.el.nativeElement.src = this.src;
  }

}
