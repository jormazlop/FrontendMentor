import { Component, computed, input, output, signal } from '@angular/core';
import { Planet } from '../../models/planet';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-planet-description',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './planet-description.component.html',
  styleUrl: './planet-description.component.scss'
})
export class PlanetDescriptionComponent {

  planet = input.required<Planet>();

  option = output<number>();

  active = signal(1);

  bgColor = computed(() => {

    switch(this.planet().name) {
      case 'Mercury':
        return '#419EBB';
      case 'Venus':
        return '#EDA249';
      case 'Earth':
        return '#6D2ED5';
      case 'Mars':
        return '#D14C32';
      case 'Jupiter':
        return '#D83A34';
      case 'Saturn':
        return '#CD5120';
      case 'Uranus':
        return '#1EC1A2';
      case 'Neptune':
        return '#2D68F0';
      default:
        return '#FFFFFF';
    }
  });


  onClickView(option: number): void {
    this.active.set(option);
    this.option.emit(option);
  }
}
