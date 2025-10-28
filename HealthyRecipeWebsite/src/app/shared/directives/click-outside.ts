import { Directive, ElementRef, HostListener, inject, output } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutside {
  private elementRef = inject(ElementRef);

  clickOutside = output();

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.clickOutside.emit();
    }
  }
}
