import { Component, effect, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Places } from '@services/places';

@Component({
  imports: [FormsModule],
  selector: 'app-search',
  styleUrl: './search.scss',
  templateUrl: './search.html',
})
export class Search {
  search = model<string>('');
  service = inject(Places);

  constructor() {
    effect(() => {
      this.service.setSearch(this.search());
    });
  }

}
