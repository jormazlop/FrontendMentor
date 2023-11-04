import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[percentage]'
})
export class PercentageDirective implements OnInit {

  @Input() percentage = 0;
  @HostBinding('style.color') bgColor: string | undefined;

  colorPositive = 'hsl(163, 72%, 41%)';
  colorNegative = 'hsl(356, 69%, 56%)';

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {

    this.elRef.nativeElement.innerHTML = `${Math.abs(this.percentage)}%`;
    this.bgColor = this.percentage < 0 ? this.colorNegative : this.colorPositive;
  }
}
