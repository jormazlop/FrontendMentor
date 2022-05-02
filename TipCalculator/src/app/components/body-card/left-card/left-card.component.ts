import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-card',
  templateUrl: './left-card.component.html',
  styleUrls: ['./left-card.component.scss']
})
export class LeftCardComponent implements OnInit {

  billInput: string = '';
  billError: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onlyDigits(event: KeyboardEvent) {
    let code = event.key;
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    return numbers.includes(code);
  }

}
