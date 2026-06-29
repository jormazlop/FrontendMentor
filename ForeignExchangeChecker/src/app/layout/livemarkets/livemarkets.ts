import { DecimalPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, effect, inject, signal, untracked } from '@angular/core';
import { Rate } from '@model/model';
import { Frankfurter } from '@services/frankfurter';
import { CURRENCY_TO_COUNTRY_MAP } from '@utils/mapper';

@Component({
  selector: 'foreign-livemarkets',
  imports: [DecimalPipe],
  templateUrl: './livemarkets.html',
  styleUrl: './livemarkets.scss',
})
export class Livemarkets {
  private readonly service = inject(Frankfurter);
  readonly ratesChange = signal<Rate[]>([]);

  rateResource = httpResource<Rate[]>(() =>
    this.service.rateBaseUrl('USD'),
  );

  constructor() {
    this.effectCalculateRatesChange();
  }

  private effectCalculateRatesChange(): void {
    effect(() => {
      const rates = this.rateResource.value();

      untracked(() => {
        if (!rates) {
          return;
        }

        const ratesChange: Rate[] = [];

        const ratesByPair = new Map<string, Rate[]>();
        const currencies = this.service.currencies.value();

        rates
          .filter((rate) => CURRENCY_TO_COUNTRY_MAP[rate.quote])
          .forEach((rate) => {
            const key = `${rate.base}-${rate.quote}`;
            const existingRates = ratesByPair.get(key) ?? [];
            existingRates.push(rate);
            ratesByPair.set(key, existingRates);
          });

        const todayRates = Array.from(ratesByPair.values()).map((pairRates) => {
          const sortedRates = [...pairRates].sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
          );

          const latestRate = sortedRates[sortedRates.length - 1];
          const previousRate = sortedRates[sortedRates.length - 2];

          const rateChange: Rate = {
            ...latestRate,
            iso_code: CURRENCY_TO_COUNTRY_MAP[latestRate.quote],
            name: currencies?.find((currency) => currency.iso_code === latestRate.quote)?.name,
            changeRate: latestRate.rate - (previousRate?.rate ?? latestRate.rate),
          };

          ratesChange.push(rateChange);
        });

        this.ratesChange.set(ratesChange);
      });
    });
  }
}
