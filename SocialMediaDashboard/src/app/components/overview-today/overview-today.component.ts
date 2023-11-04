import { Component } from '@angular/core';

type CardContainer = {
  section: string,
  quantity: number,
  percentage: number,
  type: string,
}

@Component({
  selector: 'app-overview-today',
  templateUrl: './overview-today.component.html',
  styleUrls: ['./overview-today.component.scss']
})
export class OverviewTodayComponent {

  cards: CardContainer[] = [
    {
      section: 'Page Views',
      quantity: 87,
      percentage: 3,
      type: 'facebook'
    },
    {
      section: 'Likes',
      quantity: 52,
      percentage: -2,
      type: 'facebook'
    },
    {
      section: 'Likes',
      quantity: 5462,
      percentage: 2257,
      type: 'instagram'
    },
    {
      section: 'Profile Views',
      quantity: 52000,
      percentage: 1375,
      type: 'instagram'
    },
    {
      section: 'Retweets',
      quantity: 117,
      percentage: 303,
      type: 'twitter'
    },
    {
      section: 'Likes',
      quantity: 507,
      percentage: 553,
      type: 'twitter'
    },
    {
      section: 'Likes',
      quantity: 107,
      percentage: -19,
      type: 'youtube'
    },
    {
      section: 'Total Views',
      quantity: 1407,
      percentage: -12,
      type: 'youtube'
    },
  ]

}
