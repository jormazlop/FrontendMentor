import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blog';

    articles = signal([
    {
      name: `Balancing Hobbies and Coding: How Hiking and Rock Climbing Help Me Stay Motivated`,
      date: new Date(2025, 1, 18),
      description: `Thoughts on maintaining energy and focus through outdoor activities and exercise.`
    },
    {
      name: `Reading for Inspiration: 5 Books That Shaped My Coding Journey`,
      date: new Date(2025, 1, 15),
      description: `A few of my favorite books, both fiction and non-fiction, that keep me motivated.`
    },
    {
      name: `Overcoming Imposter Syndrome as a New Developer`,
      date: new Date(2025, 1, 10),
      description: `Some tips and personal reflections on dealing with self-doubt when learning to code.`
    },
    {
      name: `Exploring the World of Responsive Design`,
      date: new Date(2025, 1, 4),
      description: `The importance of making websites look great on different devices.`
    },
    {
      name: `My Favorite Dev Tools for Productivity`,
      date: new Date(2025, 0, 29),
      description: `A quick look at the tools I rely on, from code editors to browser extensions.`
    },
    {
      name: `Understanding JavaScript Basics`,
      date: new Date(2025, 0, 28),
      description: `My adventure into JavaScript’s fundamentals—variables, functions, loops, and more.`
    },
    {
      name: `Learning HTML & CSS: My First Week`,
      date: new Date(2025, 0, 16),
      description: `A recap of my first steps in web development, from basic tags to styling techniques.`
    },
    {
      name: `Why I Chose Front-End Web Development`,
      date: new Date(2025, 0, 12),
      description: `I share the reasons behind my shift to front-end development and why this path excites me.`
    }
  ]);
}
