import { httpResource } from '@angular/common/http';
import { Component, effect, inject, signal, untracked } from '@angular/core';
import { Rate } from '@model/model';
import { Frankfurter } from '@services/frankfurter';
import { CompareList } from './compare-list/compare-list';
import { CURRENCY_TO_COUNTRY_MAP } from '@utils/mapper';

@Component({
  selector: 'foreign-compare',
  imports: [CompareList],
  templateUrl: './compare.html',
  styleUrl: './compare.scss',
})
export default class Compare {
  private readonly service = inject(Frankfurter);

  rateBase = this.service.rateBase;
  modelBase = this.service.modelBase;

  compareRates = signal<Rate[]>([]);

  compareRateResource = httpResource<Rate[]>(() =>
    this.service.rateBaseUrl(this.service.modelBase()),
  );

  constructor() {
    this.effectChangeBase();
  }

  private effectChangeBase(): void {
    effect(() => {
      const compareRates = this.compareRateResource.value();

      untracked(() => {
        if (!compareRates) {
          return;
        }

        const currencies = this.service.currencies.value();

        const ratesByPair = new Map<string, Rate[]>();

        compareRates
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

          return {
            ...latestRate,
            iso_code: CURRENCY_TO_COUNTRY_MAP[latestRate.quote],
            name: currencies?.find((currency) => currency.iso_code === latestRate.quote)?.name,
            changeRate: latestRate.rate - (previousRate?.rate ?? latestRate.rate),
          };
        });

        this.compareRates.set(todayRates);
      });
    });
  }
}
