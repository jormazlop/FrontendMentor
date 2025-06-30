import { Component, inject } from '@angular/core';
import { ProfileService } from '@shared/services/profile';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss'
})
export class Avatar {
  url = inject(ProfileService).url;
}
