import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyButton } from '@components/buttons/currency-button/currency-button';

@Component({
  selector: 'foreign-rate-change-element',
  imports: [CurrencyButton, FormsModule],
  templateUrl: './rate-change-element.html',
  styleUrl: './rate-change-element.scss',
})
export class RateChangeElement {
  readOnly = input(false);
  modelOption = model<string>();
  rate = model(0);

  onRateInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const raw = input.value;
    if (raw === '' || raw === '-' || raw === '.' || raw === '-.') {
      return;
    }

    const value = Number(raw);
    if (Number.isNaN(value)) {
      return;
    }

    if (value > 9999) {
      input.value = '9999';
      this.rate.set(9999);
      return;
    }

    if (value < 0) {
      input.value = '0';
      this.rate.set(0);
      return;
    }

    const decimals = (raw.split('.')[1] ?? '').length;
    if (decimals > 2) {
      let rounded = Math.round(value * 100) / 100;
      if (rounded > 9999) rounded = 9999;
      input.value = String(rounded);
      this.rate.set(rounded);
    } else {
      this.rate.set(value);
    }
  }
}
