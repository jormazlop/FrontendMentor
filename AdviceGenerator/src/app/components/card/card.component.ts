import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Advice } from 'src/app/models/advice';


@Component({
  selector: 'advice-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() advice: Advice = {} as Advice;

  @Input() loading: boolean = false;

  @Output() adviceClick = new EventEmitter();

  constructor() { }

  onClickAdvice(): void {
    this.adviceClick.emit();
  }

}
