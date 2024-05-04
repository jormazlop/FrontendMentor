import { Component, signal } from '@angular/core';

type Feature = {
  title: string,
  description: string,
  image: string
}

@Component({
  selector: 'app-home-choose-us',
  standalone: true,
  imports: [],
  templateUrl: './home-choose-us.component.html',
  styleUrl: './home-choose-us.component.scss'
})
export class HomeChooseUsComponent {

  features = signal<Feature[]>([
    {
      title: 'Best quality',
      description: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
      image: 'assets/home/desktop/icon-coffee-bean.svg'
    },
    {
      title: 'Exclusive benefits',
      description: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
      image: 'assets/home/desktop/icon-gift.svg'
    },
    {
      title: 'Free shipping',
      description: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
      image: 'assets/home/desktop/icon-truck.svg'
    }
  ]);
}
