import { Injectable, signal } from '@angular/core';
import { Mortgage } from '../models/mortgage.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private _total = signal(0);
  readonly total = this._total.asReadonly();

  private _monthly = signal(0);
  readonly monthly = this._monthly.asReadonly();

  private _results = signal(false);
  readonly results = this._results.asReadonly();

  clear(): void {
    this._total.set(0);
    this._monthly.set(0);
    this._results.set(false);
  }

  calculate(data: Mortgage): void {
    const P = +data.amount;
    const I = (+data.rate / 100)/12;
    const N = +data.term * 12;

    let monthly = (I * Math.pow(1 + I, N));
    monthly = monthly / (Math.pow(1 + I, N) - 1);
    monthly = P * monthly;

    monthly = isFinite(monthly) ? monthly : 0;

    if(data.type === 'Interest Only') {
      const monthlyInterest = monthly - (P/N);
      const totalInterest = (monthly * N) - P;

      this._total.set(totalInterest);
      this._monthly.set(monthlyInterest);
    } else {
      this._total.set(monthly * 25 * 12);
      this._monthly.set(monthly);
    }

    this._results.set(true);
  }
}
