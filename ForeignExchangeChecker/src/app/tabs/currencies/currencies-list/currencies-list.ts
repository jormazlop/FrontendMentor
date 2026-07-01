import { Component, computed, inject } from '@angular/core';
import { Frankfurter } from '@services/frankfurter';
import { CURRENCY_TO_COUNTRY_MAP } from '@utils/mapper';

@Component({
  selector: 'foreign-currencies-list',
  imports: [],
  templateUrl: './currencies-list.html',
  styleUrl: './currencies-list.scss',
})
export class CurrenciesList {
  private readonly service = inject(Frankfurter);

  currencies = computed(
    () =>
      this.service.currencies
        .value()
        ?.filter((currency) => CURRENCY_TO_COUNTRY_MAP[currency.iso_code] !== undefined)
        ?.map((currency) => ({
          ...currency,
          iso_code: CURRENCY_TO_COUNTRY_MAP[currency.iso_code],
        })) ?? [],
  );
}
