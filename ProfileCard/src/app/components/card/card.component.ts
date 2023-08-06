import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  followers = 0;
  likes = 0;
  photos = 0;
  private interval$ = interval(30);
  private subscriptions: Subscription[] = [];

  constructor() {}

  ngOnInit(): void {
    this.subscriptions.push(this.interval$.subscribe(() => {
        if (this.followers < 80) {
          this.followers += 8;
        }
      })
    );
    this.subscriptions.push(this.interval$.subscribe(() => {
        if (this.likes < 803) {
          this.likes += 80;
        } else {
          this.likes = 803;
        }
      })
    );

    this.subscriptions.push(this.interval$.subscribe(() => {
        if (this.photos < 1.4) {
          this.photos += 0.14;
          this.photos = Number(this.photos.toFixed(2));
        } else {
          this.photos = 1.4;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }

}
