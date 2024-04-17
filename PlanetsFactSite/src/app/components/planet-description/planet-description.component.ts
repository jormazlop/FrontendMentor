import { Component, input, output } from '@angular/core';
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


  onClickView(option: number): void {
    this.option.emit(option);
  }
}
