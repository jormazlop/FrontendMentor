import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private quantity = signal(0);
  readonly quantity$ = this.quantity.asReadonly();


  addProducts(quantity: number): void {
    this.quantity.update(val => val + quantity);
  }

  deleteProducts(): void {
    this.quantity.set(0);
  }
}
