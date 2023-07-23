import { Component } from '@angular/core';
import { Info } from '../models/info.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  elements: Info[] = [
    {
      img: '../../assets/illustration-passions.svg',
      title: 'Indulge your passions',
      description: `Your passions shouldn't be just for the weekend. Earn a living doing what you love.`
    },
    {
      img: '../../assets/illustration-financial-freedom.svg',
      title: 'Gain financial freedom',
      description: `Start making money work for you. There’s nothing quite like earning while you sleep.`
    },
    {
      img: '../../assets/illustration-lifestyle.svg',
      title: 'Choose your lifestyle',
      description: `Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.`
    },
    {
      img: '../../assets/illustration-work-anywhere.svg',
      title: 'Work from anywhere',
      description: `Selling online means not being pinned down. Want to work AND travel? Go for it!`
    },
  ]
}
