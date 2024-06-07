import { Component, Signal, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { WorldTime } from './models/world-time';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { MoreButtonComponent } from './components/more-button/more-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, UpperCasePipe, MoreButtonComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ClockApp';

  worldtime$: Signal<WorldTime> = inject(ApiService).worldtime$;

  geolocation$ = inject(ApiService).geolocation$;

  greeting$ = computed(() => {

    const hour = new Date(this.worldtime$().datetime).getHours();

    if(hour >= 5 && hour < 12) {
      return "morning";
    }

    if(hour >= 12 && hour < 16) {
      return "afternoon";
    }

    return "evening";
  });

  more = signal(false);

  private apiService = inject(ApiService);
  getQuoute = () => this.apiService.getQuote();

  quote$ = this.apiService.quote$;

  refreshQuote(): void {
    this.getQuoute();
  }

  onClickMore(): void {
    this.more.update(val => !val);
  }
}
