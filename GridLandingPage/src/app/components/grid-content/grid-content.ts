import { Component, input } from '@angular/core';
import { GridContentType } from '@models/model';

@Component({
  selector: 'app-grid-content',
  imports: [],
  templateUrl: './grid-content.html',
  styleUrl: './grid-content.scss',
})
export class GridContent {
  content = input.required<GridContentType>();
}
