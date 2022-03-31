import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Advice } from './models/advice';
import { AdviceService } from './services/advice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: String = 'AdviceGenerator';

  loading: boolean = false;

  adviceSubscription: Subscription = new Subscription();

  advice: Advice = {
    slip: {
      id: 0,
      advice: ''
    }
  };

  constructor(private adviceService: AdviceService) {}

  ngOnInit(): void {
    this.loading = true;

    this.adviceSubscription = this.adviceService.getAdvices().subscribe(data => {
      this.advice = data;
      this.loading = false;
    })
  }

  onClickAdvice(): void {

    this.loading = true;

    this.adviceSubscription.unsubscribe();

    setTimeout(() => {
      this.adviceSubscription = this.adviceService.getAdvices().subscribe(data => {
        this.advice = data;
        this.loading = false;
      })
    }, 1000);

  }
}
