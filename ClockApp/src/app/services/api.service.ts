import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, switchMap, tap } from 'rxjs';
import { Ip } from '../models/ip';
import { Geolocation } from '../models/geolocation';
import { WorldTime } from '../models/world-time';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  readonly worldtime$: Signal<WorldTime> = toSignal(
    this.http.get<Ip>('https://api.ipify.org/?format=json').pipe(
      map((data) => data.ip),
      switchMap((ip) =>
        this.http.get<Geolocation>(`https://api.ipbase.com/v2/info?ip=${ip}`)
      ),
      tap((geolocation) =>
        this.geolocation.set({ city: geolocation.data.location.city.name, country: geolocation.data.location.country.name })
      ),
      map((geolocation) => geolocation.data),
      switchMap((geolocation) =>
        this.http.get<WorldTime>(
          `https://worldtimeapi.org/api/timezone/${geolocation.location.country.timezones[0]}`
        )
      ),
      catchError(() =>
        this.http.get<WorldTime>(
          `https://worldtimeapi.org/api/timezone/Europe/Madrid`
        )
      )
    ),
    { initialValue: {} as any }
  );

  private geolocation = signal({ city: 'London', country: 'UK' });
  readonly geolocation$ = this.geolocation.asReadonly();

  private quote = signal<Quote>({
    _id: 'bcAbPetiKzd',
    content:
      '“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”',
    author: 'Ada Lovelace',
    tags: ['Famous Quotes', 'Inspirational'],
    authorSlug: 'albert-einstein',
    length: 56,
    dateAdded: new Date('2019-08-08'),
    dateModified: new Date('2023-04-14'),
  });

  readonly quote$ = this.quote.asReadonly();

  getQuote(): void {
    this.http
      .get<Quote[]>('https://api.quotable.io/quotes/random')
      .subscribe((quotes) => {
        this.quote.set(quotes[0]);
      });
  }
}
