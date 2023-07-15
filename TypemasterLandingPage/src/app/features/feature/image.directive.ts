import { Directive, Input as FeatureInput, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Feature } from 'src/app/shared/models/feature.model';

@Directive({
  selector: '[featureImage]'
})
export class ImageDirective implements OnInit {

  @FeatureInput({required: true}) feature: Feature = new Feature();

  @HostBinding('style') style: any;
  constructor(private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.style = this.sanitizer.bypassSecurityTrustStyle(`--image: url(${this.feature.img});`);
  }

}
