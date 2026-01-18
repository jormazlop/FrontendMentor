import { Component, input } from '@angular/core';

@Component({
  selector: 'image-search',
  templateUrl: './search.svg',
  styleUrl: './search.scss',
})
export class Search {
  blue = input(true);
}
