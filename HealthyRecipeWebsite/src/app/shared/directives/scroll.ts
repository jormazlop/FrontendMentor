import { Directive, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Directive({
  selector: '[scroll]',
})
export class Scroll {
  constructor(private elRef: ElementRef, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.elRef.nativeElement.scrollTo({ top: 0 });
      }
    });
  }
}
