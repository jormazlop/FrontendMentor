import { Component, input, linkedSignal } from '@angular/core';
import { Statistic } from '../../../models/statistic';

@Component({
  selector: 'app-statistics-item',
  imports: [],
  templateUrl: './statistics-item.component.html',
  styleUrl: './statistics-item.component.scss'
})
export class StatisticsItemComponent {
  stat = input.required<Statistic>();

  image = linkedSignal(() => 'images/' + this.stat().image)
}
