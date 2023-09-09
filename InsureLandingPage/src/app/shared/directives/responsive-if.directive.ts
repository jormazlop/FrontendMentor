import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[responsiveIf]'
})
export class ResponsiveIfDirective implements OnInit {

  @Input() responsiveIf = false;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private vcr: ViewContainerRef) {
   }

   ngOnInit(): void {

    switch (this.responsiveIf) {
      case true:
        if (window.innerWidth <= 800) {
          this.vcr.createEmbeddedView(this.templateRef);
        } else {
          this.vcr.clear();
        }
        break;
      case false:
        if (window.innerWidth > 800) {
          this.vcr.createEmbeddedView(this.templateRef);
        } else {
          this.vcr.clear();
        }
        break;
    }
  }
}
