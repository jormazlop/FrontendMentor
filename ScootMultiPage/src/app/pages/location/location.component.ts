import { Component } from '@angular/core';
import { LocationHeaderComponent } from './location-header/location-header.component';
import { LocationMapComponent } from './location-map/location-map.component';
import { LocationMessageComponent } from './location-message/location-message.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [
    LocationHeaderComponent,
    LocationMapComponent,
    LocationMessageComponent,
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export default class LocationComponent {}
