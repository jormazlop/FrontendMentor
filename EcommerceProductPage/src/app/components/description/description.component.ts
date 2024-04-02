import { Component, inject, signal } from '@angular/core';
import { CartButtonComponent } from '../cart-button/cart-button.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CartButtonComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {
  quantity = signal(0);

  private productService = inject(ProductService);

  subtract(): void {
    this.quantity.update(val => val > 0 ? --val : 0);
  }

  add(): void {
    this.quantity.update(val => ++val);
  }

  addToCart(): void {
    this.productService.addProducts(this.quantity());
    this.quantity.set(0);
  }
}
