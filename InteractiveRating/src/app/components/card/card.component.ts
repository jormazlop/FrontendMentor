import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  points: number = 0;

  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectValue(value: number): void {
    this.points === value? this.points = 0: this.points = value;
  }

  submit(): void {
    this.submitted = true;
  }

}
