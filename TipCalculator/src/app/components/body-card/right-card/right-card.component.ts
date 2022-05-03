import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-right-card',
  templateUrl: './right-card.component.html',
  styleUrls: ['./right-card.component.scss']
})
export class RightCardComponent implements OnInit {

  @Input() tipAmount: number = 0.00;

  @Input() totalPerson: number = 0.00;

  @Output() resetEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  resetButton() {
    this.resetEvent.emit();
  }

}
