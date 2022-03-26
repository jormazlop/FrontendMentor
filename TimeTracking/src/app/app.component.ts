import { Component, OnInit } from '@angular/core';
import { Card } from './models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timeTracking';

  cards: Card[] = [
    {
      title: 'Work',
      current: 32,
      previous: 36,
      image: 'icon-work.svg',
      color: 'hsl(15, 100%, 70%)'
    },
    {
      title: 'Play',
      current: 10,
      previous: 8,
      image: 'icon-play.svg',
      color: 'hsl(195, 74%, 62%)'
    },
    {
      title: 'Study',
      current: 4,
      previous: 7,
      image: 'icon-study.svg',
      color: 'hsl(348, 100%, 68%)'
    },
    {
      title: 'Exercise',
      current: 4,
      previous: 5,
      image: 'icon-exercise.svg',
      color: 'hsl(145, 58%, 55%)'
    },
    {
      title: 'Social',
      current: 5,
      previous: 10,
      image: 'icon-social.svg',
      color: 'hsl(264, 64%, 52%)'
    },
    {
      title: 'Self Care',
      current: 2,
      previous: 2,
      image: 'icon-self-care.svg',
      color: 'hsl(43, 84%, 65%)'
    },
  ];
}
