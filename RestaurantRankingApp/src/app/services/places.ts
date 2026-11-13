import { HttpClient } from '@angular/common/http';
import { computed, inject, Service, signal } from '@angular/core';
import { Meta, Place, Response } from '@models/places';

@Service()
export class Places {
  private readonly http = inject(HttpClient);
  private readonly URL = 'data/sample-places.json';
  private _places = signal<Place[]>([]);
  readonly places = this._places.asReadonly();
  private _meta = signal<Meta | null>(null);
  readonly meta = this._meta.asReadonly();

  readonly rankedPlaces = computed(() =>
    this._places()
        .filter((place) => place.status === 'ranked' && place.rank)
        .sort((a, b) => Number(a.rank) - Number(b.rank)),
  );

  readonly wantPlaces = computed(() =>
    this._places()
        .filter((place) => place.status === 'want')
        .sort((a, b) => a.position - b.position),
  );

  constructor() {
    this.getPlaces();
  }

  getPlaces(): void {
    this.http.get<Response>(this.URL).subscribe((response) => {
      this._places.set(response.places.map((place, index) => ({ ...place, position: index + 1 })));
      this._meta.set(response.meta);
    });
  }
}
