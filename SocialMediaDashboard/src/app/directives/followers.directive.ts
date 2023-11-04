import { Directive, ElementRef, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[followers]',
})
export class FollowersDirective implements OnInit {

  @Input() followers = 0;
  @HostBinding('style.color') bgColor: string | undefined;

  colorPositive = 'hsl(163, 72%, 41%)';
  colorNegative = 'hsl(356, 69%, 56%)';

  constructor(private elRef: ElementRef) {

  }

  ngOnInit(): void {

    this.elRef.nativeElement.innerHTML = `${Math.abs(this.followers)} Today`;
    this.bgColor = this.followers < 0 ? this.colorNegative : this.colorPositive;
  }
}
