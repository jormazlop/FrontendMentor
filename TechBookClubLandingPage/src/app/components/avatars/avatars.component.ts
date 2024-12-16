import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { StarsComponent } from '@components/stars/stars.component';

export type AvatarType = 'primary' | 'secondary';

@Component({
  selector: 'app-avatars',
  imports: [StarsComponent, NgClass],
  templateUrl: './avatars.component.html',
  styleUrl: './avatars.component.scss'
})
export class AvatarsComponent {
  type = input<AvatarType>('primary');
}
