import { Component, input } from '@angular/core';
import { Place } from '@models/places';

@Component({
  imports: [],
  selector: 'app-map-tooltip',
  styleUrl: './map-tooltip.scss',
  templateUrl: './map-tooltip.html',
})
export class MapTooltip {
  place = input<Place | null>(null);
}
