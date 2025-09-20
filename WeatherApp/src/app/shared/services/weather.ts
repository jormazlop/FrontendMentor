import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Autocomplete, AutocompleteResult, Detail } from '@shared/models/weather.model';

import * as autocomplete from '../../../../public/data/autocomplete.json';
import * as detail from '../../../../public/data/detail.json';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Weather {
  private http = inject(HttpClient);

  private _unit = signal('metric');
  unit = this._unit.asReadonly();

  private _temperature = signal<'celsius' | 'fahrenheit'>('celsius');
  temperature = this._temperature.asReadonly();

  private _wind = signal<'kmh' | 'mph'>('kmh');
  wind = this._wind.asReadonly();

  private _precipitation = signal<'mm' | 'inch'>('mm');
  precipitation = this._precipitation.asReadonly();

  private _searchResults = signal<AutocompleteResult[]>([...(autocomplete.results as any)]);
  searchResults = this._searchResults.asReadonly();

  private _selectedResult = signal<AutocompleteResult>(this._searchResults()[0]);
  selectedResult = this._selectedResult.asReadonly();

  private _detail = signal<Detail>(detail as any);
  detail = this._detail.asReadonly();

  private _loadingAutocomplete = signal(false);
  loadingAutocomplete = this._loadingAutocomplete.asReadonly();

  private _loadingDetail = signal(false);
  loadingDetail = this._loadingDetail.asReadonly();

  private _noResultFound = signal(false);
  noResultFound = this._noResultFound.asReadonly();

  private _searchValue = signal<AutocompleteResult | null>(this._searchResults()[0]);

  setUnit(unit: 'metric' | 'imperial'): void {
    this._unit.set(unit);
  }

  setTemperature(temperature: 'celsius' | 'fahrenheit'): void {
    this._temperature.set(temperature);
  }

  setWind(wind: 'kmh' | 'mph'): void {
    this._wind.set(wind);
  }

  setPrecipitation(precipitation: 'mm' | 'inch'): void {
    this._precipitation.set(precipitation);
  }

  search(input: string): void {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${input}`;
    this._loadingAutocomplete.set(true);
    this.http
      .get<Autocomplete>(url)
      .pipe(finalize(() => this._loadingAutocomplete.set(false)))
      .subscribe((res) => {
        if (!res.results) this._noResultFound.set(true);
        this._searchResults.set(res.results ?? []);
      });
  }

  searchDetail(autocomplete: AutocompleteResult, refresh?: boolean): void {
    let url = `https://api.open-meteo.com/v1/forecast?`;
    url += `latitude=${autocomplete.latitude}`;
    url += `&longitude=${autocomplete.longitude}`;
    url += `&temperature_unit=${this.temperature()}`;
    url += `&windspeed_unit=${this.wind()}`;
    url += `&precipitation_unit=${this.precipitation()}`;
    url +=
      `&timezone=auto&forecast_days=7` +
      `&current=temperature_2m%2Capparent_temperature%2Cweathercode%2Crelative_humidity_2m%2Cwindspeed_10m%2Cprecipitation` +
      `&hourly=temperature_2m%2Capparent_temperature%2Crelative_humidity_2m%2Cwindspeed_10m%2Cprecipitation%2Cweathercode` +
      `&daily=weathercode%2Ctemperature_2m_max%2Ctemperature_2m_min%2Cprecipitation_sum`;

    this._searchValue.set(autocomplete);
    this._noResultFound.set(false);

    if (!refresh) {
      this._loadingDetail.set(true);
    }

    this.http
      .get<Detail>(url)
      .pipe(finalize(() => this._loadingDetail.set(false)))
      .subscribe((res) => {
        this._selectedResult.set(autocomplete);
        this._detail.set(res);
      });
  }

  refreshSearch(): void {
    if (this._searchValue()) {
      this.searchDetail(this._searchValue()!, true);
    }
  }
}
