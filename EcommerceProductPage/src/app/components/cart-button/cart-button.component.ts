import { Component } from '@angular/core';
import { IconCartComponent } from '../icon-cart/icon-cart.component';

@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [IconCartComponent],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.scss'
})
export class CartButtonComponent {

}
