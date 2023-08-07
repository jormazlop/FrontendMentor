import { Directive, HostListener, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[responsiveIf]'
})
export class ResponsiveIfDirective implements OnInit {

  @Input() responsiveIf: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.renderElement();
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    this.renderElement();
  }

  private renderElement(): void {
    if (this.isMobile()) {
      if (this.viewContainer.length == 0) this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private isMobile(): boolean {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (this.responsiveIf) {
      return width >= 600;
    } else {
      return width < 600;
    }

  }
}
