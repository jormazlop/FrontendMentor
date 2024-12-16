import { Component, signal } from '@angular/core';
import { MembershipInfo, MembershipItemComponent } from '@components/membership-item/membership-item.component';

@Component({
  selector: 'app-membership-options',
  imports: [MembershipItemComponent],
  templateUrl: './membership-options.component.html',
  styleUrl: './membership-options.component.scss'
})
export class MembershipOptionsComponent {

  membershipInfos = signal<MembershipInfo[]>([
    { type: 'Starter', price: 19, features: ['1 book/month', 'Online forums'], button: 'Subscribe Now'},
    { type: 'Pro', price: 29, features: ['2 book/month', 'Virtual meetups'], button: 'Subscribe Now'},
    { type: 'Pro', type2: 'Custom', features: ['Team access', 'Private sessions'], button: 'TALK TO US'}
  ])
}
