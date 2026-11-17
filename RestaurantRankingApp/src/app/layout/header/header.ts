import { Component, inject, model } from '@angular/core';
import { Search } from '@components/inputs/search/search';
import { Mode } from '@components/buttons/mode/mode';
import { Refresh } from '@components/buttons/refresh/refresh';
import { AddPlace } from '@components/buttons/add-place/add-place';
import { Places } from '@services/places';

@Component({
  imports: [Search, Mode, Refresh, AddPlace],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {

  search = model<string>('');
  service = inject(Places);

  onRefresh(): void {
    this.search.set('');
    this.service.setFilter('All');
  }

}
