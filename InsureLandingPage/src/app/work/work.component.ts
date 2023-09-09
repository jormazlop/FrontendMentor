import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>;

  slider: KeenSliderInstance | null = null;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slides: {
        perView: window.innerWidth < 600? 1 : 2,
      },
    });
  }

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slides: {
        perView: window.innerWidth < 600? 1 : 2,
      },
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

}
