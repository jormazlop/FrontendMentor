import { Component } from '@angular/core';
import { Feature } from '../shared/models/feature.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  features: Feature[] = [

    new Feature(
      '../../../assets/shared/icon-compatible.svg',
      'Highly compatible',
      `Easy to use and works well with all major computer brands, gaming consoles and mobile devices.
                    Plug & play, no installation or driver needed.`
    ),
    new Feature(
      '../../../assets/shared/icon-bluetooth.svg',
      'Wireless with bluetooth',
      `Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away.
                    Simply plug the unifying receiver into your computer.`
    ),
    new Feature(
      '../../../assets/shared/icon-battery.svg',
      'High capacity battery',
      `Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. 
                    Enjoy 40 hours of usage time between charges.`
    ),
    new Feature(
      '../../../assets/shared/icon-light.svg',
      'RGB backlit modes',
      `Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps
                    you type in low light conditions.`
    )
  ]
}
