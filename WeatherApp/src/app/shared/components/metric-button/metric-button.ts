import { TitleCasePipe } from '@angular/common';
import { Component, effect, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClickOutside } from '@shared/directives/click-outside';
import { Weather } from '@shared/services/weather';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-metric-button',
  imports: [TitleCasePipe, FormsModule, ClickOutside],
  templateUrl: './metric-button.html',
  styleUrl: './metric-button.scss',
})
export class MetricButton {
  temperature = model<'celsius' | 'fahrenheit'>('celsius');
  wind = model<'kmh' | 'mph'>('kmh');
  precipitation = model<'mm' | 'inch'>('mm');

  service = inject(Weather);
  unit = this.service.unit;

  open = signal(false);
  modelChanged = new Subject<string[]>();


  constructor() {
    effect(() => {
      this.service.setTemperature(this.temperature());
      this.service.setWind(this.wind());
      this.service.setPrecipitation(this.precipitation());
      this.modelChanged.next([this.temperature().toString(), this.wind().toString(), this.precipitation().toString()])
    });

    this.modelChanged
      .pipe(debounceTime(300))
      .subscribe(() => {
        this.service.refreshSearch();
    });
  }

  clickMenu(): void {
    this.open.update((val) => !val);
  }

  closeMenu(): void {
    this.open.set(false);
  }

  changeUnit(): void {
    this.service.setUnit(this.unit() == 'metric' ? 'imperial' : 'metric');

    if (this.unit() == 'metric') {
      this.temperature.set('celsius');
      this.wind.set('kmh');
      this.precipitation.set('mm');
    } else {
      this.temperature.set('fahrenheit');
      this.wind.set('mph');
      this.precipitation.set('inch');
    }
  }
}
