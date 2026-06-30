import { Component, computed, inject } from '@angular/core';
import { ThemeButton } from '@components/buttons/theme-button/theme-button';
import { Logo } from '@components/logo/logo';
import { Frankfurter } from '@services/frankfurter';
import { CURRENCY_TO_COUNTRY_MAP } from '@utils/mapper';

@Component({
  selector: 'foreign-header',
  imports: [Logo, ThemeButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  service = inject(Frankfurter);
  currencies = computed(() =>
    this.service.currencies
      .value()
      ?.filter((currency) => CURRENCY_TO_COUNTRY_MAP[currency.iso_code]),
  );

  toggleTheme() {
    const html = document.documentElement;
    if (html.dataset["theme"] === 'light') {
      html.dataset["theme"] = 'dark';
    } else {
      html.dataset["theme"] = 'light';
    }
  }
}
