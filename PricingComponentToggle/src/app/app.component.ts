import { Component, WritableSignal, effect, untracked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PageContainerComponent } from './layout/page-container/page-container.component';
import { TitleComponent } from './components/title/title.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ContainerComponent } from './components/container/container.component';
import { SubscriptionService } from './services/subscription.service';
import { timer } from 'rxjs';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

export type Plan = {
  type: string;
  price: number;
  storage: number;
  users: number;
  send: number;
  color: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PageContainerComponent,
    TitleComponent,
    ToggleComponent,
    ContainerComponent,
    NgxSkeletonLoaderModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PricingComponentToggle';

  plans: Plan[] = [];

  pricing: WritableSignal<'annualy' | 'monthly'>;

  constructor(private subscription: SubscriptionService) {

    this.pricing = this.subscription.getSubscription();

    this.plans = this.getPlan(this.pricing());

    effect(() => {
      this.plans = [];

      this.pricing();

      setTimeout(() => {
        this.plans = this.getPlan(this.pricing());
      }, 2000);
    });
  }


  getPlan(type: 'annualy' | 'monthly'): Plan[] {
    return type === 'annualy' ? [
      {
        type: 'Basic',
        price: 19.99,
        storage: 500,
        users: 2,
        send: 3,
        color: 'white'
      },
      {
        type: 'Proffesional',
        price: 24.99,
        storage: 1000,
        users: 5,
        send: 10,
        color: 'blue'
      },
      {
        type: 'Master',
        price: 39.99,
        storage: 2000,
        users: 10,
        send: 20,
        color: 'white'
      }
    ] :
    [
      {
        type: 'Basic',
        price: 199.99,
        storage: 500,
        users: 2,
        send: 3,
        color: 'white'
      },
      {
        type: 'Proffesional',
        price: 249.99,
        storage: 1000,
        users: 5,
        send: 10,
        color: 'blue'
      },
      {
        type: 'Master',
        price: 399.99,
        storage: 2000,
        users: 10,
        send: 20,
        color: 'white'
      }
    ]
  }
}
