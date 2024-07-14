import { Component, input, output } from '@angular/core';
import { Product } from '../../models/products.model';
import { ImageSizePipe } from './shared/image-size.pipe';
import { CurrencyPipe } from '@angular/common';
import { AddCartButtonComponent } from '../add-cart-button/add-cart-button.component';
import { AddSubstractButtonComponent } from '../add-substract-button/add-substract-button.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ImageSizePipe, CurrencyPipe, AddCartButtonComponent, AddSubstractButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  product = input.required<Product>();

  add = output();
  substract = output();


  addProduct(): void {
    this.add.emit();
  }

  substractProduct(): void {
    this.substract.emit();
  }

}
