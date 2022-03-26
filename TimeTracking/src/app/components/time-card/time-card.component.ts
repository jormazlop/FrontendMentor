import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-time-card',
  templateUrl: './time-card.component.html',
  styleUrls: ['./time-card.component.scss']
})
export class TimeCardComponent implements AfterViewInit {

  faEllipsis = faEllipsisH;

  @Input() card: Card = {
    title: '',
    current: 0,
    previous: 0,
    image: '',
    color: ''
  };

  finalCard: Card = {
    title: '',
    current: 0,
    previous: 0,
    image: '',
    color: ''
  };

  constructor() { }

  ngAfterViewInit() {
    setInterval(() => {
      if(this.finalCard.current <= this.card.current) {
        this.finalCard.current++;
      }
    }, 100);
  }

}
