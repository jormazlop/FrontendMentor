import { Component } from '@angular/core';
import { AvatarsComponent } from '@components/avatars/avatars.component';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-join-the-club',
  imports: [ButtonComponent, AvatarsComponent],
  templateUrl: './join-the-club.component.html',
  styleUrl: './join-the-club.component.scss'
})
export class JoinTheClubComponent {

}
