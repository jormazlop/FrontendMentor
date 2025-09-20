import { Component, effect, inject, linkedSignal, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClickOutside } from '@shared/directives/click-outside';
import { AutocompleteResult } from '@shared/models/weather.model';
import { Weather } from '@shared/services/weather';
import { debounceTime, distinctUntilChanged, filter, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  imports: [FormsModule, ClickOutside],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {

  private service = inject(Weather);
  searchResults = linkedSignal<AutocompleteResult[]>(() => this.service.searchResults());

  loading = this.service.loadingAutocomplete;

  search = model('');

  modelChanged = new Subject<string>();

  constructor() {
    effect(() => this.modelChanged.next(this.search()));

    this.modelChanged.pipe(debounceTime(300), distinctUntilChanged()).pipe(filter(val => !!val)).subscribe((val) => {
      this.service.search(val);
    });

    this.searchResults.set([])
  }

  closeAutocomplete(): void {
    this.searchResults.set([]);
  }

  searchAutocomplete(): void {
    if(this.search()) {
      this.service.search(this.search());
    }
  }

  searchDetail(autocomplete: AutocompleteResult): void {
    this.searchResults.set([]);
    this.service.searchDetail(autocomplete);
  }
}
