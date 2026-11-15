import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Place } from '@models/places';

@Component({
  imports: [UpperCasePipe],
  selector: 'app-sidepanel-place',
  styleUrl: './sidepanel-place.scss',
  templateUrl: './sidepanel-place.html',
})
export class SidepanelPlace {
  index = input<number>();
  place = input<Place>();

  faviconUrl(website: string | null): string {
    if (!website) return 'icons/restaurant-placeholder.svg';
    const hostname = new URL(website).hostname;
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=64`;
  }

  onFaviconLoad(event: Event): void {
    const image = event.currentTarget;

    if (
      image instanceof HTMLImageElement &&
      image.naturalWidth < 64
    ) {
      image.src = 'icons/restaurant-placeholder.svg';
    }
  }
}
