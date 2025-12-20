import { Component, input } from '@angular/core';
import { IconCirclePlus } from '@shared/icons/icon-circle-plus/icon-circle-plus';

@Component({
  selector: 'button-primary',
  imports: [IconCirclePlus],
  templateUrl: './button-primary.html',
  styleUrl: './button-primary.scss',
})
export class ButtonPrimary {
  disabled = input(false);
}
