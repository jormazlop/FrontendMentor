import { DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { getWeatherCodeFromNumber, weatherCode } from '@shared/models/weather.enum';
import { TemperaturePipe } from '@shared/pipes/temperature-pipe';
import { Weather } from '@shared/services/weather';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.html',
  imports: [DatePipe, TemperaturePipe],
  styleUrl: './daily.scss'
})
export class Daily {

  private service = inject(Weather);

  unit = computed(() => this.service.detail().current_units.temperature_2m);
  days = computed(() => this.service.detail().daily.time);
  maxs = computed(() => this.service.detail().daily.temperature_2m_max);
  mins = computed(() => this.service.detail().daily.temperature_2m_min);
  weathers = computed(() => {
    return this.service.detail().daily.weathercode.map(code => getWeatherCodeFromNumber(code))
  });
}
