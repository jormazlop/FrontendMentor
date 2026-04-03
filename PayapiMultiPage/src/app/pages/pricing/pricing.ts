import { Component } from '@angular/core';
import { Pricing1 } from './pricing-1/pricing-1';
import { Pricing2 } from './pricing-2/pricing-2';

@Component({
  selector: 'payapi-pricing',
  imports: [Pricing1, Pricing2],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export default class Pricing {

}
