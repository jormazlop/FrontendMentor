import {
  Component,
  computed,
  effect,
  inject,
  input,
  model,
  output,
  signal,
  untracked,
} from '@angular/core';
import { Frankfurter } from '@services/frankfurter';
import { CURRENCY_TO_COUNTRY_MAP } from '@utils/mapper';
import { IconChevronDown } from '@components/icons/icon-chevron-down/icon-chevron-down';
import { SearchInput } from '@components/inputs/search-input/search-input';
import { ClickOutside } from '@directives/click-outside';
import { CurrencyOption } from '@model/model';

@Component({
  selector: 'foreign-currency-button',
  imports: [IconChevronDown, SearchInput, ClickOutside],
  templateUrl: './currency-button.html',
  styleUrl: './currency-button.scss',
})
export class CurrencyButton {
  service = inject(Frankfurter);
  loading = computed(() => this.service.currencies.isLoading());
  modelOption = model<string>();

  protected isOpen = signal(false);
  protected search = model('');

  currencyOptions = computed(() => {
    let options: CurrencyOption[] = [];

    const currencies = this.service.currencies.value();

    if (!currencies) {
      return options;
    }

    currencies.forEach((currency) => {
      if (!CURRENCY_TO_COUNTRY_MAP[currency.iso_code]) {
        return;
      }

      if (!currency.name.includes(this.search())) {
        return;
      }

      const option: CurrencyOption = {
        country_code: CURRENCY_TO_COUNTRY_MAP[currency.iso_code],
        iso_code: currency.iso_code,
        name: currency.name,
      };

      options.push(option);
    });

    return options;
  });

  popularOptions = computed(() =>
    this.currencyOptions().filter((option) => ['USD', 'EUR', 'GBP'].includes(option.iso_code)),
  );
  otherOptions = computed(() =>
    this.currencyOptions()
      .filter((option) => !this.popularOptions().includes(option))
      .slice(0, 4),
  );

  selectedOption = signal<CurrencyOption | undefined>(undefined);

  onChangeOption = output<CurrencyOption>();

  constructor() {
    this.effectSelectedOption();
    this.effectModelOption();
  }

  onClickMenu(event: Event): void {
    event.stopPropagation();
    this.isOpen.update((v) => !v);
  }

  onClickOption(option: CurrencyOption): void {
    this.selectedOption.set(option);
    this.modelOption.set(option.iso_code);
    this.onCloseMenu();
  }

  onCloseMenu(): void {
    this.search.set('');
    this.isOpen.set(false);
  }

  private effectSelectedOption(): void {
    effect(() => {
      this.service.currencies.value();

      untracked(() => {
        const initialOption = this.popularOptions().find(
          (option) => option.iso_code === this.modelOption(),
        );
        this.selectedOption.set(initialOption);
      });
    });
  }

  private effectModelOption(): void {
    effect(() => {
      this.modelOption();

      untracked(() => {
        const selectedOption = this.currencyOptions().find(
          (option) => option.iso_code === this.modelOption(),
        );
        this.selectedOption.set(selectedOption);
      });
    });
  }
}
