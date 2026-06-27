import { Component, computed, effect, inject, model, signal, untracked } from '@angular/core';
import { RateChangeElement } from './rate-change-element/rate-change-element';
import { IconExchange } from '@components/icons/icon-exchange/icon-exchange';
import { Frankfurter } from '@services/frankfurter';
import { httpResource } from '@angular/common/http';
import { Rate } from '@model/model';

@Component({
  selector: 'foreign-rate-change',
  imports: [RateChangeElement, IconExchange],
  templateUrl: './rate-change.html',
  styleUrl: './rate-change.scss',
})
export class RateChange {
  private readonly service = inject(Frankfurter);

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
  }

  onExchangeRate(): void {
    const modelBase = this.modelBase();
    const modelQuote = this.modelQuote();

    this.modelBase.set(modelQuote);
    this.modelQuote.set(modelBase);

    const quote = this.rateQuote();
    this.rateBase.set(quote);
  }

  private effectChangeBaseQuote(): void {
    effect(() => {
      const changeRate = this.changeRateResource.value();

      untracked(() => {
        if (changeRate?.[0].rate) {
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
}
