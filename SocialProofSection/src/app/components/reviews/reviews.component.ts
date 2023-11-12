import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, ReviewComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

  reviews = ['Reviews', 'Guru', 'BestTech'];

  test = 3000;
}
