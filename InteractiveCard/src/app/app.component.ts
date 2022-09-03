import { Component } from '@angular/core';
import { CardModel } from './models/card-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InteractiveCard';

  card = new CardModel('JANE APPLESEED', '0000 0000 0000 0000', '00','00','000');

  newCard(card: CardModel) {
    this.card = card;
  }
}
