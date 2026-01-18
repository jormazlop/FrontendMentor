import { Component, output } from '@angular/core';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { Filter } from '@shared/images/filter/filter';
import { Search } from '@shared/images/search/search';

@Component({
  selector: 'input-search-responsive',
  imports: [ButtonPrimary, Search, Filter],
  templateUrl: './input-search-responsive.html',
  styleUrl: './input-search-responsive.scss',
})
export class InputSearchResponsive {
  search = output();
  filter = output();

  onSearch(): void {
    this.search.emit();
  }

  onFilter(): void {
    this.filter.emit();
  }
}
