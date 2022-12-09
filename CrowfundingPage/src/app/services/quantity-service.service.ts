import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuantityService {

  constructor() { }

  $quantity: BehaviorSubject<number> = new BehaviorSubject(0);

  setQuantity(quantity: number) {
    this.$quantity.next(quantity);
  }

  getQuantity(): Observable<number> {
    return this.$quantity;
  }
}
