import { Component, signal } from '@angular/core';

type CoffeeItem = {
  title: string,
  description: string,
  image: string
}

@Component({
  selector: 'app-home-collection',
  standalone: true,
  imports: [],
  templateUrl: './home-collection.component.html',
  styleUrl: './home-collection.component.scss'
})
export class HomeCollectionComponent {
  coffees = signal<CoffeeItem[]>([
    {
      title: 'Gran Espresso',
      description: 'Light and flavorful blend with cocoa and black pepper for an intense experience.',
      image: 'assets/home/desktop/image-gran-espresso.png'
    },
    {
      title: 'Planalto',
      description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.',
      image: 'assets/home/desktop/image-planalto.png'
    },
    {
      title: 'Piccollo',
      description: 'Mild and smooth blend featuring notes of toasted almond and dried cherry.',
      image: 'assets/home/desktop/image-piccollo.png'
    },
    {
      title: 'Danche',
      description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes.',
      image: 'assets/home/desktop/image-danche.png'
    },
  ])
}
