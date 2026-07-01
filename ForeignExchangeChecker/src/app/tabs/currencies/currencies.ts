import { Component, computed, inject } from '@angular/core';
import { Frankfurter } from '@services/frankfurter';
import { CURRENCY_TO_COUNTRY_MAP } from '@utils/mapper';
import { CurrenciesList } from './currencies-list/currencies-list';

@Component({
  selector: 'foreign-currencies',
  imports: [CurrenciesList],
  templateUrl: './currencies.html',
  styleUrl: './currencies.scss',
})
export default class Currencies {
  private readonly service = inject(Frankfurter);

  currencies = computed(
    () =>
      this.service.currencies
        .value()
        ?.filter((currency) => CURRENCY_TO_COUNTRY_MAP[currency.iso_code] !== undefined) ??
      [],
  );
}
