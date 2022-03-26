import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTimeCardDirective]'
})
export class TimeCardDirectiveDirective implements AfterViewInit {

  el: HTMLElement | null = null;

  @Input() image: String = '';

  @Input() color: String = '';

  constructor(private readonly elementRef: ElementRef, private readonly renderer: Renderer2) { }

  ngAfterViewInit(): void {

    if (!this.elementRef.nativeElement) {
      return;
    }

    this.el = this.elementRef.nativeElement;

    this.renderer.setStyle(this.el, 'background-image', `url(../../../assets/${this.image})`);
    this.renderer.setStyle(this.el, 'background-color', `${this.color}`);
  }

}
