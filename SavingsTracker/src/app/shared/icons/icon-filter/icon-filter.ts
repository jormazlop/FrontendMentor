import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-filter',
  imports: [],
  templateUrl: './icon-filter.svg',
  styleUrl: './icon-filter.scss',
  host: {
    '[class.secondary]' : 'secondary()'
  },
})
export class IconFilter {


  secondary = input(false);
}
