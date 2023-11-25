import { Component, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {

  pricing: WritableSignal<string>;

  constructor(private subscription: SubscriptionService) {
    this.pricing = this.subscription.getSubscription();
  }

  changePricing(): void {
    this.subscription.changeSubscription();
  }
}
