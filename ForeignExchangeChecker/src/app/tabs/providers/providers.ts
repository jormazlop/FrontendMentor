import { Component, computed, inject } from '@angular/core';
import { Frankfurter } from '@services/frankfurter';
import { CURRENCY_TO_COUNTRY_MAP } from '@utils/mapper';
import { ProvidersList } from './providers-list/providers-list';

@Component({
  selector: 'foreign-providers',
  imports: [ProvidersList],
  templateUrl: './providers.html',
  styleUrl: './providers.scss',
})
export default class Providers {

  private readonly service = inject(Frankfurter);
  providers = computed(
    () =>
      this.service.providers
        .value()
        ?.filter((provider) => CURRENCY_TO_COUNTRY_MAP[provider.pivot_currency] !== undefined) ??
      [],
  );
}
