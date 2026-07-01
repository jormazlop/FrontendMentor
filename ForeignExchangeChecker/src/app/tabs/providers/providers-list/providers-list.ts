import { Component, computed, inject } from '@angular/core';
import { Frankfurter } from '@services/frankfurter';
import { CURRENCY_TO_COUNTRY_MAP } from '@utils/mapper';

@Component({
  selector: 'foreign-providers-list',
  imports: [],
  templateUrl: './providers-list.html',
  styleUrl: './providers-list.scss',
})
export class ProvidersList {
  private readonly service = inject(Frankfurter);
  providers = computed(
    () =>
      this.service.providers
        .value()
        ?.map((provider) => ({
          ...provider,
          iso_code: CURRENCY_TO_COUNTRY_MAP[provider.pivot_currency],
        }))
        ?.filter((provider) => CURRENCY_TO_COUNTRY_MAP[provider.pivot_currency] !== undefined) ??
      [],
  );
}
