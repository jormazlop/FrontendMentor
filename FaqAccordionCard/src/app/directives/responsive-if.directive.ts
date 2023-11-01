import { Directive, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[isResponsive]',
})
export class ResponsiveIfDirective {
  @Input() isResponsive = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.showImage();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.showImage();
  }


  private showImage(): void {
    switch (this.isResponsive) {
      case true:
        if (window.innerWidth < 1125) {
          this.viewContainer.clear();
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
        break;
      case false:
        if (window.innerWidth >= 1125) {
          this.viewContainer.clear();
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
        break;
      default:
        this.viewContainer.clear();
        break;
    }
  }
}
