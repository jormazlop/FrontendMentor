import { Component, input } from '@angular/core';

@Component({
  selector: 'foreign-icon-star-filled',
  imports: [],
  templateUrl: './icon-star-filled.html',
  styleUrl: './icon-star-filled.scss',
})
export class IconStarFilled {
  filled = input(false);
}
