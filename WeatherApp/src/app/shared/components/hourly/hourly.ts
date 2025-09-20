import { Component, computed, inject, signal } from '@angular/core';
import { DayButton } from '../day-button/day-button';
import { Weather } from '@shared/services/weather';
import { DatePipe } from '@angular/common';
import { getWeatherCodeFromNumber } from '@shared/models/weather.enum';
import { TemperaturePipe } from '@shared/pipes/temperature-pipe';

@Component({
  selector: 'app-hourly',
  imports: [DayButton, DatePipe, TemperaturePipe],
  templateUrl: './hourly.html',
  styleUrl: './hourly.scss'
})
export class Hourly {

  private datePipe = new DatePipe('en-En');

  detail = inject(Weather).detail;
  time = computed(() => this.detail().hourly.time);
  temperatures = computed(() => this.detail().hourly.temperature_2m);
  unit = computed(() => this.detail().current_units.temperature_2m);
  codes = computed(() => {
    return this.detail().hourly.weathercode.map((code) => getWeatherCodeFromNumber(code))
  });

  index = signal<number[]>([]);

  onSelectDay(day: string): void {
    const indexList: number[] = [];

    this.time().forEach((date, index) => {
      if(this.datePipe.transform(date, 'EEEE')?.toLowerCase() == day.toLowerCase()) {
        indexList.push(index);
      }
    });

    this.index.set(indexList);

  }
}
