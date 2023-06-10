import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[app-button]',
  standalone: true
})
export class ButtonDirective {

  constructor(private elRef: ElementRef, private renderer2:Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.renderer2.setStyle(this.elRef.nativeElement,'backgroundColor','#755CDE');
    this.renderer2.setStyle(this.elRef.nativeElement,'cursor','pointer');
    this.renderer2.setStyle(this.elRef.nativeElement,'transform','scale(0.98)');
  }

  @HostListener('mouseout')
  onMouseOut(): void {
    this.renderer2.setStyle(this.elRef.nativeElement,'backgroundColor','#030303');
    this.renderer2.setStyle(this.elRef.nativeElement,'transform','scale(1.02)');
  }

  @HostListener('mousedown')
  onClickStart(): void {
    this.renderer2.setStyle(this.elRef.nativeElement,'transform','translateX(2px) translateY(2px)');
  }

  @HostListener('mouseup')
  onClickEnd(): void {
    this.renderer2.setStyle(this.elRef.nativeElement,'transform','translateX(-2px) translateY(-2px)');
  }
}
