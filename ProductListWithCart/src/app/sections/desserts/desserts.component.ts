import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-desserts',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.scss'
})
export class DessertsComponent {

  private service = inject(ProductsService);

  products = this.service.products;

  add(idx: number): void {
    this.service.add(idx);
  }

  substract(idx: number): void {
    this.service.substract(idx);
  }

}
