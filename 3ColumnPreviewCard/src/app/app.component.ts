import { Component } from '@angular/core';
import { Card } from './models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '3ColumnPreviewCard';


  cards: Card[] = [
    {
      image: '../../../assets/icon-sedans.svg',
      color: '#E28625',
      title: 'Sedans',
      description: `Choose a sedan for its affordability and excellent fuel economy.
                    Ideal for cruising in the city or on your next road trip.`
    },
    {
      image: '../../../assets/icon-suvs.svg',
      color: '#006971',
      title: 'SUVs',
      description: `Take an SUV for its spacious interior, power, and versatility.
                    Perfect for your next family vacation and off-road adventures.`
    },
    {
      image: '../../../assets/icon-luxury.svg',
      color: '#004140',
      title: 'Luxury',
      description: `Cruise in the best car brands without the bloated prices.
                    Enjoy the enhanced comfort of a luxury rental and arrive in style.`
    }
  ]
}
