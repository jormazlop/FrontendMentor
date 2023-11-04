import { Component } from '@angular/core';

type CardContainer = {
  user: string,
  followers: number,
  today: number,
  image: string,
  type: string
}

@Component({
  selector: 'app-overview-cards',
  templateUrl: './overview-cards.component.html',
  styleUrls: ['./overview-cards.component.scss']
})
export class OverviewCardsComponent {

  cards: CardContainer[] = [
    {
      user: 'nathanf',
      followers: 1987,
      today: 12,
      image: "../../../assets/icon-facebook.svg",
      type: 'facebook'
    },
    {
      user: 'nathanf',
      followers: 1044,
      today: 99,
      image: "../../../assets/icon-twitter.svg",
      type: 'twitter'
    },
    {
      user: 'realnathanf',
      followers: 11000,
      today: 1099,
      image: "../../../assets/icon-instagram.svg",
      type: 'instagram'
    },
    {
      user: 'Nathan F.',
      followers: 8239,
      today: -144,
      image: "../../../assets/icon-youtube.svg",
      type: 'youtube'
    }
  ]
}
