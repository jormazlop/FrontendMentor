import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DessertsComponent } from './sections/desserts/desserts.component';
import { CartComponent } from './sections/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DessertsComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProductListWithCart';
}
