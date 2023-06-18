import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[changeImageColor]',
  standalone: true
})
export class ChangeImageColorDirective {

  constructor(private elRef:ElementRef) {}

  src?: string;

  @HostListener('mouseover')
  onMouseOver() {
    this.src = this.elRef.nativeElement.src;
    this.elRef.nativeElement.src = this.elRef.nativeElement.src.substring(0, this.elRef.nativeElement.src.length-4) + '-light.svg';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.elRef.nativeElement.src = this.src;
  }

}
