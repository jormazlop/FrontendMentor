import { effect, inject, Injectable, signal } from '@angular/core';
import data from '../../../public/data/data.json';
import { Product } from '../models/products.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private _products = signal<Product[]>(data);
  readonly products = this._products.asReadonly();

  private storageService = inject(StorageService);

  constructor() {
    const products = this.storageService.getStorage();

    if(products) {
      this._products.set(products);
    }

    effect(() => {
      this.storageService.setStorage(this.products())
    });
  }

  add(idx: number): void {
    this._products.update(products => {
      products[idx].quantity++;
      return [ ...products ];
    });
  }

  substract(idx: number): void {
    this._products.update(products => {
      products[idx].quantity--;
      return [ ...products ];
    });
  }

  removeProduct(product: Product): void {
    this._products.update(products => {
      products.find(p => p === product)!.quantity = 0;
      return [ ...products ];
    });
  }

  startNewOrder(): void {
    this._products.update(products => {
      products.map(p => p.quantity = 0);
      return [ ...products ];
    });
  }

}
