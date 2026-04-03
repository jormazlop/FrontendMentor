import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonTertiary } from '@shared/buttons/button-tertiary/button-tertiary';


type Plan = {
  title: string;
  description: string;
  price: number;
  features: string[]
}

@Component({
  selector: 'payapi-pricing-1',
  imports: [DecimalPipe, ButtonTertiary],
  templateUrl: './pricing-1.html',
  styleUrl: './pricing-1.scss',
})
export class Pricing1 {
  plans: Plan[] = [
    {
      title: 'Free Plan',
      description: `Build and test using our core set of products with up to 100 API requests`,
      price: 0,
      features: ['transactions','auth', 'identity']
    },
    {
      title: 'Basic Plan',
      description: `Launch your project with unlimited requests and no contractual minimums`,
      price: 249,
      features: ['transactions','auth', 'identity', 'investments', 'assets']
    },
    {
      title: 'Premium Plan',
      description: `Get tailored solutions, volume pricing, and dedicated support for your team`,
      price: 499,
      features: ['transactions','auth', 'identity', 'investments', 'assets', 'liabilities', 'income']
    }
  ]
}
