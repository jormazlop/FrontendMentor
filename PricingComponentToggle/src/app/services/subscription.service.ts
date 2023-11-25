import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private pricing: WritableSignal<'annualy' | 'monthly'> = signal('annualy');

  changeSubscription(): void {
    this.pricing.set(this.pricing() === 'annualy'? 'monthly' : 'annualy');
  }

  getSubscription(): WritableSignal<'annualy' | 'monthly'> {
    return this.pricing;
  }
}
