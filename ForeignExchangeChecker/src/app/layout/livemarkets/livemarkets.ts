import { DecimalPipe } from '@angular/common';
import { Component, effect, inject, signal, untracked } from '@angular/core';
import { LiveMarketRate } from '@model/model';
import { Frankfurter } from '@services/frankfurter';

@Component({
  selector: 'foreign-livemarkets',
  imports: [DecimalPipe],
  templateUrl: './livemarkets.html',
  styleUrl: './livemarkets.scss',
})
export class Livemarkets {
  private readonly rates = inject(Frankfurter).rates;
  readonly ratesChange = signal<LiveMarketRate[]>([]);

  constructor() {
    this.effectCalculateRatesChange();
  }

  private effectCalculateRatesChange(): void {
    effect(() => {
      const rates = this.rates.value();

      untracked(() => {
        if (!rates) {
          return;
        }

        const today = new Date().toISOString().split('T')[0];
        const todayRates = rates.filter((rate) => rate.date === today);

        const ratesChange: LiveMarketRate[] = [];

        todayRates.forEach((todayRate) => {
          const yesterdayRate = rates.find(
            (rate) =>
              todayRate.base === rate.base &&
              todayRate.quote === rate.quote &&
              today !== rate.date,
          );

          const rateChange: LiveMarketRate = {
            base: todayRate.base,
            quote: todayRate.quote,
            todayRate: todayRate.rate,
            changeRate: todayRate.rate - (yesterdayRate?.rate ?? todayRate.rate),
          };
          ratesChange.push(rateChange);
        });

        this.ratesChange.set(ratesChange);
      });
    });
  }
}
