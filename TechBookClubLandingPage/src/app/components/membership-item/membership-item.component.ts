import { UpperCasePipe } from '@angular/common';
import { Component, effect, HostBinding, input } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { CheckItemComponent } from '@components/check-item/check-item.component';

export type MembershipInfo = {
  type: string,
  type2?: string,
  price?: number,
  features: string[],
  button: string
}

@Component({
  selector: 'app-membership-item',
  imports: [CheckItemComponent, ButtonComponent, UpperCasePipe],
  templateUrl: './membership-item.component.html',
  styleUrl: './membership-item.component.scss'
})
export class MembershipItemComponent {

  @HostBinding('class.optional') isOptional = false;

  membership = input.required<MembershipInfo>();

  optional = input<boolean>(false);

  private eff1 = effect(() => {
    this.isOptional = this.optional();
  });
}
