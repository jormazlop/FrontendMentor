import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {

  comingDate: Date = new Date('11/4/24')

  actualDate: Date = new Date();

  secondsLeft = 0;
  minutesLeft = 0;
  hoursLeft = 0;
  daysLeft = 0;

  intervalSubscription = new Subscription();

  ngOnInit(): void {


    let difference = this.comingDate.valueOf() - this.actualDate.valueOf();

    difference = Math.ceil(difference/ 1000);

    this.daysLeft = Math.floor(difference / (3600 * 24));

    this.hoursLeft = Math.floor((difference / 3600) % this.daysLeft);

    this.minutesLeft = Math.floor((difference / 60) - (this.daysLeft * 60 * 24) - (this.hoursLeft * 60));

    this.secondsLeft = Math.floor(difference - (this.daysLeft * 3600 * 24) - (this.hoursLeft * 3600) - (this.minutesLeft * 60));


    this.intervalSubscription = interval(1000).subscribe(() => {
      this.updateDate();
    })
  }

  updateDate(): void {
    if (this.secondsLeft > 0) {
      this.secondsLeft--;
      return;
    } else {
      this.secondsLeft = 59;
    }

    if (this.minutesLeft > 0) {
      this.minutesLeft--;
      return;
    } else {
      this.minutesLeft = 59;
    }

    if (this.hoursLeft > 0) {
      this.hoursLeft--;
      return;
    } else {
      this.hoursLeft = 23;
    }

    if (this.daysLeft > 0) {
      this.daysLeft--;
      return;
    }
  }

  ngOnDestroy(): void {
      this.intervalSubscription.unsubscribe();
  }

}
