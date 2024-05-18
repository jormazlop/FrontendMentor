import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

type SlideItem = {
  name: string;
  subtitle: string;
  image: string;
}

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [NgClass],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss'
})
export class SlideComponent {

  items: SlideItem[] = [
    {
      name: 'Brand naming & guidelines',
      subtitle: 'Lean Product Roadmap \u000A 2019 Project',
      image: 'image-slide-1'
    },
    {
      name: 'Brand identity & merchandise',
      subtitle: 'New Majestic Hotel \u000A 2018 Project',
      image: 'image-slide-2'
    },
    {
      name: 'Brand identity & web design',
      subtitle: 'Crypto Dashboard \u000A 2016 Project',
      image: 'image-slide-3'
    }
  ];

  selected = signal<number>(0);

  previousSlide(): void {
    this.selected.update(val => val > 0 ? --val : 2)
  }

  nextSlide(): void {
    this.selected.update(val => val < 2 ? ++val : 0);
  }

}
