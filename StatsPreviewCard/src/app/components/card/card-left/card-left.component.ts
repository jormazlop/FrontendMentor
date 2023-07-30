import { Component } from '@angular/core';

@Component({
  selector: 'app-card-left',
  templateUrl: './card-left.component.html',
  styleUrls: ['./card-left.component.scss']
})
export class CardLeftComponent {


  benefits = [
    {
      quantity: '10k+',
      text: 'companies'
    },
    {
      quantity: '314',
      text: 'templates'
    },
    {
      quantity: '12M+',
      text: 'queries'
    },
  ]

}
