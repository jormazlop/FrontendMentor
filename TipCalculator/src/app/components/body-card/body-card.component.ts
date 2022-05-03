import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-card',
  templateUrl: './body-card.component.html',
  styleUrls: ['./body-card.component.scss']
})
export class BodyCardComponent implements OnInit {

  tipAmount: number = 0.00;
  totalPerson: number = 0.00;

  billInput: string = '';
  billTip: string = '';
  numberInput: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onValueChange(values: number[]) {

    this.billInput = values[0].toString();
    this.billTip = values[1].toString();
    this.numberInput = values[2].toString();

    this.tipAmount = (values[0] * values[1])/100;

    this.totalPerson = values[0] + this.tipAmount;

  }

  resetValues() {
    this.tipAmount = 0;
    this.totalPerson = 0;
    this.billInput = '';
    this.billTip = '';
    this.numberInput = '';
  }

}
