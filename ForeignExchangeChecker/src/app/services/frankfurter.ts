import { httpResource } from '@angular/common/http';
import { Service, signal } from '@angular/core';
import { Currency, Provider, Rate } from '../model/model';

@Service()
export class Frankfurter {
  private readonly _modelBase = signal('');
  readonly modelBase = this._modelBase.asReadonly();

  private readonly _modelQuote = signal('');
  readonly modelQuote = this._modelQuote.asReadonly();

  private readonly baseUrl = 'https://api.frankfurter.dev/v2';

  private readonly _providers = httpResource<Provider[]>(() => `${this.baseUrl}/providers`);
  readonly providers = this._providers.asReadonly();

  private readonly _currencies = httpResource<Currency[]>(
    () => `${this.baseUrl}/currencies?scope=all`,
  );
  readonly currencies = this._currencies.asReadonly();

  private readonly _rates = httpResource<Rate[]>(
    () =>
      `${this.baseUrl}/rates?from=${new Date(Date.now() - 86400000).toISOString().split('T')[0]}&base=USD`,
  );
  readonly rates = this._rates.asReadonly();

  rateUrl(base: string, quote: string) {
    return `${this.baseUrl}/rates?base=${base}&quotes=${quote}`;
  }

  rateHistoryUrl(base: string, quote: string, start: Date, end: Date) {
    const fromDate = start.toISOString().split('T')[0];
    const toDate = end.toISOString().split('T')[0];

    return `${this.baseUrl}/rates?base=${base}&quotes=${quote}&from=${fromDate}&to=${toDate}`;
  }

  setModelBase(base: string): void {
    this._modelBase.set(base);
  }

  setModelQuote(quote: string): void {
    this._modelQuote.set(quote);
  }
}
