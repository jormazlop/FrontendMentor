import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


type SlideDescription = {
  title: string,
  description: string,

}

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [NgClass],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss'
})
export class SlideComponent {

  descriptions: SlideDescription[] =
  [
    {
      title: 'Discover innovative ways to decorate',
      description: `We provide unmatched quality, comfort, and style for property owners across the country.
                    Our experts combine form and function in bringing your vision to life.
                    Create a room in your own style with our collection and make your property a
                    reflection of you and what you love.`
    },
    {
      title: 'We are available all across the globe',
      description: `With stores all over the world, it's easy for you to find furniture for your home or place of business.
                    Locally, we’re in most major cities throughout the country.
                    Find the branch nearest you using our store locator. Any questions?
                    Don't hesitate to contact us today.`
    },
    {
      title: 'Manufactured with the best materials',
      description: `Our modern furniture store provide a high level of quality.
                    Our company has invested in advanced technology to ensure that every
                    product is made as perfect and as consistent as possible.
                    With three decades of experience in this industry,
                    we understand what customers want for their home and office.`
    }
  ]

  slide = signal(1);
  image = computed(() => 'slide-' + this.slide());
  description = computed(() => this.descriptions[this.slide() - 1]);


  previousSlide(): void {
    this.slide.update(val => val > 1 ? --val: 3);
  }

  nextSlide(): void {
    this.slide.update(val => val < 3 ? ++val: 1);
  }
}
