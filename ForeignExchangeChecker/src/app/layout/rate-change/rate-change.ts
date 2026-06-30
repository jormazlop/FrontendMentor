import { Component, computed, effect, inject, model, signal, untracked } from '@angular/core';
import { RateChangeElement } from './rate-change-element/rate-change-element';
import { IconExchange } from '@components/icons/icon-exchange/icon-exchange';
import { Frankfurter } from '@services/frankfurter';
import { httpResource } from '@angular/common/http';
import { Favorite, Rate } from '@model/model';
import { FavoriteButton } from '@components/buttons/favorite-button/favorite-button';
import { Favorites } from '@services/favorites';
import { CURRENCY_TO_COUNTRY_MAP } from '@utils/mapper';
import { LogButton } from '@components/buttons/log-button/log-button';
import { LogConversions } from '@services/log-conversions';
import { IconExchangeVertical } from '@components/icons/icon-exchange-vertical/icon-exchange-vertical';

@Component({
  selector: 'foreign-rate-change',
  imports: [RateChangeElement, IconExchange, IconExchangeVertical, FavoriteButton, LogButton],
  templateUrl: './rate-change.html',
  styleUrl: './rate-change.scss',
})
export class RateChange {
  private readonly service = inject(Frankfurter);
  private readonly favorites = inject(Favorites);
  private readonly logConversions = inject(LogConversions);

  readonly logged = signal(false);

  rateBase = model(0);
  modelBase = model<string>('USD');
  rateQuote = computed(() => Number((this.rateBase() * this.changeRate()).toFixed(2)));
  modelQuote = model<string>('EUR');

  changeRate = signal(1);

  changeRateResource = httpResource<Rate[]>(() =>
    this.service.rateUrl(this.modelBase(), this.modelQuote()),
  );

  constructor() {
    this.effectChangeBaseQuote();
    this.effectBaseQuoteChanged();
    this.effectRateBaseChanged();
  }

  onExchangeRate(): void {
    const modelBase = this.modelBase();
    const modelQuote = this.modelQuote();

    this.modelBase.set(modelQuote);
    this.modelQuote.set(modelBase);

    const quote = this.rateQuote();
    this.rateBase.set(quote);
  }

  isFavorite(): boolean {
    return !!this.favorites
      .favorites()
      .find(
        (favorite) => favorite.base === this.modelBase() && favorite.quote === this.modelQuote(),
      );
  }

  onClickFavorite(): void {
    const ratesByPair = new Map<string, Rate[]>();
    const compareRates = this.changeRateResource.value();

    if (!compareRates) {
      return;
    }

    compareRates
      .filter((rate) => CURRENCY_TO_COUNTRY_MAP[rate.quote])
      .forEach((rate) => {
        const key = `${rate.base}-${rate.quote}`;
        const existingRates = ratesByPair.get(key) ?? [];
        existingRates.push(rate);
        ratesByPair.set(key, existingRates);
      });

    const sortedRates = [...ratesByPair.values()]
      .flat()
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const latestRate = sortedRates[sortedRates.length - 1];
    const previousRate = sortedRates[sortedRates.length - 2];

    const favorite: Favorite = {
      base: this.modelBase(),
      quote: this.modelQuote(),
      date: new Date().toISOString().split('T')[0],
      rate: this.changeRate(),
      changeRate: latestRate.rate - (previousRate?.rate ?? latestRate.rate),
      base_iso_code: CURRENCY_TO_COUNTRY_MAP[this.modelBase()],
      quote_iso_code: CURRENCY_TO_COUNTRY_MAP[this.modelQuote()],
    };

    this.favorites.changeFavorite(favorite);
  }

  onClickLog(): void {

    if(this.logged()) {
      return;
    }

    this.logged.set(true);
    this.logConversions.addLog(this.modelBase(), this.modelQuote(), this.rateBase(), this.rateQuote());

    setTimeout(() => this.logged.set(false), 5000);
  }

  private effectChangeBaseQuote(): void {
    effect(() => {
      const changeRate = this.changeRateResource.value();

      untracked(() => {
        this.logged.set(false);
        if (changeRate?.[0]?.rate) {
          this.changeRate.set(changeRate?.[0].rate);
        }
      });
    });
  }

  private effectBaseQuoteChanged(): void {
    effect(() => {
      const base = this.modelBase();
      const quote = this.modelQuote();

      untracked(() => {
        this.service.setModelBase(base);
        this.service.setModelQuote(quote);
      });
    });
  }

  private effectRateBaseChanged(): void {
    effect(() => {
      const rateBase = this.rateBase();

      untracked(() => {
        this.service.setRateBase(rateBase);
      });
    });
  }
}
