import { Component, signal } from '@angular/core';
import { StatisticsItemComponent } from './statistics-item/statistics-item.component';
import { Statistic } from '../../models/statistic';

@Component({
  selector: 'app-advanced-statistics',
  imports: [StatisticsItemComponent],
  templateUrl: './advanced-statistics.component.html',
  styleUrl: './advanced-statistics.component.scss'
})
export class AdvancedStatisticsComponent {

  items = signal<Statistic[]>([
    {
      image: 'icon-brand-recognition.svg',
      title: 'Brand Recognition',
      description: `Boost your brand recognition with each click.
                    Generic links don’t mean a thing.
                    Branded links help instil confidence in your content.`
    },
    {
      image: 'icon-detailed-records.svg',
      title: 'Detailed Records',
      description: `Gain insights into who is clicking your links.
                    Knowing when and where people engage with your content helps inform better decisions.`
    },
    {
      image: 'icon-fully-customizable.svg',
      title: 'Fully Customizable',
      description: `Improve brand awareness and content discoverability through customizable links,
                    supercharging audience engagement.`
    }
  ])
}
