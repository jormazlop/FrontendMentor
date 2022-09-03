import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card-model';

@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.scss']
})
export class LeftContainerComponent implements OnInit {

  @Input() card: CardModel = new CardModel('JANE APPLESEED', '0000 0000 0000 0000', '00','00','000');

  constructor() { }

  ngOnInit(): void {
  }

}
