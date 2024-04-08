import { Component, input } from '@angular/core';
import { Painting } from '../../models/gallery';

@Component({
  selector: 'app-thumbnail-image',
  standalone: true,
  imports: [],
  templateUrl: './thumbnail-image.component.html',
  styleUrl: './thumbnail-image.component.scss'
})
export class ThumbnailImageComponent {
  painting = input.required<Painting>();
}
