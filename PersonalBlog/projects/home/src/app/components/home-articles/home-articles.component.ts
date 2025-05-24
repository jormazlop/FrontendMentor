import { DatePipe } from '@angular/common';
import { Component, output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-articles',
  templateUrl: './home-articles.component.html',
  styleUrl: './home-articles.component.scss',
  imports: [DatePipe, RouterModule]
})
export class HomeArticlesComponent {

  articles = signal([
    {
      name: `Balancing Hobbies and Coding: How Hiking and Rock Climbing Help Me Stay Motivated`,
      date: new Date(2025, 1, 18)
    },
    {
      name: `Reading for Inspiration: 5 Books That Shaped My Coding Journey`,
      date: new Date(2025, 1, 15)
    },
    {
      name: `Overcoming Imposter Syndrome as a New Developer`,
      date: new Date(2025, 1, 10)
    },
    {
      name: `Exploring the World of Responsive Design`,
      date: new Date(2025, 1, 4)
    },
    {
      name: `My Favorite Dev Tools for Productivity`,
      date: new Date(2025, 0, 29)
    }
  ]);
}
