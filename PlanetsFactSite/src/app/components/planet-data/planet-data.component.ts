import { Component, input } from '@angular/core';
import { Planet } from '../../models/planet';

@Component({
  selector: 'app-planet-data',
  standalone: true,
  imports: [],
  templateUrl: './planet-data.component.html',
  styleUrl: './planet-data.component.scss'
})
export class PlanetDataComponent {
  planet = input.required<Planet>();
}
