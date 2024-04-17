import { Component, computed, input, signal } from '@angular/core';
import { Images, Planet } from '../../models/planet';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-planet-image',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './planet-image.component.html',
  styleUrl: './planet-image.component.scss'
})
export class PlanetImageComponent {
  images = input<Images>();

  option = input.required<number>();

  image = computed(() => {
    switch(this.option()) {
      case 2:
        return this.images()?.internal;
      default:
        return this.images()?.planet;
    }
  })
}
