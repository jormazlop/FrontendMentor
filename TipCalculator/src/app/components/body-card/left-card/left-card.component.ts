import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-card',
  templateUrl: './left-card.component.html',
  styleUrls: ['./left-card.component.scss']
})
export class LeftCardComponent implements OnInit {

  @Input() billInput: string = '';
  billError: boolean = false;
  @Input() billTip: string = '';
  @Input() numberInput: string = '';
  numberError: boolean = false;

  @Output() valuesEvent = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit(): void {
  }

  onlyDigits(event: KeyboardEvent) {
    let code = event.key;
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    return numbers.includes(code);
  }

  onlyDigitsTip(event: KeyboardEvent) {
    let code = event.key;
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    return numbers.includes(code) && this.billTip.length < 2;
  }

  onlyDigitsNumber(event: KeyboardEvent) {
    let code = event.key;
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    return numbers.includes(code);
  }

  clickTip(tip: number) {
    this.billTip = tip.toString();

    this.valueChange();
  }

  valueChange() {
    this.numberError = +this.numberInput == 0

    if(this.billInput && this.numberInput) {
      this.valuesEvent.emit([+this.billInput, +this.billTip, +this.numberInput]);
    }

  }

}
