import { Component, input } from '@angular/core';
import { IconCircleCheck } from '@shared/icons/icon-circle-check/icon-circle-check';
import { IconCirclePlus } from '@shared/icons/icon-circle-plus/icon-circle-plus';

@Component({
  selector: 'button-primary',
  imports: [IconCirclePlus, IconCircleCheck],
  templateUrl: './button-primary.html',
  styleUrl: './button-primary.scss',
})
export class ButtonPrimary {
  add = input<boolean>(true);
  disabled = input(false);
}
