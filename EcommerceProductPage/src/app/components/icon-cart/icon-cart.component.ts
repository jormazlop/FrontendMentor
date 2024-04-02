import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-cart',
  standalone: true,
  imports: [],
  templateUrl: './icon-cart.component.html',
  styleUrl: './icon-cart.component.scss'
})
export class IconCartComponent {
  white = input(false);

  quantity = input(0);
}
