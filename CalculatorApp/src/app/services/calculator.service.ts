import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private value = signal('0');
  readonly value$ = this.value.asReadonly();

  private add = signal(0);
  private substract = signal(0);
  private multiply = signal(0);
  private divide = signal(0);
  private total = signal(false);

  readonly temporary$ = computed(() => this.add() + this.substract() + this.multiply() + this.divide());

  clickValue(value: string | number): void {
    if (this.total()) {
      this.value.set(value.toString());
      this.total.set(false);
    } else {
      this.value.update((val) => val + value.toString());
    }
  }

  clickDecimal(): void {

    if(!this.value().includes('.')) {
      this.value.update(val => val + '.');
    }


  }

  resetValue(): void {
    this.value.set('0');
    this.substract.set(0);
    this.add.set(0);
    this.multiply.set(0);
    this.divide.set(0);
  }

  deleteValue(): void {
    this.value.update(() => {

      const trimmedValue = +this.value().trimStart();

      if(trimmedValue.toString().length > 1) {
        return trimmedValue.toString().slice(0,-1)
      } else {
        return '0'
      }
    });
  };

  addValue(): void {

    this.seeTotal();

    this.add.update(val => val + +this.value());
    this.value.set('0');
  }

  substractValue(): void {

    this.seeTotal();

    this.substract.update(val => val + +this.value());
    this.value.set('0');
  }

  multiplyValue(): void {

    this.seeTotal();

    this.multiply.update(val => val + +this.value());
    this.value.set('0');
  }

  divideValue(): void {

    this.seeTotal();

    this.divide.update(val => val + +this.value());
    this.value.set('0');


  }

  seeTotal(): void {

    if (this.add()) {
      this.value.update(val => {
        const total = +val + this.add();
        return total.toString();
      });
    }

    if(this.substract()) {
      this.value.update(val => {
        const total = this.substract() - +val;
        return total.toString();
      });
    }

    if(this.multiply()) {
      this.value.update(val => {
        const total = +val * this.multiply();
        return total.toString();
      });
    }

    if(this.divide()) {
      this.value.update(val => {
        const total = this.divide() / +val;

        if(total === Infinity) {
          return '0';
        } else {
          return total.toString();
        }

      });
    }

    this.total.set(true);
    this.substract.set(0);
    this.add.set(0);
    this.multiply.set(0);
    this.divide.set(0);
  }

}
