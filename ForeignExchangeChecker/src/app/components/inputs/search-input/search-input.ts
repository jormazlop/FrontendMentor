import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconSearch } from '@components/icons/icon-search/icon-search';

@Component({
  selector: 'foreign-search-input',
  imports: [IconSearch, FormsModule],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss',
})
export class SearchInput {
  search = model('');
}
