import { Component, input } from '@angular/core';
import { Painting } from '../../models/gallery';

@Component({
  selector: 'app-detail-description',
  standalone: true,
  imports: [],
  templateUrl: './detail-description.component.html',
  styleUrl: './detail-description.component.scss'
})
export class DetailDescriptionComponent {
  painting = input.required<Painting>();
}
