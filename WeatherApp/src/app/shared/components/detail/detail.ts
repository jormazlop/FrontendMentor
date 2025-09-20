import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { getWeatherCodeFromNumber } from '@shared/models/weather.enum';
import { TemperaturePipe } from '@shared/pipes/temperature-pipe';
import { Weather } from '@shared/services/weather';

@Component({
  selector: 'app-detail',
  imports: [TitleCasePipe, DatePipe, TemperaturePipe],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export class Detail {
  selectedResult = inject(Weather).selectedResult;
  detail = inject(Weather).detail;

  private temperaturePipe = new TemperaturePipe();

  weatherCode = computed(() => getWeatherCodeFromNumber(this.detail().current.weathercode));

  items = computed(() => [
    {
      text: 'Feels Like',
      value:
        this.detail().current.apparent_temperature +
        this.temperaturePipe.transform(this.detail().current_units.apparent_temperature),
    },
    {
      text: 'Humidity',
      value:
        this.detail().current.relative_humidity_2m +
        this.detail().current_units.relative_humidity_2m,
    },
    {
      text: 'Wind',
      value: this.detail().current.windspeed_10m + ' ' + this.detail().current_units.windspeed_10m,
    },
    {
      text: 'Precipitation',
      value: this.detail().current.precipitation + ' ' + this.detail().current_units.precipitation,
    },
  ]);
}
