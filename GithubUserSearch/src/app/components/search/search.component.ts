import { Component, Output, Input, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchInput = '';

  @Output() onSearch = new EventEmitter<string>();

  @Input() userNotFound = false;

  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.searchUser();
  }

  searchUser(): void {
    this.onSearch.emit(this.searchInput);
  }
}
