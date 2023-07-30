import { Directive, ElementRef, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[title]'
})
export class TitleDirective implements OnInit {


  constructor(private elRef: ElementRef, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.elRef.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, 'Get <span>insights</span> that help your business grow.')
    const insightSpan = document.querySelector('span');
    insightSpan!.style.cssText += 'color: #AB5CDB';
  }

}
